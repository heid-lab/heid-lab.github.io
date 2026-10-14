// The team roster, plus the PI and alumni. This is the only file you edit to
// add, remove, or reorder people.
//
// Member fields:
//   name      Full name (heading).
//   role      The line under the name (e.g. "Postdoc · ESPRIT Fellow").
//   group     Which filter group they belong to: 'postdoc' | 'phd' | 'project'.
//   photo     Filename in imgs/team_members/ (omit to show the initials fallback).
//   avatar    Optional crop tweak class suffix: 'high' | 'low' | 'top' | 'zoom'
//             | 'zoom-sm' (maps to team-card-avatar--<suffix>). Omit for default.
//   colbreak  Set true to force a masonry column break before this card
//             (was class team-card--colbreak).
//   bio       One or more paragraphs (each an entry in the array). May contain
//             HTML. Omit / empty for a placeholder.
//   links     Social links: any of github, linkedin, scholar (URLs). Omit to hide.
//   photoTodo Optional note kept as an HTML comment where the photo would go
//             (e.g. the "TODO: add …" markers from the old markup).

export type Group = 'postdoc' | 'phd' | 'project';

export interface Links {
  github?: string;
  linkedin?: string;
  scholar?: string;
}

export interface Member {
  name: string;
  role: string;
  group: Group;
  photo?: string;
  avatar?: 'high' | 'low' | 'top' | 'zoom' | 'zoom-sm';
  colbreak?: boolean;
  bio?: string[];
  links?: Links;
  photoTodo?: string;
}

export const members: Member[] = [
  // ── Postdocs ──────────────────────────────────────────────────────────────
  {
    name: 'Johannes Karwounopoulos',
    role: 'Postdoc · ESPRIT Fellow',
    group: 'postdoc',
    photo: 'johannes-karwounopoulos.jpg',
    avatar: 'high',
    bio: [
      "Johannes Karwounopoulos studied Chemistry at the University of Stuttgart in Germany. After an internship in France and a master's thesis in bioinformatics, he moved to Vienna to pursue a Ph.D. at the University of Vienna under the supervision of Prof. Stefan Boresch. His doctoral research combined classical force fields with machine learning potentials to study the binding affinities of protein–ligand complexes. Following his Ph.D., Johannes joined the British biotech company Exscientia, now part of Recursion, where he worked in the Drug Discovery team developing novel methods for calculating binding free energies. He later returned to academia as a postdoctoral researcher in the Heid Lab, focusing on graph neural networks. He now holds an FWF ESPRIT fellowship, through which he pursues his own research on how machine-learned potentials can improve free-energy predictions.",
    ],
    links: {
      github: 'https://github.com/JohannesKarwou',
      linkedin: 'https://www.linkedin.com/in/johannes-karwounopoulos',
      scholar: 'https://scholar.google.com/citations?user=UzLY3pQAAAAJ&hl=en&oi=sra',
    },
  },
  {
    name: 'Jonathan Zheng',
    role: 'Postdoc · ERC project',
    group: 'postdoc',
    photo: 'jonathan-zheng.jpg',
    avatar: 'low',
    bio: [
      "Jonathan Zheng is a postdoctoral researcher in the Heid Lab. He graduated with a B.S. from the University of Virginia in 2020 and a Ph.D. from the Massachusetts Institute of Technology in 2026. During his Ph.D., Jonathan studied acid–base and ionization phenomena, focusing on the intersection of computational chemistry, cheminformatics, and data science. Currently, Jonathan is working on the ERC project for modeling enzymatic reactions. He is also continuing to study solvation effects for ionizable compounds. Outside of research, Jonathan enjoys developing video games, reading science fiction and fantasy books, listening to and making music, and eating tasty food from around the world.",
    ],
    links: {
      github: 'https://github.com/jonwzheng',
      linkedin: 'https://www.linkedin.com/in/jonwzheng/',
      scholar: 'https://scholar.google.com/citations?user=lVcULZwAAAAJ&hl=en',
    },
  },

  // ── Ph.D. students ──────────────────────────────────────────────────────────
  {
    name: 'Jasper De Landsheere',
    role: 'Ph.D. Student · ERC project',
    group: 'phd',
    photo: 'jasper-de-landsheere.jpg',
    avatar: 'top',
    bio: [
      'Jasper De Landsheere is a Ph.D. student working on the ERC-funded project “Deep learning of chemical reactions”. He received his master\'s degree in Data Science from TU Wien in 2025. He also holds a bachelor\'s and a master\'s degree in Bioscience Engineering Technology from Ghent University. His research focuses on developing new deep learning architectures for learning over chemical reactions.',
    ],
    links: {
      github: 'https://github.com/JasperDeLandsheere',
      linkedin: 'https://www.linkedin.com/in/jasper-de-landsheere-3b0807250/',
      scholar: 'https://scholar.google.com/citations?user=Xjq3TS4AAAAJ&hl=en',
    },
  },
  {
    name: 'Leonard Galustian',
    role: 'Ph.D. Student',
    group: 'phd',
    photo: 'leonard-galustian.jpg',
    bio: [
      'Leonard Galustian studied Computer Engineering and Data Science at TU Wien. His research interests lie at the intersection of computational chemistry and machine learning. Before joining the Heid Lab as a Ph.D. student, he worked on interdisciplinary projects as a machine learning scientist, most recently in the Department of Geosciences and the Machine Learning Research Unit at TU Wien, as well as in Neuroimaging Labs at the Medical University of Vienna.',
    ],
    links: {
      github: 'https://github.com/galustian',
      linkedin: 'https://www.linkedin.com/in/leonard-galustian/',
      scholar: 'https://scholar.google.com/citations?user=K06liZ4AAAAJ&hl=en',
    },
  },
  {
    name: 'Charlotte Gerhaher',
    role: 'Ph.D. Student · DC Computational Sustainability',
    group: 'phd',
    photo: 'charlotte-gerhaher.jpg',
    avatar: 'zoom-sm',
    bio: [
      'Charlotte Gerhaher joined the lab in May 2025 as part of the Doctoral College on Computational Sustainability. She got a B.Sc. in Bioinformatics from TU Munich and an M.Sc. in Computer Science from the University of Oxford, where she worked on generative modeling for brain data synthesis. Before joining the lab, she also gained research experience in proteomics at the Max Planck Institute of Biochemistry. Outside of the lab, she enjoys knitting and (wine) hiking.',
    ],
    links: {
      github: 'https://github.com/anna-charlotte',
      linkedin: 'https://www.linkedin.com/in/charlottegerhaher/',
      scholar: 'https://scholar.google.com/citations?user=1yf4DQQAAAAJ&hl=en',
    },
  },
  {
    name: 'Synnöve Lemke',
    role: 'Ph.D. Student · Shared doctoral researcher',
    group: 'phd',
    photo: 'synnoeve-lemke.jpeg',
    avatar: 'zoom',
    bio: [
      'Synnöve Lemke is a shared doctoral researcher working at the interface of analytical chemistry and machine learning. Her research focuses on breathomics for the early detection of lung cancer, combining comprehensive two-dimensional gas chromatography–mass spectrometry (GC×GC–MS) with advanced pattern recognition methods, including convolutional neural networks (CNNs). Through her work, she aims to advance non-invasive diagnostic approaches and contribute to interdisciplinary, data-driven solutions in healthcare.',
      "Synnöve holds a B.Sc. in Biochemistry from the University of Greifswald and an M.Sc. in Chemical Biology from Friedrich Schiller University Jena. During her master's studies, she completed a one-year Erasmus research internship at the University of Vienna.",
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/synnoeve-lemke/',
    },
  },
  {
    name: 'Konstantin Mark',
    role: 'Ph.D. Student',
    group: 'phd',
    photo: 'konstantin-mark.jpg',
    avatar: 'high',
    colbreak: true,
    bio: [
      "Konstantin Alexander Mark is a doctoral researcher working on the mathematical and methodological foundations of generative machine learning for chemical reactions. His research focuses on probabilistic models that generate molecular geometries and reactive structures, particularly flow matching and related stochastic approaches. He investigates how these models can be made more efficient, controllable, and consistent with physical and chemical constraints. He is especially interested in transition-state generation, guided sampling, Schrödinger bridges, and the mathematical principles underlying generative processes. In this role, he helps connect the group's chemical applications to developments in generative modeling, probability theory, and scientific machine learning. In the group, he brings a strongly mathematics-driven perspective to projects at the interface of machine learning, reaction modeling, and computational chemistry.",
      'Before starting his doctoral research, he studied Technical Mathematics at TU Wien, specializing in functional analysis, numerics, and optimization.',
    ],
    links: {
      github: 'https://github.com/MarkKon',
      linkedin: 'https://www.linkedin.com/in/konstantin-m-1830a8120/',
      scholar: 'https://scholar.google.com/citations?user=h9lYVCQAAAAJ&hl=en',
    },
  },
  {
    name: 'Leon Ganser',
    role: 'Ph.D. Student · Shared with Katharina Schröder',
    group: 'phd',
    photoTodo: 'add imgs/team_members/leon-ganser.jpg',
    bio: [
      'Leon Ganser is a Ph.D. candidate from Germany working under the shared supervision of Katharina Schröder and Esther Heid. He obtained his M.Sc. in Chemistry from the University of Regensburg, where his research focused on photocatalytic transformations. His current doctoral research lies at the interface of asymmetric organocatalysis, high-throughput experimentation, and data-driven reaction development. In particular, he works on the rational design of experimental datasets for asymmetric organocatalytic reactions, with the aim of generating high-quality, machine-learning-ready data for reaction prediction, optimization, and mechanistic insight. His research combines synthetic organic chemistry with automated experimentation and computational approaches to better understand and navigate complex reaction spaces.',
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/leon-ganser-420154313',
      scholar: 'https://scholar.google.com/citations?user=tzdHQbEAAAAJ&hl=en',
    },
  },
  {
    name: 'Maximilian P.-P. Kovar',
    role: 'Ph.D. Student · DOC Fellow',
    group: 'phd',
    photo: 'maximilian-kovar.jpg',
    avatar: 'high',
    bio: [
      "Maximilian P.-P. Kovar completed his master's thesis in 2025 as part of the lab and returned as a doctoral researcher in 2026. Within his DOC fellowship of the Austrian Academy of Sciences, he investigates the predictability of chemical reactions using carefully selected representative reactions computed with robust high-throughput quantum-chemical workflows. His work focuses on how chemical reactions can be described reliably, calculated systematically, and represented in a way that is useful for machine learning. He is especially interested in dataset impact, chemical plausibility, reaction energetics, and the reliable prediction of reactive processes. He helps connect the group's methodological and machine-learning efforts to the underlying chemistry. He brings a chemistry-driven perspective to projects at the interface of quantum chemistry, reaction modeling, and molecular simulations.",
      'Before starting his Ph.D., he studied Chemistry at the University of Vienna and Chemistry and Technology of Materials at TU Wien.',
    ],
    links: {
      github: 'https://github.com/M-P-P-K',
      linkedin: 'https://www.linkedin.com/in/maximilian-kovar/',
      scholar: 'https://scholar.google.com/citations?user=hfF4RLYAAAAJ&hl=en',
    },
  },

  // ── Project students ──────────────────────────────────────────────────────
  {
    name: 'Anton Zamyatin',
    role: 'Student Assistant',
    group: 'project',
    photo: 'anton-zamyatin.jpg',
    bio: [
      "Anton Zamyatin is a research student working on machine learning for computational chemistry. He holds a bachelor's degree in Computer Science from TU Wien and is currently pursuing a master's degree in Computational Science and Engineering, focusing on mathematics and theoretical/computational chemistry.",
      'In the group, he co-developed ChemTorch, a framework for developing and evaluating machine learning models for chemical reactions. He has also worked on transition state search workflows and stereochemistry-aware graph representations for transition-state generation.',
      'His research interests include representation learning and generative modeling for molecular systems, with a particular interest in developing mathematically grounded machine learning methodology.',
    ],
    links: {
      github: 'https://github.com/tonyzamyatin',
      linkedin: 'https://www.linkedin.com/in/anton-zamyatin/',
      scholar: 'https://scholar.google.com/citations?user=TfWtFj4AAAAJ&hl=en',
    },
  },
  {
    name: 'Sebastian Pinter',
    role: 'M.Sc. thesis',
    group: 'project',
    photo: 'sebastian-pinter.jpg',
    avatar: 'high',
    bio: [
      "Sebastian Pinter is a master's student doing his master's thesis on generative modeling for enzyme engineering as part of the Heid Lab. He received his B.Sc. in Computer Science from TU Graz before moving to Vienna to study Data Science. His interest in computational chemistry and biology was sparked doing small projects such as modeling gene–disease interactions and comparative analysis of mitochondrial genomes of fungi during his studies. While he is not working on his master's thesis, he enjoys playing the classical guitar, developing video games, and doing martial arts.",
    ],
  },
  {
    name: 'Albert Lehninger',
    role: 'B.Sc. thesis',
    group: 'project',
    photoTodo: 'add imgs/team_members/albert-lehninger.jpg',
    bio: [
      'Albert studies Computer Science at TU Wien and joined the Heid Lab for his bachelor\'s thesis as part of the AI-NOSE project.',
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/albert-lehninger-b142952a0/',
    },
  },
];

// Group headings shown above each section, in display order.
export const groupSections: { group: Group; id: string; heading: string }[] = [
  { group: 'postdoc', id: 'grp-postdoc', heading: 'Postdoctoral Researchers' },
  { group: 'phd', id: 'grp-phd', heading: 'Ph.D. Students' },
  { group: 'project', id: 'grp-project', heading: 'Project Students' },
];

// Alumni, grouped by the year each person left (newest first). Reuses the
// awards/award-year timeline styling. `note` is optional HTML shown after the
// name (e.g. affiliation).
export const alumni: { year: string; people: { name: string; note: string }[] }[] = [
  {
    year: '2026',
    people: [
      { name: 'Christoph Kloesch', note: 'Internship, University of Vienna' },
      { name: 'Philip Kamper', note: 'B.Sc. thesis, TU Wien' },
      { name: 'Stephanie Gstoettenmayr', note: 'M.Sc. thesis, TU Wien' },
      { name: 'Giulia Giugliano', note: 'Visiting Ph.D. student from the University of Bologna' },
    ],
  },
  {
    year: '2025',
    people: [
      { name: 'Hannah Teis', note: 'B.Sc. thesis, TU Wien' },
      { name: 'Benjamin Zeller', note: 'B.Sc. thesis, TU Wien' },
      { name: 'Marion Sappl', note: 'Visiting Ph.D. student from the University of Vienna' },
    ],
  },
];

// Turn a name into a URL-anchor slug (e.g. "Leon Ganser" → "leon-ganser").
// Used as the per-person card id on the team page so other pages can deep-link
// straight to someone (e.g. /team#jonathan-zheng).
export function slug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining diacritical marks (o-umlaut -> o, e-acute -> e)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// The crop tweak a person's photo needs, looked up by name. Other pages that
// show the same headshots (e.g. the grant pages) reuse this so a crop fixed on
// the team page is fixed everywhere. Returns undefined for the default crop.
export function avatarCrop(name: string): Member['avatar'] {
  return members.find((m) => m.name === name)?.avatar;
}

// Compute initials from a name for the photo fallback (e.g. "Leon Ganser" → "LG").
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
