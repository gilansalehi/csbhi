import { getDocumentLink } from './project-catalog.js';

const note = (title, slug) => ({ label: 'Note', title, href: `note.html?src=${slug}` });
const page = (title, slug) => ({ label: 'Reference', title, href: `${slug}.html` });
const document = id => ({ document: id });

const READING_PATHS = [
  {
    id: 'main-theory',
    label: 'Core · 8 papers',
    title: 'The main theory',
    summary: 'The shortest route through the project: the reciprocal map, its field equations, the formation problem, the mature scale dynamics, and the observational programme.',
    items: [
      document('gd1'),
      document('ri1'),
      document('involution'),
      document('formationSynthesis'),
      document('matureGammaDynamics'),
      document('parameterCascade'),
      document('gd2'),
      document('gd3'),
    ],
  },
  {
    id: 'formation-throat',
    label: 'GD2 · Formation',
    title: 'Collapse and the formation throat',
    summary: 'How a collapsing star acquires a finite throat, a trapping-horizon pair, and the initial data of a child cosmology—from OS dust through pressure, dissipation, and rotation.',
    items: [
      document('formationSynthesis'),
      document('conformalFormationMap'),
      document('pressureGradientTheorem'),
      document('level3Completion'),
      document('level4Dissipative'),
      document('trappingHorizonPair'),
      document('level5RotationSummary'),
    ],
  },
  {
    id: 'reciprocal-interior',
    label: 'Foundations',
    title: 'The reciprocal interior',
    summary: 'Why \\(a=1/r\\), what Einstein’s equations say inside the reciprocal metric, and how \\(\\Gamma=a^2\\) carries the mature Friedmann history.',
    items: [
      document('gd1'),
      document('involution'),
      document('ri1'),
      note('The Reciprocal Interior: An Independent Verification', 'reciprocal_interior_independent_verification'),
      document('matureGammaDynamics'),
    ],
  },
  {
    id: 'weyl-succession',
    label: 'Penrose path',
    title: 'Weyl curvature and cosmological succession',
    summary: 'How a smooth background can remain almost—but not exactly—Weyl-free, how the residue scales, and what may pass from one cosmological generation to the next.',
    items: [
      document('wchFixedPoint'),
      document('weylHypothesis'),
      document('crossover'),
      note('The Child-Side Transfer Function: T(k)=1, and Its Three Corrections', 'child_side_transfer_function'),
      note('The Weyl-to-ζ Transfer: Background Hierarchy versus Inherited Substructure', 'weyl_to_zeta_transfer_across_collapse'),
    ],
  },
  {
    id: 'galaxy-acceleration',
    label: 'Galaxy path',
    title: 'The galactic acceleration scale',
    summary: 'How local/global self-duality selects the square-root acceleration law, why its scale may evolve with \\(H(z)\\), and how high-redshift galaxies can decide.',
    items: [
      document('note3'),
      document('evolvingGDagger'),
      document('highZTest'),
      document('gd3'),
    ],
  },
  {
    id: 'junctions-optics',
    label: 'Technical path',
    title: 'Junctions, horizons, and null optics',
    summary: 'What can be matched across the horizons, what cannot, and how null focusing and affine transfer supply the missing clock—including the synchronization that failed its full-history test.',
    items: [
      document('ri2'),
      document('nullOptics'),
      document('throatClock'),
      note('The Remaining Horizon Clock', 'remaining_horizon_clock_map'),
      document('fullHistoryTest'),
    ],
  },
  {
    id: 'constants-ledger',
    label: 'Parameter path',
    title: 'Constants and background bookkeeping',
    summary: 'Which cosmological quantities are independent, which descend from \\(R_{\\rm dS}\\) and the inherited ledger, and exactly where the derivation stops.',
    items: [
      page('CSBHI Constants & Cosmological Glossary', 'glossary'),
      document('parameterCascade'),
      document('matureGammaDynamics'),
      note('The Horizon Flow and Density Identity', 'horizon_flow_density_identity'),
    ],
  },
];

const GROUPS = [
  {
    title: 'Project guides and context',
    items: [
      note('CSBHI / Geometric Duality — A Compact Guide', 'csbhi_geometric_duality_compact_guide'),
      note('A Note to Reviewers', 'review_packet_introduction'),
      { title: 'Canonical Context for LLM Review', href: 'llms.txt' },
      page('CSBHI Constants & Cosmological Glossary', 'glossary'),
      note('What Remains Mathematically Illegible', 'open_questions'),
      note('Geometric Duality Research Roadmap', 'gd_research_roadmap'),
      document('formationSynthesis'),
      document('parameterCascade'),
      note('Black-Hole Cosmology: Lineage, Mechanisms, and CSBHI', 'black_hole_cosmology_lineage'),
    ],
  },
  {
    title: 'Reciprocal-interior foundations',
    items: [
      document('gd1'),
      document('ri1'),
      document('involution'),
      note('The Reciprocal Interior: An Independent Verification', 'reciprocal_interior_independent_verification'),
      note('The Inverse-Radius Interior and Alice\'s Probe Congruence', 'gd_inverse_radius_probe_congruence'),
      note('The Horizon Flow and Density Identity', 'horizon_flow_density_identity'),
      note('Painlevé–Gullstrand Flow from the 5D de Sitter Embedding', 'pg_flow_from_5d_desitter_embedding'),
      note('The Reciprocal Interior as Two-Dimensional Dilaton Gravity', 'reciprocal_interior_as_2d_dilaton_gravity'),
      note('The Reciprocal Scale Field and the Smooth-Throat Problem', 'reciprocal_scale_field'),
      note('Modular Self-Duality and the Reciprocal Symmetry', 'modular_self_duality_and_the_reciprocal_symmetry'),
      note('The Reciprocal Interior as a Conformal Crossover: A Comparison of Prior Geometries', 'reciprocal_interior_conformal_crossover'),
    ],
  },
  {
    title: 'Junction, throat, and optics calculations',
    items: [
      document('ri2'),
      document('nullOptics'),
      note('Null-Horizon Matching of the Reciprocal Interior', 'null_horizon_matching_of_the_reciprocal_interior'),
      note('The Exact Shell Identity and the Kottler Mass Condition for Alice\'s Interior', 'horizon_map_shell_identity_and_mass_growth'),
      note('Vacuum-Energy Cancellation at an FLRW–Kottler Junction', 'vacuum_energy_cancellation_at_a_kottler_junction'),
      note('Thermodynamic Accounting of the Transverse Junction', 'thermodynamic_accounting_of_the_transverse_junction'),
      document('throatClock'),
      note('The Hyperbolic Cosmological Clock', 'hyperbolic_cosmological_clock'),
      note('The Nonequilibrium Event Horizon and the CMB Clock', 'nonequilibrium_event_horizon_and_the_cmb_clock'),
      note('Recursive Kottler Horizons and the Galaxy Acceleration Scale', 'recursive_kottler_horizons_and_the_galaxy_scale'),
      note('The Remaining Horizon Clock', 'remaining_horizon_clock_map'),
      note('Horizon-Map Equation and Notation Audit', 'horizon_map_equation_and_notation_audit'),
    ],
  },
  {
    title: 'Collapse cohorts and the horizon map',
    items: [
      document('conformalFormationMap'),
      document('pressureRobustness'),
      document('perturbedFormationMap'),
      document('pressureGradientTheorem'),
      document('tolmanVIIAmplitude'),
      document('level3Completion'),
      document('level4Dissipative'),
      document('trappingHorizonPair'),
      document('trappingPairLedger'),
      document('conformalDictionary'),
      document('matureGammaDynamics'),
      document('level5CreaseSetup'),
      document('level5RotationSummary'),
      document('gd2'),
      note('Audit of the Oppenheimer–Snyder Formation Map', 'os_formation_conformal_map_audit'),
      note('Collapse Day and Present Day: The Infall-Cohort Worldsheet', 'collapse_day_present_day_cohort_worldsheet'),
      note('From Collapse Shells to a Child FLRW Patch', 'homogeneous_collapse_shell_map'),
      note('From Collapse to a Conformal Child Universe', 'collapse_reciprocal_interior_and_conformal_child'),
      note('Selecting the Parent Collapse Benchmark', 'collapse_benchmark_selection'),
      note('The Collapse-to-Child Boundary System', 'collapse_to_child_boundary_system'),
      note('The Shell Clock in a Compensated ΛLTB Collapse', 'shell_clock_benchmark_compensated_ltb'),
      note('Asymptotic Consistency of the Collapse-Cohort Map', 'asymptotic_consistency_of_the_collapse_cohort_map'),
      note('The Late Event-Horizon Tail of a Compensated ΛLTB Collapse', 'late_event_horizon_tail_compensated_ltblambda'),
      note('Optical Transfer Through a Matter-Filled Parent Collapse', 'optical_transfer_through_compensated_ltb_collapse'),
      document('fullHistoryTest'),
      note('Next Steps for the Collapse-Cohort Horizon Map', 'next_steps_for_the_collapse_cohort_horizon_map'),
    ],
  },
  {
    title: 'Weyl curvature, entropy, and Penrose',
    items: [
      document('wchFixedPoint'),
      document('weylHypothesis'),
      document('crossover'),
      note('Gravitational Entropy as the Thermodynamic Face of Conformal Scaling (historical isometric benchmark)', 'gravitational_entropy_and_conformal_scaling'),
      note('Alice\'s Curvature Ledger and the Weyl Curvature Hypothesis', 'alices_curvature_ledger_and_the_weyl_hypothesis'),
      note('The Child-Side Transfer Function: T(k)=1, and Its Three Corrections', 'child_side_transfer_function'),
      note('The Weyl-to-ζ Transfer: Background Hierarchy versus Inherited Substructure', 'weyl_to_zeta_transfer_across_collapse'),
      note('CSBHI and the Open Problems of Conformal Cyclic Cosmology', 'csbhi_and_ccc_open_problems'),
    ],
  },
  {
    title: 'Galaxy dynamics and observational tests',
    items: [
      document('note3'),
      document('evolvingGDagger'),
      document('highZTest'),
      document('gd3'),
    ],
  },
  {
    title: 'Future and superseded paths',
    items: [
      document('thermodynamics'),
      note('Geometric Duality II: The 5D de Sitter Throat', 'gd2_5d_de_sitter_throat_outline'),
    ],
  },
];

const resolveItem = item => item.document ? getDocumentLink(item.document) : item;

const resolveReadingPath = path => ({
  headingId: path.id,
  title: path.title,
  summary: path.summary,
  expanded: true,
  hasIntro: false,
  documents: path.items.map((item, index) => {
    const resolved = resolveItem(item);
    const summary = resolved.summary || '';
    const meta = resolved.meta || '';
    const prerequisite = resolved.prerequisite || null;
    return {
      ...resolved,
      id: resolved.id || `${path.id}-${index + 1}`,
      label: resolved.label || 'Note',
      summary,
      meta,
      hasSummary: Boolean(summary),
      hasMetaLine: Boolean(meta || resolved.startHere || prerequisite),
      startHere: Boolean(resolved.startHere),
      prerequisite,
    };
  }),
});

export const getReadingPath = id => {
  const path = READING_PATHS.find(candidate => candidate.id === id);
  if (!path) throw new Error(`Unknown reading path: ${id}`);
  return resolveReadingPath(path);
};

export const getArchive = () => ({
  readingPaths: READING_PATHS.map(path => ({
    ...path,
    href: `#${path.id}`,
    items: path.items.map(resolveItem),
  })),
  groups: GROUPS.map(group => ({
    ...group,
    items: group.items.map(resolveItem),
  })),
});
