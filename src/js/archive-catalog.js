import { getDocumentLink } from './project-catalog.js';

const note = (title, slug) => ({ title, href: `note.html?src=${slug}` });
const page = (title, slug) => ({ title, href: `${slug}.html` });
const document = id => ({ document: id });

const GROUPS = [
  {
    title: 'Project guides and context',
    items: [
      note('A Note to Reviewers', 'review_packet_introduction'),
      note('AI Collaborator Onboarding and Review Protocol', 'ai_collaborator_onboarding'),
      note('CSBHI Cosmological Glossary', 'cosmological_glossary'),
      note('What Remains Mathematically Illegible', 'open_questions'),
      note('Geometric Duality Research Roadmap', 'gd_research_roadmap'),
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
      document('gd2'),
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
      document('marginalityClock'),
      document('trappingEnthalpy'),
      document('lowTorsionBranch'),
      note('Matter Completion and the Self-Consistent MeV Birth Benchmark', 'matter_completion_and_mev_birth_benchmark'),
      note('Next Steps for the Collapse-Cohort Horizon Map', 'next_steps_for_the_collapse_cohort_horizon_map'),
    ],
  },
  {
    title: 'Weyl curvature, entropy, and Penrose',
    items: [
      document('wchFixedPoint'),
      document('weylHypothesis'),
      document('crossover'),
      document('entropy'),
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

export const getArchive = () => ({
  groups: GROUPS.map(group => ({
    ...group,
    items: group.items.map(resolveItem),
  })),
});
