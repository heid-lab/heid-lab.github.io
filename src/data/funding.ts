// Funding listed on the research page. The ERC Starting Grant leads in its own
// callout (research.astro); every entry here is listed beneath it, in this
// order. This is the only file you edit to add, remove, or reorder these
// funders.
//
// Fields:
//   name      Grant or program name (bold line; links to href when set).
//   funder    Funding body, shown under the name.
//   period    Optional funding period (e.g. "2024–2027").
//   amount    Optional amount for the lab (e.g. "€200K").
//   logo      Path under public/imgs/, or a list of paths to show several
//             logos side by side (e.g. joint programs). Omit to show `short`
//             as a text stand-in until the logo is added.
//   logoAlt   Alt text for the logo (defaults to the funder; with several
//             logos it goes on the first, which then names all of them).
//   wordmark  Set true for wide wordmark logos, which render shorter so they
//             carry the same visual weight as square marks.
//   short     Text stand-in shown while there is no logo.
//   href      Optional link (project or funder page). Omit for no link.

export interface Funding {
  name: string;
  funder: string;
  period?: string;
  amount?: string;
  logo?: string | string[];
  logoAlt?: string;
  wordmark?: boolean;
  short?: string;
  href?: string;
}

export const funding: Funding[] = [
  {
    name: 'START Prize',
    funder: 'Austrian Science Fund (FWF)',
    period: '2024–2027',
    amount: '€200K',
    logo: 'grants/fwf-logo.png',
    wordmark: true,
    href: 'https://www.fwf.ac.at/en/research-radar/10.55776/STA192',
  },
  {
    name: 'Computational Sustainability Doctoral College',
    funder: 'TU Wien & JKU Linz',
    period: '2026–2029',
    amount: '€213K',
    logo: ['TU-signet/TU_Signet_RGB.svg', 'grants/jku-logo.svg'],
    logoAlt: 'TU Wien and Johannes Kepler University Linz',
    href: 'https://computational-sustainability.at/',
  },
  {
    name: 'Biosensors and Medical Devices Doctoral Program',
    funder: 'TU Wien',
    period: '2026–2029',
    amount: '€213K',
    logo: 'TU-signet/TU_Signet_RGB.svg',
    href: 'https://www.tuwien.at/en/doc/biodevx-vorbereitung',
  },
  {
    // TODO: project name.
    name: 'BRIDGE project',
    funder: 'Austrian Research Promotion Agency (FFG)',
    period: '2025–2028',
    amount: '€100K',
    logo: 'grants/ffg-logo.png',
    href: 'https://www.ffg.at/programm/bridge',
  },
  {
    // TODO: link if there is one.
    name: 'DARE project',
    funder: 'Vienna Science and Technology Fund (WWTF)',
    period: '2026–2028',
    amount: '€100K',
    logo: 'grants/wwtf-logo.png',
  },
];
