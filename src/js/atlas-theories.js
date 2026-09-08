const theory = record => ({
  profileLabel: record.profileLabel ?? 'Read the profile →',
  ...record,
});

export const ATLAS_THEORIES = {
  lcdm: theory({
    id: 'lcdm',
    startHere: true,
    title: 'General Relativity + ΛCDM',
    href: 'lambda-cdm.html',
    case: 'Einstein’s equations do not choose what fills the universe. ΛCDM adds cold dark matter, ordinary matter, radiation, a cosmological constant, and a primordial spectrum. Six base parameters then connect the hot plasma of the early universe to the galaxies around us.',
    standing: 'No rival matches its combined account of the CMB, nucleosynthesis, BAO, supernovae, lensing, and structure. The precision comes with an explanatory debt: the dark components remain unidentified, Λ remains unnaturally small, and the initial state is supplied rather than derived.',
    test: 'Any successor must identify those missing ingredients, or remove the need for them, without losing the cross-epoch fit.',
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
    standing: 'The background correspondences are analytic, and the same scale logic proposes an evolving galactic acceleration scale that can be tested at high redshift. Marginality transfer now fixes the clock required at matched spherical cross-sections; the full junction and perturbation map remain unfinished.',
    test: 'The next geometric test is whether the null junction independently returns the clock required by marginality transfer; the empirical test is the predicted redshift evolution of g†.',
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
  'conformalGravity',
  'einsteinCartan',
  'loopQuantumCosmology',
  'ccc',
  'csbhi',
];

export const getAtlasTheory = id => ATLAS_THEORIES[id];

export const getAtlasTheories = () => ATLAS_ORDER.map(id => ATLAS_THEORIES[id]);

export const getAtlasOpenQuestions = () => ATLAS_OPEN_QUESTIONS;
