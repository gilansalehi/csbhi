#!/usr/bin/env python3
# Verification for: notes/shear_free_interior_weyl_stress_identity.md  (CSBHI project)
# Claim checked: the interior Weyl scalar dilutes as a^-2 (conformal weight of Psi2), so under the
# de Sitter boundary rescaling Omega=1/a the rescaled Psi2 is finite/nonzero (a^-3 would vanish).
# Method: direct Weyl-tensor computation in physical and conformally rescaled frames; no dependencies.
import math
# Child interior approaching a de Sitter future: a(tau)=e^{H tau}, fixed Weyl-carrying shape Sigma(l)
# ds^2 = -dtau^2 + a^2[dl^2 + Sigma^2 dOmega^2]
H=0.5
def a(t): return math.exp(H*t)
def Sig(l): return math.sinh(l)+0.2*l*l
def make_metric(Omega=None):
    # Omega: optional conformal factor as function of (t,l); ghat = Omega^2 g
    def metric(x):
        t,l,th,ph=x; A=a(t); S=Sig(l)
        g=[[0.0]*4 for _ in range(4)]
        g[0][0]=-1.0; g[1][1]=A*A; g[2][2]=A*A*S*S; g[3][3]=A*A*S*S*math.sin(th)**2
        if Omega is not None:
            w=Omega(t,l)**2
            for i in range(4): g[i][i]*=w
        return g
    return metric

h=1e-4
def build(metric):
    def inv_diag(g):
        gi=[[0.0]*4 for _ in range(4)]
        for i in range(4): gi[i][i]=1.0/g[i][i]
        return gi
    def dmetric(x,c):
        xp=list(x); xm=list(x); xp[c]+=h; xm[c]-=h
        gp=metric(xp); gm=metric(xm)
        return [[(gp[i][j]-gm[i][j])/(2*h) for j in range(4)] for i in range(4)]
    def christ(x):
        g=metric(x); gi=inv_diag(g); dg=[dmetric(x,c) for c in range(4)]
        Gam=[[[0.0]*4 for _ in range(4)] for _ in range(4)]
        for a_ in range(4):
            for b in range(4):
                for c in range(4):
                    d=a_
                    Gam[a_][b][c]=0.5*gi[a_][a_]*(dg[c][d][b]+dg[b][d][c]-dg[d][b][c])
        return Gam
    def dchrist(x,c):
        xp=list(x); xm=list(x); xp[c]+=h; xm[c]-=h
        Gp=christ(xp); Gm=christ(xm)
        return [[[(Gp[a][b][d]-Gm[a][b][d])/(2*h) for d in range(4)] for b in range(4)] for a in range(4)]
    def weyl_orthon_0l0l(x):
        g=metric(x); gi=inv_diag(g)
        Gam=christ(x); dG=[dchrist(x,c) for c in range(4)]
        Rup=[[[[0.0]*4 for _ in range(4)] for _ in range(4)] for _ in range(4)]
        for a_ in range(4):
            for b in range(4):
                for c in range(4):
                    for d in range(4):
                        s=dG[c][a_][b][d]-dG[d][a_][b][c]
                        for e in range(4):
                            s+=Gam[a_][c][e]*Gam[e][b][d]-Gam[a_][d][e]*Gam[e][b][c]
                        Rup[a_][b][c][d]=s
        Rl=[[[[sum(g[a_][e]*Rup[e][b][c][d] for e in range(4)) for d in range(4)] for c in range(4)] for b in range(4)] for a_ in range(4)]
        Ric=[[sum(Rup[a_][i][a_][j] for a_ in range(4)) for j in range(4)] for i in range(4)]
        Rs=sum(gi[i][i]*Ric[i][i] for i in range(4))
        def Cabcd(a_,b,c,d):
            t1=Rl[a_][b][c][d]
            t2=0.5*(g[a_][c]*Ric[d][b]-g[a_][d]*Ric[c][b]-g[b][c]*Ric[d][a_]+g[b][d]*Ric[c][a_])
            t3=(1.0/6.0)*Rs*(g[a_][c]*g[b][d]-g[a_][d]*g[b][c])
            return t1-t2+t3
        # orthonormal radial tidal: C_{0l0l}/(|g00| g_ll)
        return Cabcd(0,1,0,1)/(abs(g[0][0])*g[1][1])
    return weyl_orthon_0l0l

l0=0.7; th0=1.0; ph0=0.3
print("=== (1) does the child interior dilute as a^-2 under de Sitter expansion? ===")
W = build(make_metric())
for t in [0.0,1.0,2.0,3.0]:
    C = W([t,l0,th0,ph0])
    print(f"  tau={t:.1f}  a={a(t):7.3f}   Psi2(phys)={C: .6e}   Psi2 * a^2 ={C*a(t)**2: .6e}")

print()
print("=== (2) conformal boundary rescaling  ghat = Omega^2 g,  Omega = 1/a  ===")
# Omega = 1/a(t) : compactifies the de Sitter future.  Rescaled Weyl should be FINITE (constant).
Wt = build(make_metric(Omega=lambda t,l: 1.0/a(t)))
for t in [0.0,1.0,2.0,3.0]:
    Ch = Wt([t,l0,th0,ph0])
    print(f"  tau={t:.1f}  a={a(t):7.3f}   Psi2_hat(rescaled) ={Ch: .6e}")

print()
print("=== (3) what Codex's a^-3 would have given at the boundary (Omega^-2 * a^-3 = a^-1 -> 0) ===")
for t in [0.0,1.0,2.0,3.0]:
    print(f"  tau={t:.1f}  a={a(t):7.3f}   (a^2)*(a^-3)=a^-1 = {a(t)**-1: .6e}   -> vanishes: no seed carried across")
