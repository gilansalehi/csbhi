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
      publications: 'Proves \\(a=1/r\\) is the unique nontrivial scale-free, horizon-fixing involution — the reciprocal map is forced, not chosen.',
    },
  },
  evolvingGDagger: {
    label: 'Prediction I',
    title: 'The Evolving Galactic Acceleration-Scale Correspondence',
    note: 'evolving_g_dagger_derivation',
    prerequisite: 'involution',
    meta: { review: 'observational prediction · stated in advance', publications: 'observational prediction' },
    summaries: {
      review: 'Symmetry fixes the square-root mixing law; identifying its global scale with the contemporaneous cosmological horizon gives \\(g_\\dagger(z)/g_\\dagger(0)=H(z)/H_0\\). A fixed scale predicts a flat ratio; this correspondence predicts a rising one. Current intermediate-redshift evidence is compatible with that rise.',
      publications: 'The reciprocal ansatz applied to galaxies: the acceleration scale tracks the contemporaneous horizon, giving the coefficient-free prediction \\(g_\\dagger(z)/g_\\dagger(0)=H(z)/H_0\\) — rising, where MOND is flat. The first intermediate-redshift data favor the rise.',
    },
  },
  wchFixedPoint: {
    label: 'Result II',
    title: 'The Weyl Curvature Hypothesis as a Fixed Point',
    note: 'recursive_bhc_and_the_weyl_curvature_hypothesis',
    prerequisite: 'gd1',
    meta: { publications: 'cosmological result' },
    summaries: {
      publications: 'The low-Weyl beginning as a consequence of formation: smooth collapse gives a Weyl-free child, so Penrose\'s condition is a fixed point of the succession rather than a fine-tuning — and the entropy arrow follows without information loss.',
    },
  },
  gd2: {
    label: 'GD II',
    title: 'Geometric Duality II: Cosmological Succession and the Horizon Map',
    note: 'gd2_collapse_cohort_horizon_map_outline',
    prerequisite: 'wchFixedPoint',
    meta: { publications: 'working outline' },
    summaries: {
      publications: 'The forthcoming primary-author construction of the parent-to-child geometry: the collapse-cohort horizon map that carries a black-hole interior into the successor aeon, grounding the low-Weyl beginning and the regular crossover.',
    },
  },
  note3: {
    label: 'Note III',
    title: 'Self-Dual Homogeneous Derivation of the Square-Root Law',
    note: 'gd_self_dual_homogeneous_derivation_of_the_square_root_law',
    prerequisite: 'gd2',
    meta: { publications: 'draft note' },
    summaries: {
      publications: 'A theorem-style bridge to the galaxy problem. Shows that a scale-free, self-dual mixing law between local Newtonian acceleration \\(g_N\\) and the global throat scale \\(cH\\) naturally selects \\(g_{\\rm mix}\\sim\\sqrt{g_NcH}\\).',
    },
  },
  gd3: {
    label: 'GD III',
    title: 'Geometric Duality III: Throat Curvature and the Galaxy Acceleration Law',
    note: 'gd3_throat_curvature_and_galaxy_law_outline',
    prerequisite: 'evolvingGDagger',
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
      publications: 'A later synthesis paper connecting GD to horizon thermodynamics, emergent-gravity arguments, and the work of Verlinde, Padmanabhan, Milgrom, and McGaugh. The goal is to show how these approaches may be partial views of the same throat-centered geometry.',
    },
  },
  weylHypothesis: {
    label: 'AI XVII',
    title: 'The Weyl Curvature Hypothesis at Background Order',
    note: 'weyl_curvature_hypothesis_reciprocal_interior',
    prerequisite: 'gd1',
    meta: { technical: 'technical note · Codex (OpenAI)' },
    summaries: {
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
};

export const COLLECTIONS = {
  review: {
    headingId: 'review-packet-title',
    title: 'Documents in the Packet',
    summary: 'Four documents, ordered from the foundational proposal to the observational prediction.',
    documentIds: ['gd1', 'ri1', 'involution', 'evolvingGDagger'],
  },
  publications: {
    headingId: 'publications-title',
    title: 'Publications',
    summary: 'Current and forthcoming papers in the series.',
    documentIds: ['gd1', 'ri1', 'involution', 'evolvingGDagger', 'wchFixedPoint', 'gd2', 'gd3', 'thermodynamics'],
  },

  technical: {
    headingId: 'ai-notes-title',
    title: 'Reciprocal Interior Technical Series',
    summary: 'The principal field-equation, junction, optical, dynamical, and thermodynamic results.',
    documentIds: ['ri1', 'weylHypothesis', 'ri2', 'nullOptics', 'throatClock'],
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
        summary: document.summaries[name],
        meta: document.meta[name],
        startHere: Boolean(document.startHere),
        prerequisite: resolvePrerequisite(document),
      };
    }),
  };
};

export const publicationLinks = ['gd1', 'ri1', 'ri2'].map(id => {
  const document = DOCUMENTS[id];
  return {
    id,
    name: document.label,
    path: route(document),
  };
});
