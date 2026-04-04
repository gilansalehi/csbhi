# GD Paper Draft — Sections 1–4 (proposed edits)

_Source preserved. This is a draft reading copy assembled from the proposed edits discussed in-thread._

## 1. You Are Here

We begin with the simplest notion of distance and follow its generalization into relativistic spacetime. In Euclidean geometry, the distance \(ds\) between two points in a Cartesian coordinate grid \((x,y)\) is given by

$$
ds^{2} = dx^{2} + dy^{2}
$$

This immediately generalizes to three and higher dimensions:

$$
ds^{2} = dx^{2} + dy^{2} + dz^{2} + \dots
$$

This positive-definite quadratic form provides the familiar geometric standard for measuring distance.

In Special Relativity, Einstein replaced this purely spatial notion of distance with the spacetime interval:

$$
ds^{2} = -\,dt^{2} + dx^{2} + dy^{2} + dz^{2}
$$

or, for purely radial separations,

$$
ds^{2} = -\,dt^{2} + dr^{2}.
$$

Minkowski interpreted this geometrically as a four-dimensional manifold with Lorentzian signature \((-,+,+,+)\), where the sign of \(ds^{2}\) distinguishes timelike from spacelike separations and encodes the light-cone structure of causality.

General Relativity promotes the metric \(g_{\mu\nu}(x)\) from a fixed background to a dynamical field. Free-falling bodies follow geodesics of that metric, while matter and energy determine its curvature through Einstein’s field equations:

$$
G_{\mu\nu}
= R_{\mu\nu} - \tfrac12\,R\,g_{\mu\nu}
= 8\pi\,T_{\mu\nu}
\quad(c=G=1).
$$

Schwarzschild’s 1916 solution gives the simplest spherically symmetric vacuum geometry containing an event horizon:

$$
ds^{2}
= -\Bigl(1 - \frac{2M}{r}\Bigr)\,dt^{2}
+ \Bigl(1 - \frac{2M}{r}\Bigr)^{-1}\,dr^{2}
+ r^{2}\,d\Omega^{2}.
$$

Adopting units where \(2M=1\) places the event horizon at \(r=1\). Restricting to radial motion \((d\Omega=0)\) leaves

$$
ds^{2}
= -\Bigl(1 - \frac{1}{r}\Bigr)\,dt^{2}
+ \Bigl(1 - \frac{1}{r}\Bigr)^{-1}\,dr^{2}.
$$

Above the horizon \((r>1)\), the factor \((1-1/r)\) is positive, so \(t\) is timelike and \(r\) is spacelike in the usual way. Below the horizon \((r<1)\), that factor becomes negative, flipping the signs of the \(dt^{2}\) and \(dr^{2}\) terms in the Schwarzschild chart and exchanging their causal roles: the radial direction behaves timelike, while the Schwarzschild time coordinate behaves spacelike.

This does not by itself supply a cosmology. But it does pose a sharp geometric question: if the interior radial direction behaves like an evolution variable, what description should replace our ordinary spatial intuition?

## 2. ΛCDM: Successes, Assumptions, and Limits

Before returning to the black-hole horizon, it is worth stating clearly what standard cosmology assumes instead. In the ΛCDM picture, one adopts a global comoving time parameter \(t\) that remains timelike everywhere. Space and time therefore never exchange causal roles, and the universe is described by the spatially flat FLRW line element:

$$
ds^{2} = -\,dt^{2} + a(t)^{2}\bigl(dR^{2} + R^{2}\,d\Omega^{2}\bigr).
$$

The corresponding expansion dynamics follow from the Friedmann equations:

$$
H^{2} = \frac{8\pi G}{3}\bigl(\rho_{m} + \rho_{r} + \rho_{\Lambda}\bigr),
\quad
\frac{\ddot a}{a} = -\frac{4\pi G}{3}\bigl(\rho_{m} + 2\rho_{r} - 2\rho_{\Lambda}\bigr),
$$

where \(\rho_{m}\propto a^{-3}\), \(\rho_{r}\propto a^{-4}\), and \(\rho_{\Lambda}=\Lambda/(8\pi G)\).

This framework is phenomenologically powerful. In particular, ΛCDM successfully matches:

- Type Ia supernovae indicating late-time acceleration
- Baryon Acoustic Oscillation scales
- Cosmic Microwave Background anisotropies
- Hubble expansion rate \(\bigl(H_{0}\approx67\text{–}73\,\mathrm{km\,s^{-1}\,Mpc^{-1}}\bigr)\)

Yet its success does not remove a number of deep conceptual and observational tensions:

- **Cosmological constant problem:** naive quantum-vacuum estimates of \(\rho_{\Lambda}\) overshoot the observed value by an enormous margin.
- **Fine-tuning:** Why is \(\rho_{\Lambda}\) nonzero, yet so extraordinarily small?
- **Coincidence problem:** Why do we happen to live at the epoch where \(\Omega_{m}\approx\Omega_{\Lambda}\)?
- **No direct detection:** dark energy is inferred gravitationally, with no confirmed nongravitational signature.
- **Hubble tension:** a persistent discrepancy between local distance-ladder and CMB-inferred values of \(H_{0}\).
- **Inevitable singularities:** under broad assumptions, classical GR still drives spacetime toward singular behavior.

None of this makes ΛCDM a failure. On the contrary, it is the benchmark any alternative must recover. But by fixing the comoving slicing from the outset, it also leaves a geometric question unopened: what, if anything, is lost when the horizon-style exchange of causal roles is excluded at the level of description?

## 3. A Leap of Faith

To make the horizon-role question concrete, consider two observers in the Schwarzschild spacetime: Alice, who falls freely toward the black hole, and Bob, who remains far from the horizon. Their station is deep in the weak-field region, where spacetime curvature is negligible on laboratory scales. By the Equivalence Principle, both may treat their immediate surroundings as locally inertial. Alice then departs and allows the black hole’s gravity to pull her inward.

Initially, Alice and Bob are close together in the weak-field region and their relative velocity is small. Alice sees Bob and the station recede behind her as she falls inward, while Bob sees Alice drift toward the black hole and accelerate. Bob represents the geometry on a unit-circle diagram, with horizon at \(r=1\) and singularity at \(r=0\).

General Relativity implies two complementary facts:

- In Bob’s Schwarzschild coordinate time \(t\), Alice asymptotically approaches the horizon at \(r=1\), and the signals he receives from her become increasingly redshifted.
- In Alice’s proper time \(\tau\), horizon crossing occurs after a finite interval and her free fall continues smoothly.

The point is not that one observer is right and the other wrong. The point is that horizon crossing is a global causal question, while Alice’s immediate experience remains locally inertial throughout.

As Alice approaches \(r=1\), Bob’s received signals are ever more delayed and redshifted, so that in his Schwarzschild time she never cleanly crosses the horizon. Yet in Alice’s own frame, crossing \(r=1\) is unremarkable: no divergent local force appears, her clock continues normally, and her local laboratory remains Minkowskian to first order. In the unit-circle diagram, she simply passes through the perimeter.

Past the horizon, Alice can no longer communicate with Bob in the ordinary outward-directed way. But aboard the freely-falling G-Odyssic, nothing singular happens locally: the Equivalence Principle still governs her immediate physics.

Below the horizon, Alice is in uncharted territory. According to GR, in pure-vacuum Schwarzschild, Alice’s proper time to reach the central singularity at \(r=0\) is finite:

$$
\tau_{\text{vac}}
= \int_{1}^{0} \frac{dr}{\sqrt{1/r}}
= \tfrac{2}{3}.
$$

In pure-vacuum Schwarzschild, then, the interior evolution still terminates at \(r=0\) after finite proper time. This is the conceptual tension. If horizon crossing is locally smooth, should the interior really culminate in a finite-time crash, or does that conclusion depend on having chosen the vacuum Schwarzschild interior from the outset?

Before turning to the metric construction that follows, it is useful to isolate the guiding intuition.

> The vanishing-point analogy is interpretive, not probative. It suggests that a global endpoint may appear as a point of convergence without being an ordinary local destination for the traveler.

The proposal developed in the next sections is that the vacuum interior is not the last word. Instead, the black-hole interior is recast in a dust+\(\Lambda\) Painlevé–Gullstrand form obtained from the FLRW geometry itself. That construction, not the perspective analogy alone, is what will be used to test whether the singular endpoint is deferred to future infinity.

The purpose of the present section is therefore modest: to justify the causal intuition. The metric realization comes next.

## 4. FLRW in Painlevé–Gullstrand Form

We now return to the spatially flat FLRW line element and rewrite it in areal-radius variables. For the interior FLRW geometry, define

$$
r=a(t)\,R,
$$

so that \(r\) is the physical areal radius associated with the comoving label \(R\).

Differentiating gives

$$
dr
= \dot a(t)\,R\,dt + a(t)\,dR
= a(t)\,dR + H(t)\,r\,dt,
\quad
H(t)\equiv\frac{\dot a(t)}{a(t)}.
$$

Solving for \(a(t)\,dR\) gives

$$
a(t)\,dR = dr - H(t)\,r\,dt.
$$

Substituting this into the full FLRW metric yields

$$
ds^2 = -\,dt^2 + \bigl(dr - H\,r\,dt\bigr)^2 + r^2\,d\Omega^2
    = -\bigl(1 - H^2r^2\bigr)\,dt^2 + 2H\,r\,dt\,dr + dr^2 + r^2\,d\Omega^2.
$$

Relabeling the FLRW proper time as \(\tau\equiv t\), this takes the Painlevé–Gullstrand form

$$
ds^2 = -\,d\tau^2 + \bigl(dr - F(r,\tau)\,d\tau\bigr)^2 + r^2\,d\Omega^2,
\qquad
F(r,\tau)=H(\tau)\,r.
$$

Here \(F\) is taken to be the positive inward flow magnitude, so freely falling shells satisfy

$$
\frac{dr}{d\tau}=-F(r,\tau).
$$

For a dust+\(\Lambda\) cosmology, Friedmann’s equation gives

$$
H(\tau)^2 = \frac{8\pi G}{3}\bigl(\rho_{m}\,a^{-3}(\tau) + \rho_\Lambda\bigr),
$$

and therefore

$$
\boxed{F(r,\tau)=r\,\sqrt{\frac{8\pi G}{3}\bigl(\rho_{m}a^{-3}(\tau)+\rho_\Lambda\bigr)}}.
$$

This is the central geometric result of the section: the FLRW expansion law can be written exactly as a radial PG flow field in areal-radius variables. Its later interpretation as an interior infall function is a separate step.
