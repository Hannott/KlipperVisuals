#!/usr/bin/env python3
"""Regenerate every figure in the two-mode input shaper research paper.

Usage:
    python generate_figures.py --kalico /path/to/kalico [--outdir ../figures]

Requires: numpy, matplotlib, and a checkout of Kalico (bleeding-edge-v2 or
any branch carrying klippy/extras/shaper_defs.py + shaper_calibrate.py with
the analytic-velocity estimators). The two-mode convolution and both
selection-metric variants are implemented inline below, so the figures do
not depend on which selection metric the checkout ships.

Recorded experimental artifacts (impulse vectors found by the optimization
runs described in the paper) are embedded as constants and re-verified
against the authoritative estimators every time this script runs; the
script prints the verification values so drift is visible.
"""

import argparse
import importlib.util
import pathlib
import sys
import types

import numpy as np
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

# ---------------------------------------------------------------------------
# Palette (validated categorical slots, light surface)
# ---------------------------------------------------------------------------
C1, C2, C3, C4, C5 = "#2a78d6", "#1baf7a", "#eda100", "#4a3aa7", "#e34948"
SURFACE = "#fcfcfb"
INK = "#0b0b0b"
INK2 = "#52514e"
MUTED = "#898781"
GRID = "#e1e0d9"
BASELINE = "#c3c2b7"

plt.rcParams.update(
    {
        "figure.facecolor": SURFACE,
        "axes.facecolor": SURFACE,
        "savefig.facecolor": SURFACE,
        "font.family": "sans-serif",
        "font.sans-serif": ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        "font.size": 10,
        "text.color": INK,
        "axes.edgecolor": BASELINE,
        "axes.labelcolor": INK2,
        "axes.titlecolor": INK,
        "axes.titlesize": 11,
        "axes.titleweight": "600",
        "axes.grid": True,
        "grid.color": GRID,
        "grid.linewidth": 0.6,
        "axes.axisbelow": True,
        "axes.spines.top": False,
        "axes.spines.right": False,
        "xtick.color": MUTED,
        "ytick.color": MUTED,
        "xtick.labelcolor": INK2,
        "ytick.labelcolor": INK2,
        "lines.linewidth": 1.8,
        "legend.frameon": False,
        "svg.fonttype": "none",
    }
)

# ---------------------------------------------------------------------------
# Kalico module loading
# ---------------------------------------------------------------------------


def load_kalico(repo):
    repo = pathlib.Path(repo)
    pkg = types.ModuleType("klippy")
    pkg.__path__ = [str(repo / "klippy")]
    sys.modules["klippy"] = pkg
    extras = types.ModuleType("klippy.extras")
    extras.__path__ = [str(repo / "klippy" / "extras")]
    sys.modules["klippy.extras"] = extras

    def load(fullname, path):
        spec = importlib.util.spec_from_file_location(fullname, path)
        mod = importlib.util.module_from_spec(spec)
        sys.modules[fullname] = mod
        spec.loader.exec_module(mod)
        return mod

    sd = load("klippy.extras.shaper_defs", repo / "klippy/extras/shaper_defs.py")
    sc = load(
        "klippy.extras.shaper_calibrate", repo / "klippy/extras/shaper_calibrate.py"
    )
    return sd, sc


# ---------------------------------------------------------------------------
# Two-mode convolution (the subject of the paper, implemented inline)
# ---------------------------------------------------------------------------


def convolve_shapers(shaper1, shaper2):
    """Convolve two impulse shapers: times add, amplitudes multiply.

    The residual vibration of the result at any frequency is the product of
    the components' residuals, so a zero of either component is a zero of
    the convolution.
    """
    A1, T1 = shaper1
    A2, T2 = shaper2
    impulses = sorted(
        (T1[i] + T2[j], A1[i] * A2[j])
        for i in range(len(A1))
        for j in range(len(A2))
    )
    A, T = [], []
    for t, a in impulses:
        if T and t - T[-1] < 1e-9:
            A[-1] += a
        else:
            A.append(a)
            T.append(t)
    inv_d = 1.0 / sum(A)
    t0 = T[0]
    return [a * inv_d for a in A], [t - t0 for t in T]


# ---------------------------------------------------------------------------
# Metrics
# ---------------------------------------------------------------------------

TEST_DRS = [0.075, 0.1, 0.15]  # firmware TEST_DAMPING_RATIOS


def shaper_vals(sc, shaper, freqs, smoother=False):
    """Residual response, pessimized over the firmware's test damping ratios."""
    est = sc.estimate_smoother if smoother else sc.estimate_shaper
    vals = np.zeros_like(freqs, dtype=float)
    for dr in TEST_DRS:
        vals = np.maximum(vals, est(np, shaper, dr, freqs))
    return vals


def remaining_vibrations_global(freq_bins, vals, psd, min_freq=5.0):
    """The stock selection score: single global acceptable-vibration threshold
    calibrated to the tallest peak."""
    pos = freq_bins > 0
    thresh = (psd[pos] / freq_bins[pos]).max() * (freq_bins + min_freq) / 33.3
    remaining = (np.maximum(vals * psd - thresh, 0) * freq_bins**2).sum()
    return remaining / (psd * freq_bins**2).sum()


def threshold_curves(freq_bins, psd, min_freq=5.0, band_hz=12.0, rel_prom=0.05):
    """Return (global, peak-local) acceptable-vibration threshold curves."""
    pos = freq_bins > 0
    ratio = np.where(pos, np.divide(psd, freq_bins, out=np.zeros_like(psd), where=pos), 0)
    global_ratio = ratio[pos].max()
    local = np.full_like(ratio, global_ratio)
    is_peak = np.zeros_like(psd, dtype=bool)
    is_peak[1:-1] = (
        (psd[1:-1] > psd[:-2]) & (psd[1:-1] >= psd[2:]) & (psd[1:-1] > rel_prom * psd.max())
    )
    for i in np.nonzero(is_peak & pos)[0]:
        if ratio[i] >= global_ratio:
            continue
        band = np.abs(freq_bins - freq_bins[i]) <= band_hz
        local[band] = np.minimum(local[band], ratio[i])
    scale = (freq_bins + min_freq) / 33.3
    return global_ratio * scale, local * scale


def brute_ringing(shaper, f, zeta, cycles_after=60):
    """Independent time-domain check: steady post-move oscillation amplitude of
    a damped oscillator driven by the impulse train, relative to unshaped.
    Shares no code with the firmware estimators."""
    A, T = shaper
    omega = 2 * np.pi * f
    omega_d = omega * np.sqrt(1 - zeta**2)
    t = np.linspace(T[-1], T[-1] + cycles_after / f, 20000)
    x = np.zeros_like(t)
    for a, ti in zip(A, T):
        u = t - ti
        m = u >= 0
        x[m] += a * np.exp(-zeta * omega * u[m]) * np.sin(omega_d * u[m]) / omega_d
    x /= sum(A)
    tail = x[int(0.6 * len(x)):]
    u0 = t - T[-1]
    x0 = np.exp(-zeta * omega * u0) * np.sin(omega_d * u0) / omega_d
    tail0 = x0[int(0.6 * len(x0)):]
    return (tail.max() - tail.min()) / (tail0.max() - tail0.min())


# ---------------------------------------------------------------------------
# Recorded experimental artifacts (see paper appendix)
# ---------------------------------------------------------------------------

# Pathological 3-impulse dual-zero root (section 4.2). Solves the classical
# final-residual equations at (45.2 Hz, zeta 0.043) and (79.5 Hz, zeta 0.09)
# to machine precision, yet carries a large mid-window transient. The seed
# below is the recorded root at reduced precision; Newton refinement below
# recovers it to full precision at run time.
PATH_SEED = ([0.362, 0.393, 0.245], [0.0, 0.00844, 0.01611])
PATH_MODES = ((45.2, 0.043), (79.5, 0.09))

# Recorded joint-optimized 4-impulse winner (section 4.4), found by GPU
# differential evolution minimizing worst-case band residual over both peak
# bands of the synthetic two-peak plant (45.2 / 81.1 Hz, zeta 0.042).
JOINT_N4 = (
    [0.2539, 0.3188, 0.2736, 0.1538],
    [0.0, 0.00618, 0.01284, 0.01935],
)
SYNTH_MODES = ((45.2, 0.042), (81.1, 0.042))


def refine_pathological_root(sc):
    """Newton-refine PATH_SEED on the classical final-residual equations."""

    def s_c(A, T, f, zeta):
        A, T = np.asarray(A, float), np.asarray(T, float)
        omega = 2 * np.pi * f
        omega_d = omega * np.sqrt(1 - zeta**2)
        W = A * np.exp(-zeta * omega * (T[-1] - T))
        return (W * np.sin(omega_d * T)).sum(), (W * np.cos(omega_d * T)).sum()

    def resid(x):
        a0, a1, a2, t1, t2 = x
        A, T = [a0, a1, a2], [0.0, t1, t2]
        (f1, z1), (f2, z2) = PATH_MODES
        s1, c1 = s_c(A, T, f1, z1)
        s2, c2 = s_c(A, T, f2, z2)
        return np.array([a0 + a1 + a2 - 1.0, s1, c1, s2, c2])

    x = np.array(PATH_SEED[0] + PATH_SEED[1][1:], float)
    for _ in range(60):
        F = resid(x)
        if np.max(np.abs(F)) < 1e-13:
            break
        J = np.zeros((5, 5))
        for i in range(5):
            xp = x.copy()
            xp[i] += 1e-7
            J[:, i] = (resid(xp) - F) / 1e-7
        x = x + np.linalg.solve(J, -F)
    A, T = [x[0], x[1], x[2]], [0.0, x[3], x[4]]
    return (A, T), np.max(np.abs(resid(x)))


# ---------------------------------------------------------------------------
# Figure helpers
# ---------------------------------------------------------------------------


def save(fig, outdir, name):
    for ext in ("svg", "png"):
        fig.savefig(outdir / f"{name}.{ext}", bbox_inches="tight", dpi=160)
    plt.close(fig)
    print(f"  wrote {name}.svg")


def load_capture(datafile):
    d = np.genfromtxt(datafile, delimiter=",", names=True)
    return d["freq"], d["psd_xyz"]


# ---------------------------------------------------------------------------
# Figures
# ---------------------------------------------------------------------------


def fig1_real_psd(outdir, freq, psd):
    peaks = [(45.2, 0.064), (79.5, 0.094), (132.6, 0.031)]
    fig, ax = plt.subplots(figsize=(7.2, 3.4))
    ax.fill_between(freq, psd, color=C1, alpha=0.15, linewidth=0)
    ax.plot(freq, psd, color=C1)
    pk_h = np.interp([p[0] for p in peaks], freq, psd)
    for (f0, z), h, lbl in zip(peaks, pk_h, ["1", "2", "3"]):
        ax.annotate(
            f"peak {lbl}\n{f0:.1f} Hz\nζ≈{z:.3f}",
            xy=(f0, h),
            xytext=(f0 + 6, h + 0.12 * psd.max()),
            fontsize=8.5,
            color=INK2,
            arrowprops=dict(arrowstyle="-", color=MUTED, lw=0.8),
        )
    ax.set_xlim(0, 200)
    ax.set_ylim(0, psd.max() * 1.35)
    ax.set_xlabel("Frequency (Hz)")
    ax.set_ylabel("Power spectral density")
    ax.set_yticklabels([])
    ax.set_title("Measured Y-axis vibration spectrum: three significant resonances")
    save(fig, outdir, "fig1_real_psd")


def fig2_two_mode_notch(sd, sc, outdir, freq, psd):
    (f1, z1), (f2, z2) = (45.2, 0.064), (79.5, 0.094)
    fr = np.linspace(5, 200, 1500)
    single = sd.get_mzv_shaper(f1, z1)
    two = convolve_shapers(sd.get_zv_shaper(f1, z1), sd.get_zv_shaper(f2, z2))
    v_single = shaper_vals(sc, single, fr)
    v_two = shaper_vals(sc, two, fr)

    fig, ax = plt.subplots(figsize=(7.2, 3.6))
    psd_bg = np.interp(fr, freq, psd) / psd.max()
    ax.fill_between(fr, psd_bg, color=MUTED, alpha=0.18, linewidth=0)
    ax.plot(fr, v_single, color=C2, label=f"single mzv @ {f1:.1f} Hz (3 impulses)")
    ax.plot(fr, v_two, color=C1, label="two-mode zv×zv @ 45.2 + 79.5 Hz (4 impulses)")
    ax.axvline(f1, color=BASELINE, lw=0.8, ls=":")
    ax.axvline(f2, color=BASELINE, lw=0.8, ls=":")
    ax.annotate(
        "second peak left exposed\nby the single-frequency shaper",
        xy=(f2 + 1.5, np.interp(f2, fr, v_single)),
        xytext=(108, 0.55),
        fontsize=8.5,
        color=INK2,
        arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9),
    )
    ax.annotate(
        "second notch",
        xy=(f2, np.interp(f2, fr, v_two) - 0.005),
        xytext=(93, 0.10),
        fontsize=8.5,
        color=INK2,
        arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9),
    )
    ax.text(178, 0.06, "measured PSD\n(normalized)", fontsize=8, color=MUTED, ha="center")
    ax.set_xlim(5, 200)
    ax.set_ylim(0, 1.05)
    ax.set_xlabel("Excitation frequency (Hz)")
    ax.set_ylabel("Residual vibration (fraction)")
    ax.set_title("Two-mode convolution places an exact notch at each resonance")
    ax.legend(loc="upper left", fontsize=8.5)
    save(fig, outdir, "fig2_two_mode_notch")


def fig3_smoothing_cost(sd, sc, helper, outdir):
    (f1, z1), (f2, z2), (f3, z3) = (45.2, 0.064), (79.5, 0.094), (132.6, 0.031)
    zv1 = sd.get_zv_shaper(f1, z1)
    mzv1 = sd.get_mzv_shaper(f1, z1)
    two_zv = convolve_shapers(zv1, sd.get_zv_shaper(f2, z2))
    two_mzv = convolve_shapers(mzv1, sd.get_mzv_shaper(f2, z2))
    three_zv = convolve_shapers(two_zv, sd.get_zv_shaper(f3, z3))
    three_mzv = convolve_shapers(two_mzv, sd.get_mzv_shaper(f3, z3))
    rows = [
        ("zv @ peak 1 only", zv1),
        ("mzv @ peak 1 only", mzv1),
        ("two-mode zv×zv", two_zv),
        ("three-mode zv×zv×zv", three_zv),
        ("two-mode mzv×mzv", two_mzv),
        ("three-mode mzv×mzv×mzv", three_mzv),
    ]
    names = [r[0] for r in rows]
    sm = [helper._get_shaper_smoothing(r[1], accel=5000, scv=5.0) for r in rows]
    imp = [len(r[1][0]) for r in rows]
    macc = [helper.find_max_accel(r[1], 5.0, helper._get_shaper_smoothing) for r in rows]

    fig, ax = plt.subplots(figsize=(7.2, 3.2))
    y = np.arange(len(rows))[::-1]
    ax.barh(y, sm, height=0.62, color=C1, edgecolor=SURFACE, linewidth=2)
    for yi, s, n, a in zip(y, sm, imp, macc):
        ax.text(s + 0.004, yi, f"{s:.3f}   ({n} impulses, max accel ≈ {a:,.0f})",
                va="center", fontsize=8.5, color=INK2)
    ax.set_yticks(y)
    ax.set_yticklabels(names, fontsize=9)
    ax.set_xlim(0, max(sm) * 1.55)
    ax.set_xlabel("Smoothing (corner rounding metric, accel 5000, scv 5)")
    ax.set_title("The price of extra notches: smoothing cost per configuration")
    ax.grid(axis="y", visible=False)
    save(fig, outdir, "fig3_smoothing_cost")
    return dict(zip(names, zip(sm, imp, macc)))


def fig4_transient_trap(sd, sc, outdir):
    (f1, z1), (f2, z2) = PATH_MODES
    (A, T), final_resid = refine_pathological_root(sc)
    two = convolve_shapers(sd.get_zv_shaper(f1, z1), sd.get_zv_shaper(f2, z2))

    # metric triplet at f2 for the pathological root
    est = sc.estimate_shaper(np, (A, T), z2, np.array([f2]))[0]
    fin = sc.estimate_shaper_old(np, (A, T), z2, np.array([f2]))[0]
    bru = brute_ringing((A, T), f2, z2)
    est_two = sc.estimate_shaper(np, two, z2, np.array([f2]))[0]
    print(f"  pathological root: |final eqs|={final_resid:.2e}, "
          f"estimate_shaper@f2={est:.3f}, final-formula@f2={fin:.4f}, brute ringing={bru:.4f}")
    print(f"  reference two-mode zv conv: estimate_shaper@f2={est_two:.4f}")

    def velocity_trace(shaper, f, dr):
        Av, Tv = np.asarray(shaper[0]), np.asarray(shaper[1])
        omega = 2 * np.pi * f
        t_end = Tv[-1] + 2 * max(1.0 / f, Tv[-1])
        t = np.linspace(0, t_end, 3000)
        v = np.zeros_like(t)
        for a, ti in zip(Av, Tv):
            v += a * sc.step_response_velocity(np, t - ti, [omega], dr)[0]
        v *= (1.0 / Av.sum()) / omega
        min_v = -sc.step_response_min_velocity(dr)
        return t * 1000, v / min_v  # sign-preserving, unshaped-worst = -1

    fig, (ax1, ax2) = plt.subplots(
        1, 2, figsize=(8.6, 3.4), gridspec_kw={"width_ratios": [1.9, 1.0]}
    )
    t_ms, v_path = velocity_trace((A, T), f2, z2)
    t2_ms, v_two = velocity_trace(two, f2, z2)
    ax1.plot(t_ms, v_path, color=C5, label="3-impulse dual-zero root")
    ax1.plot(t2_ms, v_two, color=C1, label="two-mode zv×zv")
    for ti in T:
        ax1.axvline(ti * 1000, color=BASELINE, lw=0.7, ls=":")
    ax1.axhline(0, color=BASELINE, lw=0.8)
    ymin = min(v_path.min(), v_two.min()) * 1.25
    ax1.axhspan(ymin, 0, color=MUTED, alpha=0.09, linewidth=0)
    ax1.text(51, ymin * 0.92, "backward velocity — the direction\nthe worst-case metric penalizes",
             fontsize=8, color=MUTED, ha="right", va="bottom")
    i_pk = np.argmin(v_path)
    ax1.annotate(
        f"backward excursion = {abs(v_path[i_pk]):.2f}\nwhile impulses are still applying",
        xy=(t_ms[i_pk], v_path[i_pk]),
        xytext=(t_ms[i_pk] + 9, v_path[i_pk] * 0.8),
        fontsize=8.5, color=INK2,
        arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9),
    )
    ax1.annotate(
        "both decay to ≈0 after the last impulse —\nthe classical equations check only this",
        xy=(T[-1] * 1000 + 14, 0.01), xytext=(T[-1] * 1000 + 7, 0.30),
        fontsize=8.5, color=INK2,
        arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9),
    )
    ax1.set_xlabel("Time (ms)   ·   dotted lines = impulse times of the 3-impulse root")
    ax1.set_ylabel("Oscillator velocity (vs unshaped worst)")
    ax1.set_title(f"Shaped response at {f2:.1f} Hz (ζ={z2})")
    ax1.set_ylim(ymin, max(v_path.max(), v_two.max()) * 1.18)
    ax1.legend(fontsize=8.5, loc="upper right")

    metrics = ["classical\nfinal residual", "post-move\nringing (sim)", "worst-case\nover window"]
    vals = [fin, bru, est]
    bars = ax2.bar(metrics, vals, width=0.6, color=[C2, C2, C5], edgecolor=SURFACE, linewidth=2)
    for b, v in zip(bars, vals):
        ax2.text(b.get_x() + b.get_width() / 2, v + 0.012, f"{v:.3f}",
                 ha="center", fontsize=9, color=INK)
    ax2.set_ylim(0, max(vals) * 1.3)
    ax2.set_ylabel("Residual at 79.5 Hz (fraction)")
    ax2.set_title("Two of three metrics say “perfect”")
    ax2.grid(axis="x", visible=False)
    ax2.tick_params(axis="x", labelsize=8)
    fig.suptitle("The transient trap: exact final-residual zeros are not sufficient", y=1.03)
    save(fig, outdir, "fig4_transient_trap")
    return est, fin, bru


def fig5_metric_blindness(sd, sc, outdir, freq, psd):
    mask = (freq > 0) & (freq <= 200.0)
    fb, p = freq[mask], psd[mask]
    smoother = sd.get_mzv_smoother(44.8)
    vals = shaper_vals(sc, smoother, fb, smoother=True)
    weighted = vals * p
    thr_global, thr_local = threshold_curves(fb, p)
    score_global = remaining_vibrations_global(fb, vals, p)
    true_133 = max(
        sc.estimate_smoother(np, smoother, dr, np.array([132.6]))[0] for dr in TEST_DRS
    )
    print(f"  smooth_mzv@44.8: stock score={score_global:.5f}, "
          f"true residual @132.6Hz={true_133:.3f}")

    fig, ax = plt.subplots(figsize=(7.2, 3.8))
    ax.semilogy(fb, np.maximum(weighted, 1e-2), color=C1,
                label="shaper-weighted spectrum (vals × PSD), smooth_mzv @ 44.8 Hz")
    ax.semilogy(fb, thr_global, color=INK2, ls="--", lw=1.4,
                label="stock acceptable-vibration threshold (global)")
    ax.semilogy(fb, thr_local, color=C4, ls="--", lw=1.4,
                label="peak-local threshold (proposed fix)")
    i3 = np.argmin(np.abs(fb - 132.6))
    ax.annotate(
        f"residual response at peak 3 sits below the\nglobal threshold → scored as zero,\n"
        f"yet true residual here is {true_133:.0%}",
        xy=(fb[i3] + 1, weighted[i3] * 1.4), xytext=(128, 6.5e4),
        fontsize=8.5, color=INK2,
        arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9),
    )
    ax.set_xlim(5, 200)
    ax.set_ylim(1e0, 1e6)
    ax.set_xlabel("Frequency (Hz)")
    ax.set_ylabel("Weighted power (log scale)")
    ax.set_title(
        f"Selection-metric blindness on real data: reported score {score_global:.2%}, "
        f"actual 20% residual at 132.6 Hz"
    )
    ax.legend(fontsize=8.2, loc="lower left")
    save(fig, outdir, "fig5_metric_blindness")


def fig6_overfit_bars(sd, sc, outdir):
    (f1, z1), (f2, z2) = SYNTH_MODES
    conv_zv = convolve_shapers(sd.get_zv_shaper(f1, z1), sd.get_zv_shaper(f2, z2))
    conv_mzv = convolve_shapers(sd.get_mzv_shaper(f1, z1), sd.get_mzv_shaper(f2, z2))
    shapers = [
        ("two-mode zv×zv", conv_zv, C1),
        ("two-mode mzv×mzv", conv_mzv, C2),
        ("joint-optimized N=4", JOINT_N4, C3),
    ]

    def band(f0, z, n=41, hw=1.5):
        w = hw * z * f0
        return np.linspace(f0 - w, f0 + w, n)

    bands = np.concatenate([band(f1, z1), band(f2, z2)])

    def est_band(shaper):
        return max(
            float(sc.estimate_shaper(np, shaper, dr, bands).max()) for dr in TEST_DRS
        )

    def brute_band(shaper):
        worst = 0.0
        for f0, z in SYNTH_MODES:
            w = 1.5 * z * f0
            for f in np.linspace(f0 - w, f0 + w, 21):
                worst = max(worst, brute_ringing(shaper, f, z))
        return worst

    est_vals = [est_band(s) for _, s, _ in shapers]
    bru_vals = [brute_band(s) for _, s, _ in shapers]
    for (n, _, _), e, b in zip(shapers, est_vals, bru_vals):
        print(f"  {n}: band worst-case={e:.4f}, post-move ringing={b:.4f}")

    fig, ax = plt.subplots(figsize=(7.2, 3.5))
    x = np.arange(2)
    w = 0.24
    for k, ((name, _, color), e, b) in enumerate(zip(shapers, est_vals, bru_vals)):
        bars = ax.bar(x + (k - 1) * w, [e, b], width=w - 0.02, color=color,
                      edgecolor=SURFACE, linewidth=2, label=name)
        for bar, v in zip(bars, [e, b]):
            ax.text(bar.get_x() + bar.get_width() / 2, v + 0.003, f"{v:.3f}",
                    ha="center", fontsize=8.5, color=INK)
    ax.set_xticks(x)
    ax.set_xticklabels([
        "worst-case band residual\n(the metric the optimizer targeted)",
        "post-move ringing, independent simulation\n(what the printed part experiences)",
    ], fontsize=9)
    ax.set_ylabel("Residual over both peak bands (fraction)")
    ax.set_title("Optimizing one metric ≠ winning: the joint shaper's edge inverts off-metric")
    ax.legend(fontsize=8.5)
    ax.grid(axis="x", visible=False)
    save(fig, outdir, "fig6_overfit_bars")


def fig7_robustness(sd, sc, outdir):
    f0, zeta = 45.2, 0.06
    ratios = np.linspace(0.5, 1.6, 900)
    fr = ratios * f0
    series = [
        ("zv", sd.get_zv_shaper(f0, zeta), False, C1),
        ("ei", sd.get_ei_shaper(f0, zeta), False, C2),
        ("3hump_ei", sd.get_3hump_ei_shaper(f0, zeta), False, C3),
        ("smooth_si", sd.get_si_smoother(f0), True, C4),
        ("smooth_zvd_ei", sd.get_zvd_ei_smoother(f0), True, C5),
    ]
    fig, ax = plt.subplots(figsize=(7.2, 3.8))
    for name, obj, is_sm, color in series:
        est = sc.estimate_smoother if is_sm else sc.estimate_shaper
        v = est(np, obj, zeta, fr)
        ax.plot(ratios, v, color=color, label=name)
    ax.axhline(0.05, color=BASELINE, lw=1.0, ls="--")
    ax.text(0.505, 0.062, "5% tolerance", fontsize=8, color=MUTED)
    ax.axvline(1.0, color=BASELINE, lw=0.8, ls=":")
    ax.annotate("impulse shapers tolerate the\ntrue frequency being BELOW…",
                xy=(0.70, 0.060), xytext=(0.513, 0.100), fontsize=8.5, color=INK2,
                arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9))
    ax.annotate("…polynomial smoothers\ntolerate it being ABOVE",
                xy=(1.44, 0.062), xytext=(1.435, 0.155), fontsize=8.5, color=INK2,
                arrowprops=dict(arrowstyle="->", color=MUTED, lw=0.9))
    ax.set_xlim(0.5, 1.6)
    ax.set_ylim(0, 0.6)
    ax.set_xlabel("True resonance frequency / tuned frequency")
    ax.set_ylabel("Residual vibration (fraction)")
    ax.set_title("Frequency-drift robustness is strongly one-sided (ζ = 0.06)", pad=30)
    ax.legend(fontsize=8.5, loc="lower center", ncol=5, columnspacing=1.2,
              bbox_to_anchor=(0.5, 1.0))
    save(fig, outdir, "fig7_robustness")


# ---------------------------------------------------------------------------


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kalico", required=True, help="path to a Kalico checkout")
    ap.add_argument("--outdir", default=str(pathlib.Path(__file__).parent.parent / "figures"))
    ap.add_argument(
        "--data",
        default=str(
            pathlib.Path(__file__).parent.parent
            / "data/calibration_data_y_20260714_143508.csv"
        ),
    )
    args = ap.parse_args()

    sd, sc = load_kalico(args.kalico)
    helper = sc.ShaperCalibrate(printer=None)
    outdir = pathlib.Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    freq, psd = load_capture(args.data)

    print("generating figures:")
    fig1_real_psd(outdir, freq, psd)
    fig2_two_mode_notch(sd, sc, outdir, freq, psd)
    fig3_smoothing_cost(sd, sc, helper, outdir)
    fig4_transient_trap(sd, sc, outdir)
    fig5_metric_blindness(sd, sc, outdir, freq, psd)
    fig6_overfit_bars(sd, sc, outdir)
    fig7_robustness(sd, sc, outdir)
    print("done.")


if __name__ == "__main__":
    main()
