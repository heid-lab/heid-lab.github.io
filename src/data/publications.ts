// Publications, grouped by year (newest year first, newest paper first within
// a year). To add a paper: drop a new entry at the top of the right year's
// `items` array — or add a new year block. This is the only file you edit.
//
// Fields:
//   meta     Journal / venue line shown above the title (e.g. "Digital Discovery 4, 3208 · 2025").
//   preprint Set true to show the yellow "Preprint" tag before the meta.
//   title    Paper title (plain text; may include sub/sup via titleHtml instead).
//   titleHtml Optional: use INSTEAD of `title` when the title needs markup
//            (e.g. subscripts like SrTiO<sub>3</sub>). Rendered as raw HTML.
//   href     Link to the paper / DOI.
//   authors  Author list as raw HTML — wrap the group's names in <strong>…</strong>
//            exactly as before (e.g. "<strong>E. Heid</strong>").

export interface Publication {
  meta: string;
  preprint?: boolean;
  title?: string;
  titleHtml?: string;
  href: string;
  authors: string;
}

export interface PublicationYear {
  year: string;
  items: Publication[];
}

export const publications: PublicationYear[] = [
  {
    year: '2026',
    items: [
      {
        preprint: true,
        meta: 'ChemRxiv · 2026',
        title: 'Prediction of triplet geometries across chemical space with flow-matching based machine learning',
        href: 'https://chemrxiv.org/doi/full/10.26434/chemrxiv.15003682',
        authors: 'G. Giugliano, L. Galustian, M. Calvaresi, F. Zerbetto, <strong>E. Heid</strong>',
      },
      {
        preprint: true,
        meta: 'ChemRxiv · 2026',
        title: 'moTSart: Accelerating Automated Transition State Search with Generative Models in a Low-Data Regime',
        href: 'https://chemrxiv.org/doi/full/10.26434/chemrxiv.15002135',
        authors: 'L. Galustian, J. Karwounopoulos, T. Demuth, J. De Landsheere, K. Mark, M. P.-P. Kovar, A. Zamyatin, D. Svatunek, <strong>E. Heid</strong>',
      },
      {
        preprint: true,
        meta: 'ChemRxiv · 2026',
        title: 'GRACE-OFF: A machine-learned interatomic potential for organic liquids using the GRACE architecture',
        href: 'https://chemrxiv.org/doi/full/10.26434/chemrxiv.15001529',
        authors: 'A. K. Picha, J. Karwounopoulos, L. C. Erhard, S. Boresch, <strong>E. Heid</strong>',
      },
      {
        preprint: true,
        meta: 'ChemRxiv · 2026',
        title: 'Bridging CGR Representations and Language Models for Reaction Property Prediction',
        href: 'https://chemrxiv.org/doi/full/10.26434/chemrxiv.15000926',
        authors: 'G. Sulpizio, C. Gerhaher, <strong>E. Heid</strong>, K. Jorner',
      },
      {
        meta: 'Chemical Physics Reviews · 7, 021310 · 2026',
        title: 'Toward On-the-Fly Prediction of Reaction Energetics for High-Throughput Screening',
        href: 'https://doi.org/10.1063/5.0321836',
        authors: 'J. De Landsheere, M. P.-P. Kovar, K. Mark, L. Ganser, L. Galustian, J. Karwounopoulos, C. Gerhaher, <strong>E. Heid</strong>',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 66, 2434 · 2026',
        title: 'ChemTorch: A Deep Learning Framework for Benchmarking and Developing Chemical Reaction Property Prediction Models',
        href: 'https://doi.org/10.1021/acs.jcim.5c02645',
        authors: 'J. De Landsheere, A. Zamyatin, J. Karwounopoulos, <strong>E. Heid</strong>',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        preprint: true,
        meta: 'arXiv:2509.01543 · 2025',
        title: 'Feynman-Kac-Flow: Inference Steering of Conditional Flow Matching to an Energy-Tilted Posterior',
        href: 'https://doi.org/10.48550/arXiv.2509.01543',
        authors: 'K. Mark, L. Galustian, M. P.-P. Kovar, <strong>E. Heid</strong>',
      },
      {
        meta: 'Digital Discovery 4, 3208 · 2025',
        title: 'Graph-based prediction of reaction barrier heights with on-the-fly prediction of transition states',
        href: 'https://doi.org/10.1039/D5DD00240K',
        authors: 'J. Karwounopoulos, J. De Landsheere, L. Galustian, T. Jechtl, <strong>E. Heid</strong>',
      },
      {
        meta: 'Digital Discovery 4, 3492 · 2025',
        title: 'GoFlow: Efficient Transition State Geometry Prediction with Flow Matching and E(3)-Equivariant Neural Networks',
        href: 'https://doi.org/10.1039/D5DD00283D',
        authors: 'L. Galustian, K. Mark, J. Karwounopoulos, M. P.-P. Kovar, <strong>E. Heid</strong>',
      },
      {
        meta: 'The Journal of Chemical Physics 163, 104102 · 2025',
        title: 'The density isobar of water: A comparative study of vdW-DF-cx and RPBE-D3',
        href: 'https://doi.org/10.1063/5.0278026',
        authors: 'N. Bučková, N. Unglert, J. Schörghuber, <strong>E. Heid</strong>, K. Berland, G. K. H. Madsen',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 27, 9169 · 2025',
        title: 'From flat to stepped: Active learning frameworks for investigating local structure at copper-water interfaces',
        href: 'https://doi.org/10.1039/D5CP00396B',
        authors: 'J. Schörghuber, N. Bučková, <strong>E. Heid</strong>, G. K. H. Madsen',
      },
      {
        meta: 'Chemical Engineering Science 319, 122170 · 2025',
        title: 'A comprehensive approach to incorporating intermolecular dispersion into the openCOSMO-RS model. Part 2: Atomic polarizabilities',
        href: 'https://doi.org/10.1016/j.ces.2025.122170',
        authors: 'D. Grigorash, S. Müller, <strong>E. Heid</strong>, F. Neese, D. Liakos, C. Riplinger, M. García-Ratés, P. Paricaud, E. H. Stenby, I. Smirnova, W. Yan',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        meta: 'Digital Discovery 3, 2137 · 2024',
        titleHtml: 'Exploring Inhomogeneous Surfaces: Ti-rich SrTiO<sub>3</sub>(110) Reconstructions via Active Learning',
        href: 'https://doi.org/10.1039/D4DD00231H',
        authors: 'R. Wanzenböck, <strong>E. Heid</strong>, M. Riva, G. Franceschi, A. M. Imre, J. Carrete, U. Diebold, G. K. H. Madsen',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 64, 6377 · 2024',
        title: 'Spatially resolved uncertainties for machine learning potentials',
        href: 'https://doi.org/10.1021/acs.jcim.4c00904',
        authors: '<strong>E. Heid</strong>, J. Schörghuber, R. Wanzenböck, G. K. H. Madsen',
      },
      {
        meta: 'Machine Learning: Science and Technology 5, 035079 · 2024',
        title: 'LoGAN: Local generative adversarial network for novel structure prediction',
        href: 'https://doi.org/10.1088/2632-2153/ad7a4d',
        authors: 'P. Kovács, <strong>E. Heid</strong>, G. K. H. Madsen',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        meta: 'Journal of Chemical Information and Modeling 64, 9 · 2023',
        title: 'ChemProp: A Machine Learning Package for Chemical Property Prediction',
        href: 'https://doi.org/10.1021/acs.jcim.3c01250',
        authors: '<strong>E. Heid</strong>, K. P. Greenman, Y. Chung, S.-C. Li, D. E. Graff, F. H. Vermeire, H. Wu, W. H. Green, C. J. McGill',
      },
      {
        meta: 'Chemical Science 14, 14229 · 2023',
        title: 'EnzymeMap: Curation, validation and data-driven prediction of enzymatic reactions',
        href: 'https://doi.org/10.1039/d3sc02048g',
        authors: '<strong>E. Heid</strong>, D. Probst, W. H. Green, G. K. H. Madsen',
      },
      {
        meta: 'The Journal of Chemical Physics 158, 204801 · 2023',
        title: 'Deep Ensembles vs. Committees for Uncertainty Estimation in Neural-Network Force Fields: Comparison and Application to Active Learning',
        href: 'https://doi.org/10.1063/5.0146905',
        authors: 'J. Carrete, J. Montes-Campos, R. Wanzenböck, <strong>E. Heid</strong>, G. K. H. Madsen',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 63, 4012 · 2023',
        title: 'Characterizing Uncertainty in Machine Learning for Chemistry',
        href: 'https://doi.org/10.1021/acs.jcim.3c00373',
        authors: '<strong>E. Heid</strong>, C. J. McGill, F. H. Vermeire, W. H. Green',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        meta: 'Journal of the American Chemical Society 144, 22599 · 2022',
        title: 'Machine Learning-Guided Discovery of New Electrochemical Reactions',
        href: 'https://doi.org/10.1021/jacs.2c08997',
        authors: 'A. Zahrt, Y. Mo, K. Nandiwale, R. Shprints, <strong>E. Heid</strong>, K. F. Jensen',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 62, 2101 · 2022',
        title: 'Machine Learning of Reaction Properties via Learned Representations of the Condensed Graph of Reaction',
        href: 'https://doi.org/10.1021/acs.jcim.1c00975',
        authors: '<strong>E. Heid</strong>, W. H. Green',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 62, 1388 · 2022',
        title: 'On the Value of Using 3D Shape and Electrostatic Similarities in Deep Generative Methods',
        href: 'https://doi.org/10.1021/acs.jcim.1c01535',
        authors: 'G. Bolcato, <strong>E. Heid</strong>, J. Boström',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 24, 15776 · 2022',
        title: 'Collectivity in ionic liquids: A temperature dependent, polarizable molecular dynamics study',
        href: 'https://doi.org/10.1039/D2CP00898J',
        authors: 'A. Szabadi, P. Honegger, F. Schöfbeck, M. Sappl, <strong>E. Heid</strong>, O. Steinhauser, C. Schröder',
      },
      {
        meta: 'Chemical Science 13, 6039 · 2022',
        title: 'Similarity based enzymatic retrosynthesis',
        href: 'https://doi.org/10.1039/D2SC01588A',
        authors: 'K. Sankaranarayanan, <strong>E. Heid</strong>, C. W. Coley, D. Verma, W. H. Green, K. J. Jensen',
      },
      {
        meta: 'Journal of Chemical Information and Modeling 62, 16 · 2022',
        title: 'Influence of Template Size, Canonicalization, and Exclusivity for Retrosynthesis and Reaction Prediction Applications',
        href: 'https://doi.org/10.1021/acs.jcim.1c01192',
        authors: '<strong>E. Heid</strong>, J. Liu, A. Aude, W. H. Green',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        meta: 'Journal of Chemical Information and Modeling 61, 4949 · 2021',
        title: 'EHreact: Extended Hasse Diagrams for the Extraction and Scoring of Enzymatic Reaction Templates',
        href: 'https://doi.org/10.1021/acs.jcim.1c00921',
        authors: '<strong>E. Heid</strong>, S. Goldman, K. Sankaranarayanan, C. W. Coley, C. Flamm, W. H. Green',
      },
      {
        meta: 'The Journal of Chemical Physics 155, 074504 · 2021',
        title: 'Solvation of anthraquinone and TEMPO redox-active species in acetonitrile using a polarizable force field',
        href: 'https://doi.org/10.1063/5.0061891',
        authors: 'R. Berthin, A. Serva, K. G. Reeves, <strong>E. Heid</strong>, C. Schröder, M. Salanne',
      },
      {
        meta: 'Chemical Science 12, 2198 · 2021',
        title: 'Regio-selectivity prediction with a machine-learned reaction representation and on-the-fly quantum mechanical descriptors',
        href: 'https://doi.org/10.1039/D0SC04823B',
        authors: 'Y. Guan, C. W. Coley, H. Wu, D. Ranasinghe, <strong>E. Heid</strong>, T. J. Struble, L. Pattanaik, W. H. Green, K. F. Jensen',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 23, 1616 · 2021',
        title: 'The physical significance of the Kamlet–Taft π* parameter of ionic liquids',
        href: 'https://doi.org/10.1039/D0CP04989A',
        authors: 'N. Weiß, C. H. Schmidt, G. Thielemann, <strong>E. Heid</strong>, C. Schröder, S. Spange',
      },
    ],
  },
  {
    year: '2020',
    items: [
      {
        meta: 'The Journal of Chemical Physics 152, 094105 · 2020',
        title: 'Polarizable molecular dynamics simulations of ionic liquids: Influence of temperature control',
        href: 'https://doi.org/10.1063/1.5143746',
        authors: '<strong>E. Heid</strong>, S. Boresch, C. Schröder',
      },
      {
        meta: 'The Journal of Physical Chemistry Letters 11, 2165 · 2020',
        title: 'Understanding the nature of nuclear magnetic resonance relaxation by means of fast-field-cycling relaxometry and molecular dynamics simulations — The validity of relaxation models',
        href: 'https://doi.org/10.1021/acs.jpclett.0c00087',
        authors: 'P. Honegger, V. Overbeck, A. Strate, A. Appelhagen, M. Sappl, <strong>E. Heid</strong>, C. Schröder, R. Ludwig, O. Steinhauser',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 22, 18388 · 2020',
        title: 'Dielectric spectroscopy and time dependent Stokes shift: Two faces of the same coin?',
        href: 'https://doi.org/10.1039/D0CP02840A',
        authors: 'P. Honegger, <strong>E. Heid</strong>, C. Schröder, O. Steinhauser',
      },
      {
        meta: 'Annual Reports in Computational Chemistry 16, 93 · 2020',
        title: 'Computational solvation dynamics: Implementation, application, and validation',
        href: 'https://doi.org/10.1016/bs.arcc.2020.07.001',
        authors: 'C. Schröder, <strong>E. Heid</strong>',
      },
    ],
  },
  {
    year: '2019',
    items: [
      {
        meta: 'The Journal of Chemical Physics 150, 175102 · 2019',
        title: 'Computational spectroscopy of trehalose, sucrose, maltose, and glucose: A comprehensive study of TDSS, NQR, NOE, and DRS',
        href: 'https://doi.org/10.1063/1.5095058',
        authors: '<strong>E. Heid</strong>, P. Honegger, D. Braun, A. Szabadi, T. Stankovic, O. Steinhauser, C. Schröder',
      },
      {
        meta: 'Journal of Chemical Theory and Computation 15, 2460 · 2019',
        title: 'Toward prediction of electrostatic parameters for force fields that explicitly treat electronic polarization',
        href: 'https://doi.org/10.1021/acs.jctc.8b01289',
        authors: '<strong>E. Heid</strong>, M. Fleck, P. Chatterjee, C. Schröder, A. D. MacKerell, Jr.',
      },
      {
        meta: 'RSC Advances 9, 36982 · 2019',
        title: 'Changes in protein hydration dynamics by encapsulation or crowding of ubiquitin: strong correlation between time-dependent Stokes shift and intermolecular nuclear Overhauser effect',
        href: 'https://doi.org/10.1039/C9RA08008B',
        authors: 'P. Honegger, <strong>E. Heid</strong>, S. Schmode, C. Schröder, O. Steinhauser',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 21, 17703 · 2019',
        title: 'Solvation dynamics: Improved reproduction of the time-dependent Stokes shift with polarizable empirical force field chromophore models',
        href: 'https://doi.org/10.1039/C9CP03000J',
        authors: '<strong>E. Heid</strong>, S. Schmode, P. Chatterjee, A. D. MacKerell Jr, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 21, 4435 · 2019',
        title: 'Fundamental limitations of the time-dependent stokes shift for investigating protein hydration dynamics',
        href: 'https://doi.org/10.1039/c8cp07623e',
        authors: '<strong>E. Heid</strong>, D. Braun',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 21, 1023 · 2019',
        title: 'Polarizability in ionic liquid simulations causes hidden breakdown of linear response theory',
        href: 'https://doi.org/10.1039/C8CP06569A',
        authors: '<strong>E. Heid</strong>, C. Schröder',
      },
    ],
  },
  {
    year: '2018',
    items: [
      {
        meta: 'The Journal of Chemical Physics 149, 044302 · 2018',
        title: 'Additive polarizabilities of halides in ionic liquids and organic solvents',
        href: 'https://doi.org/10.1063/1.5043156',
        authors: '<strong>E. Heid</strong>, M. Heindl, P. Dienstl, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 20, 15106 · 2018',
        title: 'Langevin behavior of the dielectric decrement in ionic liquid water mixtures',
        href: 'https://doi.org/10.1039/C8CP02111B',
        authors: '<strong>E. Heid</strong>, B. Docampo-Alvarez, L. M. Varela, K. Prosenz, O. Steinhauser, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 20, 5246 · 2018',
        title: 'Solvation dynamics in polar solvents and imidazolium ionic liquids: failure of linear response approximations',
        href: 'https://doi.org/10.1039/C7CP07052G',
        authors: '<strong>E. Heid</strong>, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 20, 8554 · 2018',
        title: 'Evaluating excited state atomic polarizabilities of chromophores',
        href: 'https://doi.org/10.1039/C7CP08549D',
        authors: '<strong>E. Heid</strong>, P. A. Hunt, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 20, 10992 · 2018',
        title: 'Quantum mechanical determination of atomic polarizabilities of ionic liquids',
        href: 'https://doi.org/10.1039/C8CP01677A',
        authors: '<strong>E. Heid</strong>, A. Szabadi, C. Schröder',
      },
    ],
  },
  {
    year: '2017',
    items: [
      {
        meta: 'The Journal of Physical Chemistry B 121, 9639 · 2017',
        title: 'Effect of a tertiary butyl group on polar solvation dynamics in aqueous solution: a computational approach',
        href: 'https://doi.org/10.1021/acs.jpcb.7b05039',
        authors: '<strong>E. Heid</strong>, C. Schröder',
      },
      {
        meta: 'Journal of Hazardous Materials 340, 113 · 2017',
        title: 'Thioglycolate-based task-specific ionic liquids: Metal extraction abilities vs acute algal toxicity',
        href: 'https://doi.org/10.1016/j.jhazmat.2017.06.053',
        authors: 'S. Platzer, R. Leyma, S. Wolske, W. Kandioller, <strong>E. Heid</strong>, C. Schröder, M. Schagerl, R. Krachler, F. Jirsa, B. K. Keppler',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 19, 10940 · 2017',
        title: 'On the validity of linear response approximations regarding the solvation dynamics of polyatomic solutes',
        href: 'https://doi.org/10.1039/C6CP08575J',
        authors: '<strong>E. Heid</strong>, W. Moser, C. Schröder',
      },
    ],
  },
  {
    year: '2016',
    items: [
      {
        meta: 'The Journal of Chemical Physics 145, 164507 · 2016',
        title: 'Computational solvation dynamics of oxyquinolinium betaine linked to trehalose',
        href: 'https://doi.org/10.1063/1.4966189',
        authors: '<strong>E. Heid</strong>, C. Schröder',
      },
      {
        meta: 'The Journal of Chemical Physics 145, 164506 · 2016',
        title: 'The small impact of various partial charge distributions in ground and excited state on the computational Stokes shift of 1-methyl-6-oxyquinolinium betaine in diverse water models',
        href: 'https://doi.org/10.1063/1.4966147',
        authors: '<strong>E. Heid</strong>, S. Harringer, C. Schröder',
      },
      {
        meta: 'Physical Chemistry Chemical Physics 18, 1665 · 2016',
        title: 'Additive polarizabilities in ionic liquids',
        href: 'https://doi.org/10.1039/C5CP06595J',
        authors: 'C. E. S. Bernardes, K. Shimizu, J. N. C. Lopes, P. Marquetand, <strong>E. Heid</strong>, O. Steinhauser, C. Schröder',
      },
    ],
  },
];
