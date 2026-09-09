const theory = record => ({
  profileLabel: record.profileLabel ?? 'Read the profile →',
  ...record,
});

export const ATLAS_THEORIES = {
  lcdm: theory({
    id: 'lcdm',
    startHere: true,
    title: 'General Relativity + Inflation + ΛCDM',
    href: 'lambda-cdm.html',
    case: 'Inflation drives the early universe toward flatness and generates primordial fluctuations. Reheating prepares the hot plasma, and six-parameter ΛCDM evolves radiation, baryons, cold dark matter, and vacuum energy into the galaxies around us.',
    standing: 'No rival matches its combined account of the primordial spectrum, CMB, nucleosynthesis, BAO, supernovae, lensing, and structure. The inflaton and dark components remain unidentified, Λ remains unnaturally small, and the initial boundary is still supplied rather than derived.',
    test: 'Any successor must explain those missing ingredients, or remove the need for them, without losing the full cross-epoch fit.',
  }),
  stringTheory: theory({
    id: 'string-theory',
    title: 'String Theory and String Cosmology',
    href: 'string-theory.html',
    case: 'Quantized closed strings necessarily contain gravity, while compactification can generate gauge forces, matter, inflation, axions, and dark sectors. Duality, holography, and black-hole microstate counting give the framework a quantum-gravity reach unmatched by any single cosmological model.',
    standing: 'The framework supplies many viable four-dimensional worlds but no accepted principle that selects ours. Particular compactifications are testable; no confirmed observation uniquely requires a string origin.',
    test: 'Fix a compactification and its statistical prior before opening the data, then make correlated predictions across particle physics, inflation, relics, and vacuum energy.',
  }),
  fRGravity: theory({
    id: 'f-r-gravity',
    title: 'f(R) Gravity',
    href: 'f-r-gravity.html',
    case: 'The Einstein–Hilbert action is linear in the Ricci scalar; f(R) gravity asks what nonlinear curvature can do. Its R² limit produced Starobinsky inflation, while low-curvature models can imitate dark energy and predict scale-dependent structure growth.',
    standing: 'Starobinsky inflation remains one of the best-fitting primordial models. Late-time f(R) searches have found no scalar force, and viable models are increasingly constrained toward the GR limit while usually retaining cold dark matter.',
    test: 'Use one fixed function and screening prescription to predict expansion, matter growth, lensing, cluster abundance, and environmental fifth-force effects together.',
  }),
  mond: theory({
    id: 'mond',
    title: 'MOND and Relativistic MOND Cosmology',
    href: 'mond.html',
    case: 'Below one acceleration scale, galactic motion follows the visible matter with remarkable economy. MOND promotes that regularity to a law: its deep limit fixes flat rotation curves and the baryonic Tully–Fisher relation instead of assigning every galaxy an independent dark halo.',
    standing: 'The galactic predictions are substantial, while clusters retain a debated residual and the MOND limit does not select one relativistic parent theory. Modern covariant models can reproduce the linear CMB and matter spectra by giving additional gravitational fields part of dark matter’s cosmological role.',
    test: 'A fixed relativistic action must explain galaxies, clusters, lensing, structure, and the CMB together—and decide whether the acceleration scale is constant or evolves with cosmic history.',
  }),
  conformalGravity: theory({
    id: 'conformal-gravity',
    title: 'Conformal Gravity',
    href: 'conformal-gravity.html',
    case: 'Conformal gravity replaces the Einstein–Hilbert action with one built from the square of the Weyl tensor. The resulting potential carries local baryonic terms and universal contributions from the surrounding cosmos. Mannheim and collaborators have used that structure to fit 141 galaxy rotation curves without individual dark halos.',
    standing: 'The galaxy result gives the programme genuine observational weight. The same construction has not yet reproduced cluster lensing, the CMB, BAO, and structure growth with one physical matter sector; its fourth-order quantum theory also remains disputed.',
    test: 'Clusters supply the immediate test: one field configuration must move matter and bend light correctly from galaxies through rich clusters.',
  }),
  einsteinCartan: theory({
    id: 'einstein-cartan',
    title: 'Einstein–Cartan Cosmology',
    href: 'einstein-cartan.html',
    case: 'Einstein–Cartan gravity extends the connection so fermionic spin can twist spacetime at extreme density. The correction disappears in ordinary conditions and becomes repulsive during collapse. In Popławski’s cosmology, that repulsion replaces the singularity with a bounce into an expanding universe.',
    standing: 'The mechanism is economical and preserves tested GR. Its cosmology still depends on how microscopic spin becomes an effective fluid, whether torsion defeats rotational shear, and how perturbations cross from collapse into the child universe.',
    test: 'The next calculation must show whether fixed fermion microphysics produces the primordial spectrum before CMB values are used to tune it.',
  }),
  loopQuantumCosmology: theory({
    id: 'loop-quantum-cosmology',
    title: 'Loop Quantum Cosmology',
    href: 'loop-quantum-cosmology.html',
    case: 'Loop quantum cosmology applies the methods of loop quantum gravity to homogeneous universes. In its best-controlled flat model, density has an absolute upper bound near 0.41 times the Planck density. Contraction reaches that bound and continues through a deterministic bounce.',
    standing: 'The bounce is an exact result inside the reduced model, not a sketch. The observable sky is less settled: different quantum states and perturbation prescriptions produce different CMB signatures, and the route from full loop quantum gravity to one cosmology remains incomplete.',
    test: 'The programme becomes a predictive cosmology when the full theory selects one primordial state and one correlated CMB signature in advance.',
  }),
  ccc: theory({
    id: 'ccc',
    title: 'Conformal Cyclic Cosmology',
    href: 'conformal-cyclic-cosmology.html',
    case: 'In Penrose’s picture, the remote future loses every operational measure of absolute scale. Conformal geometry can then identify that cold, empty boundary with the hot beginning of a new aeon. The extraordinary smoothness and low gravitational entropy of the Big Bang acquire a history.',
    standing: 'CCC attacks a mystery ΛCDM normally accepts as initial data. A physical crossover must still account for massive matter, entropy, and the next aeon’s perturbations. Searches for Hawking points are quantitative, but no distinctive signal has been independently established.',
    test: 'A completed crossover must produce matter and a primordial spectrum without reading their values from the next aeon.',
  }),
  csbhi: theory({
    id: 'csbhi',
    title: 'Conformal Scaling of Black Hole Interiors',
    href: 'csbhi.html',
    case: 'CSBHI adopts the geometric ansatz a = 1/r. Inward motion on the exterior radial diagram then becomes expansion in the reciprocal interior; matter dilutes as a⁻³, radiation as a⁻⁴, and vacuum energy remains constant. Because the universe contains black holes, the construction branches recursively.',
    standing: 'The background correspondences are analytic, and the same scale logic proposes an evolving galactic acceleration scale that can be tested at high redshift. The collapse-cohort equations reduce the horizon map to one clock, but the simplest clock fails and the full junction and perturbation map remain unfinished.',
    test: 'The next geometric test is to derive a nontrivial clock along the parent-event-horizon to child-particle-horizon map; the empirical test is the predicted redshift evolution of g†.',
  }),
};

export const ATLAS_OPEN_QUESTIONS = [
  {
    title: 'Quantum gravity',
    question: 'How does gravity behave when spacetime itself must be treated quantum mechanically?',
  },
  {
    title: 'Singularities',
    question: 'What replaces the incomplete boundaries that classical relativity predicts at the Big Bang and inside black holes?',
  },
  {
    title: 'Cosmic expansion',
    question: 'What causes late-time acceleration, and what fixes the extraordinarily small vacuum scale?',
  },
  {
    title: 'The beginning',
    question: 'What selected the early universe’s smooth geometry and its particular spectrum of primordial fluctuations?',
  },
  {
    title: 'Dark matter',
    question: 'What produces the gravitational effects attributed to cold, nonbaryonic matter?',
  },
  {
    title: 'The constants',
    question: 'Why do the constants of nature and the fitted parameters of cosmology have the values we observe?',
  },
];

export const ATLAS_ORDER = [
  'lcdm',
  'stringTheory',
  'fRGravity',
  'mond',
  'conformalGravity',
  'einsteinCartan',
  'loopQuantumCosmology',
  'ccc',
  'csbhi',
];

export const getAtlasTheory = id => ATLAS_THEORIES[id];

export const getAtlasTheories = () => ATLAS_ORDER.map(id => ATLAS_THEORIES[id]);

export const getAtlasOpenQuestions = () => ATLAS_OPEN_QUESTIONS;
