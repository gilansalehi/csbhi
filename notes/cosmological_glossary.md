# CSBHI Cosmological Glossary

*Project terminology reference*

This glossary establishes the terminology used in *Geometric Duality: Conformal Scaling of Black Hole Interiors* (GD1) and the papers and notes that follow it. Its main purpose is to keep geometrically different horizons from acquiring the same name.

The definitions follow standard general relativity and relativistic cosmology. Entries labeled **CSBHI usage** specify how this project applies or notates the standard concept.

---

## 1. Rules of usage

1. **Name the horizon.** Use *black-hole event horizon*, *cosmological event horizon*, *apparent horizon*, *particle horizon*, or another precise term whenever more than one could be meant. Bare *horizon* is acceptable only when the local context identifies it unambiguously.
2. **Do not call the Hubble radius an event horizon.** The Hubble sphere is not generally a causal boundary. In spatially flat FLRW it has the same radius as the apparent horizon.
3. **Reserve event horizon for a global causal boundary.** A cosmological event horizon depends on the future expansion history. A black-hole event horizon depends on the full future causal structure of the exterior spacetime.
4. **Keep surfaces distinct from their radii.** A horizon is a hypersurface. Symbols such as \(R_S\), \(R_A\), and \(B\) denote areal radii of spherical cross-sections.
5. **Equal radii do not make equal objects.** In stationary de Sitter space, the curvature radius, apparent-horizon radius, and cosmological event-horizon radius coincide numerically. They remain different concepts.
6. **Use expansion, acceleration, and inflation precisely.** Expansion means \(\dot a>0\). Accelerated expansion means \(\ddot a>0\). Inflation is a sustained early accelerated phase sufficient for the cosmological work assigned to it; ordinary expansion is not automatically inflation.
7. **Say spatially flat when that is what is meant.** A spatially flat FLRW universe can have nonzero four-dimensional spacetime curvature.
8. **Keep the horizon map separate from the reciprocal ansatz.** The relation \(a=1/r\) defines the proposed scale correspondence. It does not by itself construct a junction between Bob's and Alice's four-geometries.

## 2. Canonical horizon notation

| Symbol | Canonical meaning |
|---|---|
| \(R_S\) | Schwarzschild radius of Bob's parent black hole. For an isolated nonrotating black hole, it is the areal radius of the black-hole event horizon. |
| \(R_A(\tau)\) | Alice's FLRW apparent-horizon radius. In the spatially flat case, \(R_A=c/H_A\). |
| \(R_H\) | Present Hubble radius, \(R_H=c/H_0\). In the spatially flat background, \(R_H=R_{A0}\). The project reserves \(R_H\) for the present value rather than a general time-dependent radius. |
| \(B(\tau)\) | Areal radius of Alice's cosmological event horizon in the dynamical-throat notes. The future boundary condition, not the radial null equation alone, selects this particular null surface. |
| \(R_e\) | Present cosmological event-horizon radius in GD1. Thus \(R_e=B_0\). |
| \(R_p\) | Present particle-horizon radius. |
| \(R_\Lambda\) | De Sitter curvature radius, \(R_\Lambda=c/H_\Lambda=\sqrt{3/\Lambda}\). In exact de Sitter space it also equals the observer's apparent- and event-horizon radii. |
| \(R_{\Lambda,P},R_{\Lambda,C}\) | Parent- and child-universe de Sitter curvature radii in the recursive Kottler notes. For the child identified with our observed cosmology, \(R_{\Lambda,C}=R_\Lambda\). These symbols replace the visually ambiguous \(R_P\) and \(R_C\); \(R_p\) remains reserved for the particle horizon. |
| \(L\) | In the Horizon Triple-Identity programme, the invariant asymptotic curvature scale. In the exact de Sitter limit, \(L=R_\Lambda\). |
| \(\mathcal H\) | A null observer-causal horizon considered by the Horizon Triple-Identity programme. It is a hypersurface, not a radius. The completed horizon map must determine whether it is the relevant cosmological event horizon throughout the construction. |
| \(\Sigma\) | A candidate matching hypersurface or finite matching history. It is not automatically null and must not be called an event horizon unless its causal character has been derived. |
| \(r_h\) | A local symbol for a generic fixed horizon radius in a calculation. It should not replace the canonical symbols above in a final cross-note statement. |

## 3. Distances and coordinates

### Areal radius

The invariant radius \(R_{\rm ar}\) defined by the area of a symmetry sphere,

\[
A=4\pi R_{\rm ar}^2.
\]

It is not generally the proper radial distance to the sphere.

**CSBHI usage:** Bob's \(r\), Alice's \(\bar R\), the parent Schwarzschild radius \(R_S\), and the horizon radii in Section 2 are areal radii or normalized versions of them.

### Comoving coordinate

A spatial label that remains fixed for an observer following the ideal FLRW fluid. Fixed does not mean that the observer's proper distance from another comoving observer remains fixed; that distance changes with the scale factor.

**CSBHI usage:** \(R\) labels Alice's comoving probes. Alice's corresponding areal radius is \(\bar R=aR\).

### Proper distance

The spatial length measured along a specified spacelike slice. In cosmology it normally means distance along a surface of constant cosmic time. It depends on the chosen slicing and should not be confused with an areal radius or a light-travel time.

### Comoving distance

The proper distance with the scale factor divided out. For two FLRW-comoving observers, comoving separation is constant while proper separation grows as \(a\).

### Lookback time

The difference between the observer's present cosmic time and the emission time of received light. It is not the same as present proper distance or comoving distance.

### Light-travel distance

The elapsed light-travel time multiplied by \(c\). In an expanding universe it is not generally equal to the source's present proper distance.

## 4. Time, motion, and causal structure

### Coordinate time

A time coordinate assigned to events. Its value and behavior depend on the coordinate chart.

**CSBHI usage:** \(t\) denotes FLRW comoving time in the cosmology review and Bob's Schwarzschild coordinate time in the descent narrative, as stated in context.

### Proper time

The time measured by a clock following a timelike worldline.

**CSBHI usage:** \(\tau\) is Alice's proper time and remains future-directed across the parent black-hole event horizon.

### Cosmic time

The proper time measured by the comoving observers of an FLRW geometry. In Alice's FLRW description, \(\tau\) serves as cosmic time.

### Conformal time

The time coordinate \(\eta\) defined by \(d\eta=d\tau/a\). Radial light rays travel at fixed coordinate slopes in conformal coordinates. Finite future conformal time can coexist with infinite future proper time.

### Worldline

A curve representing the history of an observer or object through spacetime. Timelike worldlines remain inside local light cones.

### Null hypersurface

A three-dimensional hypersurface generated by lightlike curves. Black-hole and cosmological event horizons are null hypersurfaces.

### Timelike hypersurface

A three-dimensional history that can be occupied by a material boundary or family of observers. A timelike transition layer is not an event horizon.

### Causal past and causal future

The events that can send causal signals to an observer and the events that the observer can causally influence.

### Past light cone

The null surface formed by light rays arriving at an observation event. It is not the particle horizon, although the particle horizon limits how far that light cone can extend through cosmic history.

### Causal patch

An observer-dependent region defined by causal accessibility. The phrase must be qualified by the question being asked. A present observable region is limited by the past light cone and particle horizon; a future-accessible patch in an accelerating universe is limited by the cosmological event horizon.

## 5. Expansion and the FLRW background

### FLRW geometry

The homogeneous and isotropic spacetime geometry described by the Friedmann–Lemaître–Robertson–Walker metric. FLRW specifies symmetry and geometry; a matter model and field equations determine the scale factor.

### Scale factor

The dimensionless function \(a(\tau)\) that converts FLRW comoving separations into proper separations. Its overall normalization is conventional in standard cosmology; only ratios are observed directly.

**CSBHI usage:** the reciprocal ansatz fixes an absolute reference by setting \(a=1\) when Bob's horizon-normalized coordinate is \(r=1\).

### Normalized scale factor

The ratio \(a/a_0\), equal to one today. GD1 denotes it by \(\bar a\); some reconstruction notes use the local shorthand \(y\). Both denote the same ratio, not a second physical scale factor.

### Hubble parameter

The fractional expansion rate

\[
H=\frac{\dot a}{a}.
\]

It is a rate, not a speed and not a distance.

**CSBHI usage:** \(H_A\) is Alice's expansion rate; \(H_0\) is its observed present value; \(H_\Lambda\) is its constant asymptotic de Sitter value.

At the parent black-hole crossing event, \(H_{A,H}\) denotes Alice's expansion rate. The second subscript identifies the crossing event; it does not define a separate kind of Hubble parameter.

### Hubble flow

The recession pattern of ideal comoving observers, whose proper separation changes at the rate \(H\ell\). It is not motion through a static background space.

### Expansion

Growth of the scale factor: \(\dot a>0\).

### Accelerated expansion

Growth with \(\ddot a>0\). A universe can expand while decelerating.

### Inflation

A sustained early epoch of accelerated expansion, conventionally invoked to address the horizon and flatness problems and to generate primordial perturbations. The term should not be used as a synonym for expansion or late vacuum acceleration.

### E-fold

A logarithmic measure of scale-factor growth,

\[
N=\ln(a_2/a_1).
\]

Any use of \(N\) must specify the interval being counted.

### Deceleration parameter

The dimensionless acceleration measure \(q=-\ddot a/(aH^2)\). Accelerated expansion corresponds to \(q<0\).

### Spatially flat

Zero intrinsic curvature of the constant-cosmic-time spatial slices: \(k=0\). This does not mean that the four-dimensional spacetime is Minkowski or curvature-free.

### de Sitter spacetime

The maximally symmetric vacuum solution with positive cosmological constant. In the expanding flat patch, \(H=H_\Lambda\) is constant and \(a\) grows exponentially.

### Asymptotically de Sitter

A spacetime whose late-time geometry approaches de Sitter as matter and radiation dilute. Alice's matter–radiation–\(\Lambda\) interior is asymptotically, not exactly, de Sitter at finite times.

## 6. Matter, radiation, and observed parameters

### Perfect fluid

A stress-energy model characterized in its rest frame by energy density \(\rho\) and isotropic pressure \(p\), with no viscosity or heat flux.

### Equation-of-state parameter

The ratio \(w=p/\rho\) in units where \(c=1\). Pressureless matter has \(w=0\), radiation has \(w=1/3\), and vacuum energy has \(w=-1\).

### Matter

The pressureless component whose background density dilutes as \(a^{-3}\). In cosmological parameter fits, \(\Omega_m\) includes baryonic and dark matter unless explicitly separated.

### Radiation

Relativistic species whose background density dilutes as \(a^{-4}\): three powers from volume expansion and one from wavelength redshift.

### Cosmological constant

The constant \(\Lambda\) in Einstein's equations. It can be represented as vacuum energy with constant density and negative pressure. A cosmological constant is one possible model of dark energy; the terms are not universally interchangeable.

### Dark energy

The observational name for the component driving late accelerated expansion. GD1 uses a cosmological constant, so its background model takes dark energy to be vacuum energy with \(w=-1\).

### Critical density

The density associated with a spatially flat Friedmann constraint,

\[
\rho_c=\frac{3H^2}{8\pi G}.
\]

At the present epoch, \(H=H_0\).

### Density parameter

The ratio \(\Omega_i=\rho_i/\rho_c\) for component \(i\). Density parameters describe the chosen cosmic epoch; a subscript \(0\) denotes present values.

### Spatial-curvature term

The \(k/a^2\) contribution to the Friedmann constraint. It describes intrinsic spatial curvature, not all spacetime curvature and not the local curvature generated by matter.

### Redshift

For comoving emission and observation in FLRW,

\[
1+z=\frac{a_{\rm obs}}{a_{\rm em}}.
\]

It measures a scale-factor ratio, not an absolute value of \(a\).

## 7. Cosmological horizons and observational surfaces

### Hubble radius and Hubble sphere

The Hubble radius is \(c/H\); the Hubble sphere is the sphere having that proper radius on a chosen cosmic-time slice. It marks where the instantaneous FLRW recession rate equals \(c\). It is not generally null, and photons can cross it.

**CSBHI usage:** \(R_H=c/H_0\) is the present Hubble radius. In spatially flat FLRW it equals the present apparent-horizon radius \(R_{A0}\).

### Apparent horizon

A quasi-local marginal surface defined by the vanishing of an appropriate null expansion. In spatially flat FLRW its areal radius is \(R_A=c/H_A\). It is the natural surface for the local Friedmann horizon first law. It need not be null.

### Particle horizon

The greatest present distance from which a causal signal could have reached the observer since the beginning of the modeled expansion. It depends on the integrated past history.

**CSBHI usage:** \(R_p\) denotes its present proper radius.

### Cosmological event horizon

The boundary separating events that can ever send a signal to a specified observer from events that cannot, given the complete future expansion history. When the defining integral converges, its physical areal radius is

\[
B(\tau)=a(\tau)c\int_\tau^\infty\frac{d\tau'}{a(\tau')}.
\]

It is global, observer-dependent, and null. It is not the outer edge of the entire universe.

**CSBHI usage:** \(B(\tau)\) denotes this radius in the dynamical-throat construction, and \(R_e=B_0\) is its present value.

### Observable universe

The region from which signals have reached the observer by the present epoch. In an idealized transparent cosmology its limiting scale is the particle horizon. The whole universe can be much larger or spatially infinite.

### Last-scattering surface

The spherical intersection of our past light cone with the epoch when the primordial plasma became transparent to photons. It is the source surface of the observed CMB, not an event horizon.

### Sound horizon

The greatest distance an acoustic disturbance could propagate through the primordial plasma before a specified epoch. It sets the characteristic scale of CMB acoustic peaks and baryon acoustic oscillations. It is much smaller than the particle horizon.

### Cosmological horizon

An umbrella phrase, not a preferred name for a specific surface. Use it only when deliberately discussing more than one cosmological horizon. Avoid the still less precise phrase *cosmic horizon*.

## 8. Black-hole horizons

### Black-hole event horizon

The global null boundary of the region from which no future-directed causal signal reaches the exterior's appropriate future boundary. In an asymptotically flat spacetime, that boundary is future null infinity. The horizon is not a material surface and need not be locally detectable by a freely falling observer.

**CSBHI usage:** Alice crosses the parent black-hole event horizon at the reference event \(r=a=1\). Bob's normalized \(r\) is the exterior areal radius assigned along Alice's worldline, not Alice's interior areal radius.

### Schwarzschild radius

For an isolated, nonrotating mass,

\[
R_S=\frac{2GM}{c^2}.
\]

In exact Schwarzschild spacetime this is the areal radius of the event horizon. In a dynamical or cosmological exterior, the location and type of the relevant horizon require a separate calculation.

### Killing horizon

A null hypersurface generated by a Killing vector that becomes null there. Stationary Schwarzschild and static-patch de Sitter horizons are Killing horizons.

### Trapped surface

A compact spacelike two-surface for which both future-directed null expansions have the trapped sign. It is a quasi-local diagnostic of strong gravity and is not the same object as the global event horizon.

### Trapping horizon

A hypersurface foliated by marginal surfaces. Its causal character can change with the matter flux and geometry.

### Dynamical horizon

A spacelike marginally trapped tube used to track local black-hole growth and flux. It is distinct from the null black-hole event horizon, although the two can approach one another as the black hole settles.

### Isolated horizon

A quasi-local null horizon in equilibrium, defined without requiring the whole exterior spacetime to be stationary.

## 9. Junction and throat terminology

### Junction or matching hypersurface

The hypersurface \(\Sigma\) along which two spacetime regions are identified. The induced metric must agree on both sides. Its causal character—timelike, spacelike, or null—must be stated.

### First junction condition

Continuity of the intrinsic geometry induced on the matching hypersurface. For a spherical junction, this includes equality of the areal radius of each shared two-sphere.

### Second junction condition

The condition on how the matching hypersurface is embedded in each surrounding spacetime. For non-null surfaces it compares extrinsic curvature; for null surfaces it compares the appropriate transverse-curvature data. A jump represents surface stress-energy.

### Thin shell or null shell

Stress-energy concentrated on an idealized codimension-one matching surface. A shell is a mathematical limit of a finite transition and need not represent a literal material membrane.

### Throat

**CSBHI usage:** the geometric transition structure proposed to connect Bob's parent exterior with Alice's reciprocal interior. A throat may have finite width and may contain null, timelike, or dynamical structures. It is not a synonym for the black-hole event horizon, cosmological event horizon, apparent horizon, or matching hypersurface.

### Horizon map

**CSBHI usage:** the still-unconstructed geometric relation connecting Bob's exterior black-hole description, Alice's reciprocal interior, and their causal and junction data. It must do more than equate two radii.

### Reciprocal ansatz

The proposal

\[
a(\tau)=\frac{1}{r(\tau)},
\]

where \(r\) is Bob's horizon-normalized areal coordinate along Alice's infall and \(a\) scales Alice's spatial geometry. It is a relation between descriptions, not an ordinary coordinate transformation of vacuum Schwarzschild spacetime.

### Horizon Triple Identity

The proposal that the de Sitter curvature scale \(L\), an observer-causal null horizon \(\mathcal H\), and the matching history \(\Sigma\) arise from one throat geometry. It does not declare those three geometric objects identical.

## 10. Horizon thermodynamics

### Surface gravity

A measure of the inaffinity or acceleration scale associated with a horizon generator. Its sign and normalization depend on orientation and the normalization of the generator; detector temperatures use its magnitude.

### Horizon temperature

The Hawking or Gibbons–Hawking temperature associated with a stationary horizon's surface gravity. The CMB temperature is a relic-radiation temperature and is not the present cosmological event-horizon temperature.

### Horizon entropy

The Bekenstein–Hawking entropy proportional to horizon area. Applying equilibrium entropy laws away from stationary or apparent horizons requires care.

### Work density

In spherical horizon thermodynamics, the scalar \(W=(\epsilon-P)/2\) built from energy density and pressure. It enters the unified first law and the CSBHI accounting of the transverse junction.

### Nonequilibrium residual

**CSBHI usage:** the geometric balance term that appears when the apparent-horizon equilibrium identity is evaluated instead on the moving cosmological event horizon. It is not an ordinary luminosity available to a detector.

## 11. Preferred corrections

| Avoid | Prefer |
|---|---|
| “the cosmic horizon” | Name the Hubble radius, apparent horizon, particle horizon, or cosmological event horizon. |
| “the event horizon contains the whole universe” | “The cosmological event horizon bounds an observer's future causal patch.” |
| “the Hubble horizon” | “Hubble radius” or, in flat FLRW when the marginal surface is intended, “apparent horizon.” |
| “the Hubble volume is a light cone” | “The Hubble sphere is an instantaneous expansion scale; the past light cone is null.” |
| “the CMB horizon” | Name the last-scattering surface, sound horizon, or particle horizon. |
| “flat spacetime” when \(k=0\) | “Spatially flat FLRW spacetime.” |
| “inflation” for any growth of \(a\) | “Expansion,” “accelerated expansion,” or a specifically defined inflationary epoch. |
| “Bob's radius becomes Alice's radius” | “Bob's normalized radius determines Alice's scale factor through \(a=1/r\).” |
| “the reciprocal function is smooth, so the junction is smooth” | “The reciprocal scalar is smooth; the four-metric junction and its transverse derivatives require separate matching conditions.” |
| “the singularity is removed” | “The Schwarzschild endpoint is deferred to an infinite, finite-curvature future within Alice's proposed metric.” |
| “the parent horizon follows \(B(\tau)\)” before deriving the map | “Alice's event-horizon history \(B(\tau)\) is the target that a parent-side horizon history must reproduce.” |

## References

1. G. F. R. Ellis and H. van Elst, [“Cosmological Models.”](https://arxiv.org/abs/gr-qc/9812046) In *Theoretical and Observational Cosmology* (1999).
2. T. M. Davis and C. H. Lineweaver, [“Expanding Confusion: Common Misconceptions of Cosmological Horizons and the Superluminal Expansion of the Universe.”](https://arxiv.org/abs/astro-ph/0310808) *Publications of the Astronomical Society of Australia* **21**, 97–109 (2004).
3. A. Ashtekar and B. Krishnan, [“Dynamical Horizons and Their Properties.”](https://arxiv.org/abs/gr-qc/0308033) *Physical Review D* **68**, 104030 (2003).
4. S. A. Hayward, [“Unified First Law of Black-Hole Dynamics and Relativistic Thermodynamics.”](https://arxiv.org/abs/gr-qc/9710089) *Classical and Quantum Gravity* **15**, 3147–3162 (1998).
5. C. Barrabès and W. Israel, [“Thin Shells in General Relativity and Cosmology: The Lightlike Limit.”](https://doi.org/10.1103/PhysRevD.43.1129) *Physical Review D* **43**, 1129–1142 (1991).
6. G. W. Gibbons and S. W. Hawking, [“Cosmological Event Horizons, Thermodynamics, and Particle Creation.”](https://doi.org/10.1103/PhysRevD.15.2738) *Physical Review D* **15**, 2738–2751 (1977).
7. G. Salehi, [“Geometric Duality: Conformal Scaling of Black Hole Interiors.”](https://www.gilansalehi.com/csbhi/gd1.html) GD1, this project.
