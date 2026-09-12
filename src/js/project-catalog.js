const noteHref = slug => `note.html?src=${slug}`;
const pageHref = slug => `${slug}.html`;

const route = ({ note, page }) => note ? noteHref(note) : pageHref(page);

const DOCUMENTS = {
  gd1: {
    label: 'GD I',
    title: 'Geometric Duality: Conformal Scaling of Black Hole Interiors',
    page: 'gd1',
    meta: {
      review: 'pre-print · primary proposal',
      publications: 'pre-print available',
    },
    startHere: true,
    summaries: {
      review: 'Introduces the Alice–Bob construction, the reciprocal ansatz \\(a=1/r\\), and its expansion–infall correspondence and cosmological consequences.',
      publications: 'The entry paper. Introduces the reciprocal map between Bob\'s infall coordinate and Alice\'s spatial scale, derives its matter–radiation–Λ consequences, and identifies its exact de Sitter endpoint.',
    },
  },
  ri1: {
    label: 'RI I',
    title: 'Field Equations of the Reciprocal Interior',
    note: 'field_equations_of_the_reciprocal_interior',
    prerequisite: 'gd1',
    meta: {
      review: 'technical paper · independently checked',
      technical: 'technical paper · Codex (OpenAI)',
      publications: 'technical paper',
    },
    summaries: {
      review: 'Derives the matter–radiation–Λ dynamics from the reciprocal metric, Einstein\'s equations, and stress-energy conservation.',
      technical: 'Derives the matter–radiation–Λ Friedmann dynamics from Alice\'s reciprocal metric, Einstein\'s field equations, and stress-energy conservation before translating the result into Bob\'s infall function.',
      publications: 'Applies Einstein\'s equations to the reciprocal interior and recovers a real matter–radiation–Λ expansion history — the interior is a cosmology, not a formal device.',
    },
  },
  involution: {
    label: 'Result I',
    title: 'The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution',
    page: 'reciprocal-involution',
    prerequisite: 'gd1',
    meta: { review: 'supporting result · checked proof', publications: 'supporting result · proven' },
    summaries: {
      review: 'Proves that \\(a=1/r\\) is the unique nontrivial power-law map that is scale-free, involutive, and horizon-fixing.',
      publications: 'Within the scale-free, horizon-fixing class, involution fixes the unique nontrivial map: \\(a=1/r\\).',
    },
  },
  conformalFormationMap: {
    label: 'Result IV',
    title: 'The Conformal Formation Map',
    note: 'result_iv_conformal_formation_map',
    prerequisite: 'gd1',
    meta: {
      publications: 'exact OS benchmark · conditional GD2 result',
      technical: 'exact OS benchmark · Gilan Salehi',
    },
    summaries: {
      publications: 'The standard conformal map sends the growing Oppenheimer–Snyder event horizon exactly onto an outgoing flat-space birth cone. Its canonical tangent coordinates recover the proposed shell map, while the physical conformal completion, child boundary, absolute scale, and timelike transport remain open.',
      technical: 'Derives the exact OS event-horizon map \\(\\Phi/\\Phi_f=\\tan q/\\tan q_0\\), its weak-curvature agreement with the homogeneous mass-shell map, the formation-era Weyl factor, and the conformal Misner–Sharp mass decomposition.',
    },
  },
  pressureRobustness: {
    label: 'GD2 Benchmark',
    title: 'Pressure Robustness of the Conformal Formation Map',
    note: 'pressure_robustness_of_the_conformal_formation_map',
    prerequisite: 'conformalFormationMap',
    meta: {
      publications: 'homogeneous perfect-fluid benchmark · conditional GD2 result',
      technical: 'homogeneous perfect-fluid benchmark · reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Replaces OS dust with homogeneous perfect-fluid collapse. Pressure preserves the reciprocal cohort law, null birth-cone map, and local Weyl relation while retiring the dust-specific growth factor and conserved mass-fraction label.',
      technical: 'Shows which parts of Result IV are geometric rather than dust-specific, derives the lapse-aware contraction–expansion law and general quasi-local mass identity, and isolates radial pressure gradients as the next physical test.',
    },
  },
  perturbedFormationMap: {
    label: 'GD2 Calculation',
    title: 'Perturbing the Conformal Formation Map',
    note: 'perturbing_the_conformal_formation_map',
    prerequisite: 'conformalFormationMap',
    meta: {
      publications: 'first-order LTB calculation · conditional GD2 result',
      technical: 'first-order LTB calculation · reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Perturbs the OS formation benchmark with LTB dust, derives the event-horizon and beam-crossing shifts, and isolates the absolute conformal calibration function that GD1 does not fix.',
      technical: 'Derives the first-order LTB horizon sweep and null-beam timing, then shows why generic collapse produces perturbed FLRW and exposes the unresolved shell calibration \\(K(q)\\).',
    },
  },
  pressureGradientTheorem: {
    label: 'GD2 Result',
    title: 'Pressure Gradients and the Regular Birth Vertex',
    note: 'pressure_gradients_and_the_regular_birth_vertex',
    prerequisite: 'pressureRobustness',
    meta: {
      publications: 'perfect-fluid perturbation theorem · conditional GD2 result',
      technical: 'perfect-fluid perturbation theorem · reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Under the minimal shell-independent completion, proves that a radial pressure gradient prevents a geodesic Alice congruence from remaining both shear-free and uniformly expanding. At the regular birth vertex, radial flux vanishes linearly while Weyl curvature, shear, and the reciprocal scalar-rate correction begin at quadratic order.',
      technical: 'Separates freely falling Alice from the accelerated fluid, derives the reciprocal rate with Alice shear, proves the pressure-gradient obstruction to the minimal exact-FLRW completion, and shows that the obstruction vanishes to leading order at a regular spherical center.',
    },
  },
  tolmanVIIAmplitude: {
    label: 'GD2 Benchmark',
    title: 'The Tolman VII Birth-Vertex Amplitude Benchmark',
    note: 'tolman_vii_birth_vertex_amplitude_benchmark',
    prerequisite: 'pressureGradientTheorem',
    meta: {
      publications: 'static neutron-star amplitude benchmark · conditional GD2 result',
      technical: 'Tolman VII amplitude benchmark · numerically checked by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Measures the regular birth-vertex suppression in a Tolman VII neutron-star profile: the normalized tidal departure is exactly \\(2x^2/5\\), remaining tiny near the center but reaching ten percent by half radius. The result passes the near-vertex test and makes a dynamical horizon sweep the next benchmark.',
      technical: 'Derives the Tolman VII Weyl amplitude, independently integrates the TOV pressure at compactness \\(0.20\\), and quantifies where the homogeneous OS expansion remains controlled and where nonlinear stellar structure takes over.',
    },
  },
  level3Completion: {
    label: 'GD2 Result',
    title: 'CSBHI Mini-Program — Level 3 Progress Note',
    note: 'level_3_general_spherical_perfect_fluid_completion',
    prerequisite: 'tolmanVIIAmplitude',
    meta: {
      publications: 'general perfect-fluid capstone · conditional GD2 result',
      technical: 'Level 3 analytic completion · reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Completes the analytic general-perfect-fluid rung: the global event-horizon sweep, nonlinear Weyl transport, and Alice–fluid tilt all preserve an FLRW-like birth vertex, with scalar departures beginning at quadratic order in radius.',
      technical: 'Derives the outgoing-null transport equation for spherical Weyl curvature and closes the Alice–fluid rapidity analysis. Level 3 passes structurally at the regular birth vertex; full stellar amplitudes remain a numerical follow-up.',
    },
  },
  level4Dissipative: {
    label: 'GD2 Result',
    title: 'CSBHI Mini-Program — Level 4 Progress Note',
    note: 'level_4_dissipative_spherical_collapse',
    prerequisite: 'level3Completion',
    meta: {
      publications: 'dissipative spherical-collapse result · conditional GD2 result',
      technical: 'Level 4 structural result · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Extends the protected birth-vertex result to regular spherical heat flux, radiation transport, and pressure anisotropy. Dissipation changes the background and the initial Weyl coefficient, but the scalar Weyl residue remains quadratic in horizon radius.',
      technical: 'Derives the dissipative Misner–Sharp mass expansion and exact outgoing-null Weyl transport equation. Regularity cancels the apparent zeroth-order flux source, giving a structural pass subject to a smooth total stress tensor.',
    },
  },
  trappingHorizonPair: {
    label: 'GD2 Result',
    title: 'The Trapping-Horizon Pair and the Inward Reciprocal Branch',
    note: 'trapping_horizon_pair_and_inward_reciprocal_branch',
    prerequisite: 'level4Dissipative',
    meta: {
      publications: 'finite-throat collapse result · conditional GD2 interpretation',
      technical: 'trapping-pair fold calculation · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Shows that smooth interior first trapping creates outward and inward marginal branches with universal square-root opening. Compactness tangency fixes the parent density relation, while the inward branch supplies a concrete—but unproved—candidate for GD1’s reciprocal radial evolution.',
      technical: 'Derives the compactness tangency, mean/local density ratio, pressure-dependent opening rate, and nondegenerate fold law. It explicitly rejects parent–child areal-radius equality and reduces the child clock to an independent optical coefficient test.',
    },
  },
  trappingPairLedger: {
    label: 'GD2 Conditional Result',
    title: 'The Conditional Trapping-Pair Ledger and Weyl-Flat Handoff',
    note: 'conditional_trapping_pair_ledger_and_weyl_flat_handoff',
    prerequisite: 'trappingHorizonPair',
    meta: {
      publications: 'horizon-jet ledger · conformal closure open',
      technical: 'conditional trapping-pair ledger · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Identifies a conformally dressed trapping-pair curve whose third and fourth future derivatives encode the child matter and radiation coefficients. A Weyl-flat marginal sphere reproduces the FLRW density, surface-gravity, and causal-signature forms, but the conformal marginality and stress-energy transfer remain open.',
      technical: 'Audits the proposed matter-ledger closure, replaces the discarded raw radius equality with a scale-dressed outer-horizon curve, derives its horizon-jet invariant, and states a local/global consistency test at a Weyl-flat marginal handoff.',
    },
  },
  conformalDictionary: {
    label: 'GD2 Local Geometry',
    title: 'The Conformal Dictionary and the Pre-FLRW Causal Interval',
    note: 'conformal_dictionary_and_pre_flrw_causal_interval',
    prerequisite: 'trappingPairLedger',
    meta: {
      publications: 'local Weyl-transfer synthesis · horizon-problem route open',
      technical: 'conditional local Weyl dictionary · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Establishes the scale, proper-time, affine-parameter, expansion, and marginality rules on an actually Weyl-related local patch. Its conformal factor is now denoted \\(\\Omega_{\\rm W}\\), and its relation to the mature dual scale \\(\\Gamma_{\\rm GD}=a^2\\) remains a throat calculation.',
      technical: 'Derives the local Weyl affine and null-expansion transformations, corrects the trapping-pair ledger to use a dressed curve, and inventories older isometric and unit-lapse notes. Its affine-transfer formula is conditional on the local four-metric Weyl map.',
    },
  },
  matureGammaDynamics: {
    label: 'GD2 Conditional Result',
    title: 'Mature Gamma Dynamics and the Conditional Radiation Handoff',
    note: 'mature_gamma_dynamics_and_conditional_radiation_handoff',
    prerequisite: 'conformalDictionary',
    meta: {
      publications: 'mature dual-scale dynamics · radiation handoff conditional',
      technical: 'Friedmann–Gamma reduction · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Defines the mature dual scale as \\(\\Gamma_{\\rm GD}=a^2=r^{-2}\\), reduces its matter–radiation–vacuum evolution to one first integral, and isolates a conditional theorem under which a stationary mapped parent ruler selects a radiation child.',
      technical: 'Derives the exact first and second \\(\\Gamma_{\\rm GD}\\) equations, its handoff two-jet, cosmic-era limits, and stellar-mass QCD-era benchmark while separating the mature ruler scale from the local Weyl factor and null affine transfer.',
    },
  },
  level5CreaseSetup: {
    label: 'GD2 Program',
    title: 'CSBHI Mini-Program — Level 5 Setup',
    note: 'level_5_event_horizon_creases_and_rotation_test',
    prerequisite: 'level4Dissipative',
    meta: {
      publications: 'rotation and crease-set program · open GD2 test',
      technical: 'Level 5 problem definition · reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Separates matter perturbations from the event horizon’s crease set and defines the rotating-collapse test. A regular conformal map preserves a crease, so the unresolved birth completion must show how one connected parent endpoint set becomes an admissible child birth geometry.',
      technical: 'Uses null optics and Maxwell-set theory to define the generic two-sheet crease test, distinguishes first-order frame dragging from second-order quadrupolar deformation, and states explicit Level-5 pass/fail criteria.',
    },
  },
  level5RotationSummary: {
    label: 'GD2 Result',
    title: 'CSBHI Formation Mini-Program — Level 5 Conditional Result and Campaign Summary',
    note: 'level_5_rotation_and_campaign_summary',
    prerequisite: 'level5CreaseSetup',
    meta: {
      publications: 'rotation and crease-set result · conditional GD2 result',
      technical: 'Level 5 conditional result · independently audited by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Completes the analytic formation ladder without overclaiming its final step: regular slow rotation creates no first-order scalar obstruction, while a local crease-nucleation geometry has controlled intrinsic distortion. The absolute conformal birth behavior and the full crease image remain open.',
      technical: 'Separates first-order axial rotation from second-order quadrupolar Weyl structure, derives the conditional expansion-normalized suppression laws, and shows why an O(sqrt(tau)) crease opening gives only O(tau) intrinsic metric distortion while a smooth conformal map still preserves the crease.',
    },
  },
  parameterCascade: {
    label: 'Program Synthesis',
    title: 'CSBHI Geometric Parameter Cascade',
    note: 'csbhi_geometric_parameter_cascade',
    prerequisite: 'level5RotationSummary',
    meta: {
      publications: 'parameter-dependency ledger · revised synthesis',
      technical: 'background and closure audit · independently reviewed by Codex (OpenAI)',
    },
    summaries: {
      publications: 'Organizes the standard de Sitter and flat-Friedmann consequences of the child scale and inheritance ratios, separates the fixed and evolving galaxy-scale branches, and identifies the parent–child lapse and absolute conformal calibration that remain open. It is a dependency ledger, not a claim of many independent predictions.',
      technical: 'Audits the parameter cascade from \\(L\\), \\(\\eta_m\\), and \\(\\eta_r\\); distinguishes areal from proper de Sitter volume; rejects the discarded isometric parent-mass closure; and inventories the additional data required before parent collapse predicts the child background.',
    },
  },
  evolvingGDagger: {
    label: 'Prediction I',
    title: 'The Evolving Galactic Acceleration-Scale Correspondence',
    note: 'evolving_g_dagger_derivation',
    prerequisite: 'note3',
    meta: { review: 'observational prediction · stated in advance', publications: 'observational prediction' },
    summaries: {
      review: 'Symmetry fixes the square-root mixing law; identifying its global scale with the contemporaneous cosmological horizon gives \\(g_\\dagger(z)/g_\\dagger(0)=H(z)/H_0\\). A fixed scale predicts a flat ratio; this correspondence predicts a rising one. Current intermediate-redshift evidence is compatible with that rise.',
      publications: 'The reciprocal ansatz applied to galaxies: the acceleration scale tracks the contemporaneous horizon, giving the coefficient-free prediction \\(g_\\dagger(z)/g_\\dagger(0)=H(z)/H_0\\). The H-linked law has MOND precedent; CSBHI supplies an independent geometric route, and recent intermediate-redshift evidence favors a rise over a constant scale.',
    },
  },
  highZTest: {
    label: 'Test I',
    title: 'The Evolving Galactic Acceleration Scale and its High-Redshift Test',
    note: 'evolving_acceleration_scale_high_z_test',
    prerequisite: 'evolvingGDagger',
    meta: { publications: 'observational test' },
    summaries: {
      publications: 'The observational discriminator: the predicted \\(0.8\\)–\\(1.0\\) dex offset by \\(z\\gtrsim3\\) clears the systematic floor, so the rising-versus-flat acceleration scale is testable in the JWST era.',
    },
  },
  wchFixedPoint: {
    label: 'WCH I',
    title: 'The Weyl Curvature Hypothesis as a Fixed Point',
    note: 'recursive_bhc_and_the_weyl_curvature_hypothesis',
    prerequisite: 'gd1',
    meta: { publications: 'research hypothesis' },
    summaries: {
      publications: 'Proposes that smooth parent collapse supplies a low-Weyl child and that this condition reproduces itself through cosmological succession, turning Penrose\'s boundary condition into a candidate fixed point.',
    },
  },
  crossover: {
    label: 'WCH III',
    title: 'A Black Hole on the Aeon Boundary',
    note: 'shear_free_interior_weyl_stress_identity',
    prerequisite: 'wchFixedPoint',
    meta: { publications: 'conditional curvature result' },
    summaries: {
      publications: 'The interior Weyl field dilutes at the conformal weight \\(a^{-2}\\), so a black hole can sit on the aeon boundary as a regular, seed-carrying crossover — the regularity CCC secures by evaporation, secured instead by the geometry.',
    },
  },
  entropy: {
    label: 'WCH IV',
    title: 'Gravitational Entropy as the Thermodynamic Face of Conformal Scaling',
    note: 'gravitational_entropy_and_conformal_scaling',
    prerequisite: 'wchFixedPoint',
    meta: { publications: 'proposal · conditional result' },
    summaries: {
      publications: 'Gravitational entropy is a conformal-curvature quantity; the reciprocal map exchanges the parent black hole\'s horizon entropy with the child\'s de Sitter horizon entropy, \\(S_{\\rm BH}=S_{\\rm dS}\\) — so the arrow and CCC\'s reset need no information destruction.',
    },
  },
  gd2: {
    label: 'GD II',
    title: 'Geometric Duality II: Cosmological Succession and the Horizon Map',
    note: 'gd2_collapse_cohort_horizon_map_outline',
    prerequisite: 'gd1',
    meta: { publications: 'working outline' },
    summaries: {
      publications: 'Repeats Alice\'s infall experiment across the parent collapse history to construct the cohort map from black-hole formation to the child cosmology.',
    },
  },
  note3: {
    label: 'Derivation',
    title: 'Self-Dual Homogeneous Derivation of the Square-Root Law',
    note: 'gd_self_dual_homogeneous_derivation_of_the_square_root_law',
    prerequisite: 'involution',
    meta: { publications: 'conditional theorem', technical: 'conditional theorem' },
    summaries: {
      publications: 'A scale-free, self-dual mixing law between local Newtonian acceleration \\(g_N\\) and the global horizon scale \\(cH\\) selects \\(g_{\\rm mix}\\sim\\sqrt{g_NcH}\\).',
      technical: 'A theorem-style bridge to the galaxy problem: a scale-free, self-dual mixing law between local Newtonian acceleration \\(g_N\\) and the global throat scale \\(cH\\) selects \\(g_{\\rm mix}\\sim\\sqrt{g_NcH}\\).',
    },
  },
  gd3: {
    label: 'GD III',
    title: 'Geometric Duality III: Throat Curvature and the Galaxy Acceleration Law',
    note: 'gd3_throat_curvature_and_galaxy_law_outline',
    prerequisite: 'gd2',
    meta: { publications: 'working outline' },
    summaries: {
      publications: 'Develops the galaxy-scale consequence of GD: local baryonic gravity and the global horizon scale mix through the throat geometry, producing a MOND/BTFR-like relation \\(g\\sim\\sqrt{g_NcH}\\) and \\(v^4\\sim GMcH\\).',
    },
  },
  thermodynamics: {
    label: 'Future',
    title: 'Horizon Thermodynamics and the GD Interpretation',
    note: 'gd_thermodynamic_reconciliation_outline',
    prerequisite: 'gd3',
    meta: { publications: 'planned outline' },
    summaries: {
      publications: 'Connects the reciprocal geometry to horizon thermodynamics, emergent gravity, and the acceleration-scale results of Milgrom and McGaugh.',
    },
  },
  weylHypothesis: {
    label: 'WCH II',
    title: 'The Weyl Curvature Hypothesis at Background Order',
    note: 'weyl_curvature_hypothesis_reciprocal_interior',
    prerequisite: 'gd1',
    meta: {
      publications: 'technical background note · Codex (OpenAI)',
      technical: 'technical note · Codex (OpenAI)',
    },
    summaries: {
      publications: 'Separates Weyl from Ricci curvature along Alice\'s descent, shows why homogeneous collapse supplies a zero-Weyl background, and isolates perturbation transfer as the remaining empirical calculation.',
      technical: 'Shows how identifying homogeneous parent collapse with the child FLRW beginning supplies Penrose\'s low-Weyl boundary condition at background order, and isolates perturbation transfer as the remaining observational test.',
    },
  },
  ri2: {
    label: 'RI II',
    title: 'Junction Conditions for the Reciprocal Interior',
    page: 'junctions',
    prerequisite: 'ri1',
    meta: { technical: 'early technical paper · Codex (OpenAI)' },
    summaries: {
      technical: 'Synthesizes the timelike, null, thermodynamic, and dynamical junction calculations, separating exact matches from conditional reconstructions and fixing the requirements for a complete throat geometry.',
    },
  },
  nullOptics: {
    label: 'AI VI',
    title: 'Null Optics of the Reciprocal Interior',
    note: 'null_optics_of_the_reciprocal_interior',
    prerequisite: 'ri1',
    meta: { technical: 'optical calculation · Codex (OpenAI)' },
    summaries: {
      technical: 'Derives the interior frequency, wavelength, intensity, and temperature transfer laws; isolates the missing radial event map; and tests the first null-junction condition.',
    },
  },
  throatClock: {
    label: 'AI X',
    title: 'Dynamic Throat Kinematics and the Cosmological Clock',
    note: 'dynamic_throat_kinematics_and_the_cosmological_clock',
    prerequisiteLink: {
      label: 'archived null-junction calculation',
      href: noteHref('null_horizon_matching_of_the_reciprocal_interior'),
    },
    meta: { technical: 'dynamical reconstruction · Codex (OpenAI)' },
    summaries: {
      technical: 'Converts a moving null-boundary history into Alice\'s expansion and acceleration, reconstructs the boundary required by the observed cosmological epochs, and defines present-day targets for a parent horizon-growth calculation.',
    },
  },
  fullHistoryTest: {
    label: 'Negative result',
    title: 'Full-History Test of the Collapse-Cohort Shell Clock',
    note: 'full_history_test_of_the_collapse_cohort_shell_clock',
    prerequisite: 'gd2',
    meta: { technical: 'collapse-cohort test · Codex (OpenAI)' },
    summaries: {
      technical: 'The simplest unit-clock parent→child synchronization, tested against the full compensated collapse history: both endpoints reproduce, but the intermediate regime demands unphysical pressure, so the clock is rejected — the framework declining to fit the desired cosmology rather than tuning to it.',
    },
  },
};

export const COLLECTIONS = {
  review: {
    headingId: 'review-packet-title',
    title: 'Documents in the Packet',
    summary: 'Four documents, ordered from the foundational proposal to the observational prediction.',
    documentIds: ['gd1', 'ri1', 'involution', 'evolvingGDagger'],
  },
  core: {
    headingId: 'publications-title',
    title: 'Publications',
    summary: 'The theory and core publications.',
    summaryKey: 'publications',
    documentIds: ['gd1', 'ri1', 'involution', 'conformalFormationMap', 'pressureRobustness', 'perturbedFormationMap', 'pressureGradientTheorem', 'tolmanVIIAmplitude', 'level3Completion', 'level4Dissipative', 'trappingHorizonPair', 'trappingPairLedger', 'conformalDictionary', 'matureGammaDynamics', 'level5CreaseSetup', 'level5RotationSummary', 'parameterCascade', 'gd2', 'gd3'],
  },
  predictionTrack: {
    headingId: 'predictions-title',
    title: 'Predictions',
    summary: 'Observable predictions of the theory.',
    summaryKey: 'publications',
    documentIds: ['note3', 'evolvingGDagger', 'highZTest'],
  },
};

const resolvePrerequisite = document => {
  if (document.prerequisiteLink) return document.prerequisiteLink;
  if (!document.prerequisite) return null;
  const prerequisite = DOCUMENTS[document.prerequisite];
  return {
    label: prerequisite.label,
    href: route(prerequisite),
  };
};

export const getCollection = name => {
  const collection = COLLECTIONS[name];
  if (!collection) throw new Error(`Unknown publication collection: ${name}`);

  const summaryKey = collection.summaryKey || name;
  return {
    ...collection,
    hasIntro: Boolean(collection.introHtml),
    documents: collection.documentIds.map(id => {
      const document = DOCUMENTS[id];
      return {
        id,
        label: document.label,
        title: document.title,
        href: route(document),
        summary: document.summaries[summaryKey],
        meta: document.meta[summaryKey],
        startHere: Boolean(document.startHere),
        prerequisite: resolvePrerequisite(document),
      };
    }),
  };
};

export const getDocumentLink = id => {
  const document = DOCUMENTS[id];
  if (!document) throw new Error(`Unknown publication document: ${id}`);
  return {
    title: document.title,
    href: route(document),
  };
};
