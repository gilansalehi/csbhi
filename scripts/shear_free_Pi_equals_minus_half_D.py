#!/usr/bin/env python3
# Verification for: notes/shear_free_interior_weyl_stress_identity.md  (CSBHI project)
# Claim checked: for a geodesic shear-free spherical interior, Pi = -D/2  (i.e. 8piG*Pi = 3*Psi2).
# Method: full finite-difference Riemann/Ricci/Einstein from an explicit metric; no dependencies.
import math

# coords: x = [tau, l, theta, phi]
# separable shear-free interior: ds^2 = -dtau^2 + a(tau)^2 [ dl^2 + Sigma(l)^2 dOmega^2 ]
H0 = 0.3
def a(t):    return math.exp(H0*t)
def Sig(l):  return math.sinh(l) + 0.2*l*l   # generic shape -> nonzero Weyl

def metric(x):
    t,l,th,ph = x
    A = a(t); S = Sig(l)
    g = [[0.0]*4 for _ in range(4)]
    g[0][0] = -1.0
    g[1][1] = A*A
    g[2][2] = A*A*S*S
    g[3][3] = A*A*S*S*math.sin(th)**2
    return g

def inv_diag(g):
    gi = [[0.0]*4 for _ in range(4)]
    for i in range(4): gi[i][i] = 1.0/g[i][i]
    return gi

h = 1e-4
def dmetric(x, c):
    xp=list(x); xm=list(x); xp[c]+=h; xm[c]-=h
    gp=metric(xp); gm=metric(xm)
    return [[(gp[i][j]-gm[i][j])/(2*h) for j in range(4)] for i in range(4)]

def christ(x):
    g=metric(x); gi=inv_diag(g)
    dg=[dmetric(x,c) for c in range(4)]   # dg[c][i][j] = d_c g_ij
    Gam=[[[0.0]*4 for _ in range(4)] for _ in range(4)]
    for aidx in range(4):
        for b in range(4):
            for c in range(4):
                s=0.0
                d=aidx
                s=0.5*gi[aidx][aidx]*(dg[c][d][b]+dg[b][d][c]-dg[d][b][c])
                Gam[aidx][b][c]=s
    return Gam

def dchrist(x,c):
    xp=list(x); xm=list(x); xp[c]+=h; xm[c]-=h
    Gp=christ(xp); Gm=christ(xm)
    return [[[(Gp[a][b][d]-Gm[a][b][d])/(2*h) for d in range(4)] for b in range(4)] for a in range(4)]

def ricci(x):
    Gam=christ(x)
    dG=[dchrist(x,c) for c in range(4)]  # dG[c][a][b][d]=d_c Gamma^a_bd
    Ric=[[0.0]*4 for _ in range(4)]
    for b in range(4):
        for d in range(4):
            s=0.0
            for aidx in range(4):
                s+=dG[aidx][aidx][b][d]-dG[d][aidx][b][aidx]
                for e in range(4):
                    s+=Gam[aidx][aidx][e]*Gam[e][b][d]-Gam[aidx][d][e]*Gam[e][b][aidx]
            Ric[b][d]=s
    return Ric

x=[0.4,0.7,1.0,0.5]
g=metric(x); gi=inv_diag(g)
Ric=ricci(x)
Rs=sum(gi[i][i]*Ric[i][i] for i in range(4))
Ein=[[Ric[i][j]-0.5*Rs*g[i][j] for j in range(4)] for i in range(4)]

# orthonormal (diagonal metric): G_hat = G_ii / |g_ii|
rho8 = Ein[0][0]/(-g[0][0])   # 8piG rho
pr8  = Ein[1][1]/g[1][1]      # 8piG p_r
pt8  = Ein[2][2]/g[2][2]      # 8piG p_t
Pi8  = pr8-pt8               # 8piG Pi

# areal radius phi = a*Sig ; Misner-Sharp: 2Gm/phi = 1 - (grad phi)^2
t,l,th,ph=x
A=a(t); S=Sig(l)
phi=A*S
# grad phi: dphi/dtau = a'(t)S = H0*A*S ; dphi/dl = A*S'(l)
Sp=(Sig(l+h)-Sig(l-h))/(2*h)
dphidt=H0*A*S
dphidl=A*Sp
gradphi2 = gi[0][0]*dphidt**2 + gi[1][1]*dphidl**2  # = -dphidt^2 + dphidl^2/a^2
Gm = 0.5*phi*(1.0-gradphi2)   # G*m
Psi2 = -Gm/phi**3 + (1.0/6.0)*rho8   # (4piG/3)rho = rho8/6
rhobar8 = 3*Gm/(phi**3)*(8*math.pi)/(8*math.pi)  # careful: rhobar=3m/(4pi phi^3); 8piG rhobar = 6 Gm/phi^3
rhobar8 = 6*Gm/phi**3
D8 = rhobar8 - rho8   # 8piG D
print('8piG rho =',rho8)
print('8piG p_r =',pr8)
print('8piG p_t =',pt8)
print('8piG Pi  =',Pi8)
print('Psi2     =',Psi2)
print('8piG D   =',D8)
print('--- checks ---')
print('8piG Pi / Psi2      =',Pi8/Psi2, '  (claim: 3)')
print('Psi2 / (8piG D)     =',Psi2/D8, '  (claim: -1/6, i.e. Psi2=-(4piG/3)D)')
print('Pi / D  (=Pi8/D8)   =',Pi8/D8,  '  (claim: -1/2)')
