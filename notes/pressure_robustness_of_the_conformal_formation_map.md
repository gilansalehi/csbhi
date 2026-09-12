# Pressure Robustness of the Conformal Formation Map

## Homogeneous perfect-fluid collapse as the second GD2 benchmark

**Working calculation — September 2026. Source: upstream project derivation. Review and revisions: Codex (OpenAI).**

> **Notation update — September 2026.** The \(\Gamma_H\) appearing in this note is Result IV's local formation-patch Weyl factor, now denoted \(\Omega_{{\rm W},H}\) in the cross-project dictionary. It is not automatically the mature ruler scale \(\Gamma=a^2\).

## Abstract

[Result IV](note.html?src=result_iv_conformal_formation_map) derives the conformal formation map using homogeneous Oppenheimer–Snyder dust. This note replaces dust by a homogeneous spherical perfect fluid and asks which parts of the construction survive pressure.

The background architecture survives. Homogeneous pressure has no spatial gradient, so the comoving perfect-fluid congruence remains geodesic. Its areal radius remains

\[
R_P=S(\eta)\sin q,
\]

and the GD1 cohort law implies

\[
\frac{A_C}{A_{C,H}}=\frac{S_H}{S}.
\]

The invariant rate statement retains the parent–child lapse \(N_C=d\tau_C/dt_P\):

\[
\boxed{
H_C
=
-\frac{1}{N_C}\frac{\dot S}{S}
=
-\frac{\theta_P}{3N_C}.
}
\]

Thus isotropic parent contraction maps to child expansion without requiring dust or equal parent and child clocks.

Radial null curves still satisfy \(d\eta=\pm dq\), so the canonical tangent map sends the growing event horizon to

\[
T_M=\rho_M=\frac12\tan q
\]

independently of the equation of state. Pressure changes the proper-time history \(S(\eta)\), the amount of formation-stage scale growth, and the Misner–Sharp energy within a comoving shell. In particular, the OS value \(A_f/A_0\to9/4\) is dust-specific, and enclosed Misner–Sharp mass is no longer a conserved shell label when pressure performs work.

For any homogeneous closed-FLRW parent, the conformal Misner–Sharp identity becomes

\[
\boxed{
\frac{m_C}{\Gamma_Hm_P}
=
\cos^2q\,
\frac{\mathcal H_P^2}{1+\mathcal H_P^2}.
}
\]

The weak-curvature, rapid-collapse limit again gives \(m_C\simeq\Gamma_Hm_P\). As in Result IV, this is a diagnostic identity rather than independent evidence for the map.

An exactly homogeneous fluid with nonzero pressure is not a realistic finite star smoothly matched to vacuum: vanishing boundary pressure would force the homogeneous pressure to vanish everywhere. The calculation is therefore a background pressure test. Realistic pressure gradients, acceleration, boundary layers, and radiation belong to the next benchmark.

---

## 1. Homogeneous perfect-fluid parent

Take the closed-FLRW interior

\[
ds_P^2
=
S^2(\eta)
\left[-d\eta^2+dq^2+\sin^2q\,d\Omega^2\right],
\tag{1}
\]

with

\[
T_{ab}
=
(\rho+p)u_au_b+pg_{ab},
\qquad
p=p(\eta).
\tag{2}
\]

The spatial Euler equation is

\[
(\rho+p)a_b
=
-h_b{}^c\nabla_cp.
\tag{3}
\]

Homogeneity gives \(h_b{}^c\nabla_cp=0\), so the comoving congruence satisfies

\[
\boxed{a_b=0}
\tag{4}
\]

provided \(\rho+p\neq0\). Pressure gradients accelerate the fluid; homogeneous pressure does not.

The areal radius remains

\[
\boxed{R_P=S(\eta)\sin q.}
\tag{5}
\]

For a comoving cohort crossing at \(S=S_H\),

\[
r
=
\frac{R_P}{R_{P,H}}
=
\frac{S}{S_H}.
\tag{6}
\]

GD1 therefore gives

\[
\boxed{
\frac{A_C}{A_{C,H}}
=
\frac{S_H}{S}.
}
\tag{7}
\]

The reciprocal background scaling \(A_C\propto S^{-1}\) does not depend on the parent equation of state.

---

## 2. Covariant contraction–expansion relation

Let \(t_P\) be parent proper time along the comoving fluid and \(\tau_C\) child cosmic proper time. Define

\[
N_C\equiv\frac{d\tau_C}{dt_P}.
\tag{8}
\]

The parent expansion scalar is

\[
\theta_P=3\frac{\dot S}{S},
\tag{9}
\]

where the dot denotes \(d/dt_P\). Differentiating Equation (7) with respect to \(\tau_C\) gives

\[
\boxed{
H_C
=
-\frac1{N_C}\frac{\dot S}{S}
=
-\frac{\theta_P}{3N_C}.
}
\tag{10}
\]

Only under the additional same-clock choice \(N_C=1\) does this reduce to \(H_C=-\theta_P/3\).

For a general spherical timelike congruence \(v^a\), define the tangential fractional rate

\[
H_\perp=v^a\nabla_a\ln R.
\tag{11}
\]

When the congruence is shear-free, its radial and tangential rates agree and

\[
H_\perp=\frac{\theta}{3}.
\tag{12}
\]

The natural background target is therefore

\[
\boxed{
\sigma_{ab}=0,
\qquad
D_i\theta=0,
}
\tag{13}
\]

together with an irrotational geodesic congruence and homogeneous spatial curvature. These conditions express isotropic collapse at one fractional rate everywhere. They are the geometric content needed for an exact FLRW parent background; Equations (13) alone are not asserted as a sufficiency theorem for arbitrary matter.

---

## 3. The null formation map is pressure-independent

The radial part of Equation (1) is conformal to two-dimensional Minkowski space, so

\[
d\eta=\pm dq
\tag{14}
\]

for every homogeneous history \(S(\eta)\).

If the interior event-horizon generator has vertex \(\eta_0\), define \(\bar\eta=\eta-\eta_0\). Its outgoing trajectory is

\[
\bar\eta=q.
\tag{15}
\]

The canonical tangent map is

\[
T_M-\rho_M
=
\tan\frac{\bar\eta-q}{2},
\qquad
T_M+\rho_M
=
\tan\frac{\bar\eta+q}{2}.
\tag{16}
\]

On the generator,

\[
\boxed{
T_M=\rho_M=\frac12\tan q.
}
\tag{17}
\]

This result depends on spherical homogeneity, the closed-FLRW spatial geometry, and the null character of the generator—not on \(p=0\).

As in Result IV, Equation (17) supplies the canonical \(\beta=0\) member of a residual vertex-preserving conformal family. The null geometry does not by itself select the physical bulk completion or establish that the outgoing birth cone is a particle horizon.

---

## 4. Formation-stage scale growth

Under a shell-independent synchronization, multi-cohort consistency gives

\[
\boxed{A_C(q)S_H(q)=K.}
\tag{18}
\]

Consequently,

\[
\boxed{
\frac{A_C(q)}{A_C(0)}
=
\frac{S_H(0)}{S_H(q)},
}
\tag{19}
\]

and

\[
\boxed{
N_{\rm form}
=
\ln\frac{S_H(0)}{S_H(q_0)}.
}
\tag{20}
\]

The OS value

\[
N_{\rm form}\rightarrow\ln\frac94
\]

is therefore not universal. The equation of state and boundary history determine how much the parent contracts while its event horizon traverses the matter.

---

## 5. Pressure work and the shell label

For a general spherical perfect fluid, let

\[
U=D_tR,
\qquad
\Gamma_{\rm MS}=e^{-\lambda}R'.
\]

The Misner–Sharp relations in geometrized units are

\[
\boxed{
1-\frac{2m}{R}=\Gamma_{\rm MS}^2-U^2,
}
\tag{21}
\]

\[
\boxed{m'=4\pi\rho R^2R',}
\tag{22}
\]

and

\[
\boxed{D_tm=-4\pi pR^2U.}
\tag{23}
\]

During collapse \(U<0\). Ordinary positive pressure therefore gives

\[
\boxed{D_tm>0.}
\tag{24}
\]

The Misner–Sharp energy of a comoving shell increases as compression work is stored gravitationally. Dust hides this effect because \(p=0\) makes \(D_tm=0\).

Accordingly,

\[
\mu_m=\frac{m(q)}{M}
\]

is not a conserved shell identity for a pressured fluid. The general construction should use the Lagrangian shell coordinate itself or a genuinely conserved material charge. If a conserved baryon current exists,

\[
\boxed{
\mu_B(q)
=
\frac{N_B(q)}{N_{B,{\rm total}}}
}
\tag{25}
\]

is one option. During reactions or radiation transport, even baryon number may not provide the complete energy ledger.

---

## 6. Formation-era Weyl factor

Every FLRW spacetime is conformally flat. With

\[
D(\bar\eta,q)=\cos\bar\eta+\cos q,
\]

write

\[
g_P=(SD)^2g_M,
\qquad
g_C=A_C^2g_M.
\tag{26}
\]

Therefore

\[
\boxed{g_C=\Gamma^2g_P,}
\qquad
\boxed{\Gamma=\frac{A_C}{SD}.}
\tag{27}
\]

On the event-horizon generator \(D_H=2\cos q\), and Equation (18) gives

\[
\boxed{
\Gamma_H(q)
=
\frac{K}{2S_H^2(q)\cos q}.
}
\tag{28}
\]

The local Weyl relation therefore survives homogeneous pressure. Its absolute normalization and physical dynamics remain open exactly as in Result IV.

---

## 7. Quasi-local mass identity

For a homogeneous closed-FLRW parent,

\[
\boxed{
m_P
=
\frac{S\sin^3q}{2}
\left(1+\mathcal H_P^2\right),
}
\tag{29}
\]

where \(\mathcal H_P=S'/S\). Along the canonical mapped cone,

\[
A_C=\frac KS,
\qquad
T_M=\frac12\tan q,
\]

so

\[
\boxed{
\mathcal H_C
=
-2\cos^2q\,\mathcal H_P.
}
\tag{30}
\]

Combining the FLRW Misner–Sharp definitions with Equation (28) gives

\[
\boxed{
\frac{m_C}{\Gamma_Hm_P}
=
\cos^2q\,
\frac{\mathcal H_P^2}{1+\mathcal H_P^2}.
}
\tag{31}
\]

For OS dust,

\[
\frac{\mathcal H_P^2}{1+\mathcal H_P^2}
=
\cos^2\!\left(\frac{3q_0-q}{2}\right),
\]

recovering Result IV. During rapid collapse and over a weakly curved patch,

\[
|\mathcal H_P|\gg1,
\qquad
q\ll1,
\]

Equation (31) gives

\[
\boxed{m_C\simeq\Gamma_Hm_P.}
\tag{32}
\]

Equation (31) remains a conformal Misner–Sharp identity, not an independent confirmation or a law for baryonic rest-mass conversion. It also shows that marginality is not generically preserved.

---

## 8. The finite-star limitation

A smooth boundary between a perfect-fluid star and vacuum requires the material pressure at the surface to vanish in the nonradiating case. If pressure is homogeneous,

\[
p=p(t),
\qquad
p(q_0)=0
\]

implies

\[
\boxed{p=0}
\]

throughout the fluid.

An exactly homogeneous finite star with substantial pressure therefore cannot be joined smoothly to a Schwarzschild vacuum without a surface layer, transition atmosphere, heat flux, or loss of exact homogeneity.

The present calculation is consequently a local/background pressure test. It establishes that pressure itself does not break the homogeneous conformal architecture. A realistic pressure-supported collapse requires \(p=p(t,q)\), producing acceleration through

\[
\nu'=-\frac{p'}{\rho+p},
\tag{33}
\]

and must be treated as the next dynamical benchmark.

---

## 9. Mini scoreboard

| GD2 element | OS dust | Homogeneous pressure | Current verdict |
|---|---|---|---|
| Reciprocal cohort scaling \(A_C/A_{C,H}=S_H/S\) | Exact | Exact | **Survives pressure** |
| Isotropic rate reversal | Exact with chosen clock | Exact with lapse \(N_C\) | **Survives; clock remains open** |
| Canonical null birth cone \(T_M=\rho_M=\tfrac12\tan q\) | Exact | Exact | **Geometric result** |
| Physical conformal completion \((\beta,\lambda)\) | Unfixed | Unfixed | **Open** |
| Formation growth \(A_f/A_0=9/4\) | Weak-curvature dust result | Replaced by \(S_H(0)/S_H(q_0)\) | **Dust number retired** |
| Conserved mass-fraction shell label | Yes | No: pressure changes \(m\) | **Use a Lagrangian/conserved-charge label** |
| Local Weyl relation \(g_C=\Gamma^2g_P\) | Exact | Exact | **Survives pressure** |
| \(m_C\simeq\Gamma m_P\) | Weak-curvature result | Rapid-collapse, weak-curvature limit | **Broader but still diagnostic** |
| Smooth finite-star boundary | Standard OS vacuum match | Impossible with homogeneous \(p\neq0\) and no layer | **Pressure gradients require child perturbations** |
| Absolute calibration \(K\) | Unfixed | Unfixed | **Open** |
| Physical child stress-energy | Uncomputed | Uncomputed | **Perturbation amplitude and Einstein tensor remain** |

The score is therefore structural rather than numerical: pressure preserves the background conformal map while retiring two dust conveniences—the universal \(9/4\) growth and conserved Misner–Sharp mass fraction.

---

## 10. Next calculation

[*Pressure Gradients and the Regular Birth Vertex*](note.html?src=pressure_gradients_and_the_regular_birth_vertex) supplies the analytic answer for a radial pressure profile: the geodesic Alice congruence cannot remain both shear-free and uniformly expanding, but the induced departures vanish to leading order at a regular center. The next useful model must supply a realistic equation of state and physical exterior or atmosphere. It should calculate:

1. the perturbation amplitude accumulated before the event horizon reaches the stellar surface;
2. whether the perturbed event-horizon generator passes the surface-anchor test;
3. which Lagrangian or conserved-current label replaces \(m/M\);
4. whether the conformal completion and \(K\) follow from the matter boundary conditions;
5. and whether the transformed Einstein tensor gives regular, physically admissible child stress-energy.

---

## Conclusion

Dust is not responsible for the central background geometry of Result IV. Homogeneous perfect-fluid collapse retains the reciprocal cohort law, the null birth-cone map, and the local Weyl relation. Pressure changes the collapse history and the energy ledger, not the conformal causal architecture.

The invariant rate relation is

\[
\boxed{
H_C=-\frac{\theta_P}{3N_C}.
}
\]

The canonical null image remains

\[
\boxed{
T_M=\rho_M=\frac12\tan q.
}
\]

The general formation growth becomes

\[
\boxed{
N_{\rm form}
=
\ln\frac{S_H(0)}{S_H(q_0)}.
}
\]

What fails is not the map but the finite homogeneous-pressure star. Realistic collapse necessarily introduces pressure gradients and boundary structure. That model is the next rung in the GD2 benchmark ladder.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. P. N. Khambule, R. Goswami, and S. D. Maharaj, “Matching conditions in locally rotationally symmetric spacetimes and radiating stars,” *Classical and Quantum Gravity* **38**, 075006 (2021), [doi:10.1088/1361-6382/abe2dd](https://doi.org/10.1088/1361-6382/abe2dd), [arXiv:2011.00853](https://arxiv.org/abs/2011.00853).
4. G. Salehi, [“Result IV — The Conformal Formation Map”](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
