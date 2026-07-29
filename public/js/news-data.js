/* ============================================================
   Heid Lab — news items
   This is the only file you edit to add news.

   date   Full ISO date ("2026-07-08") or month only ("2026-07").
          Month-only items show just the month in the date chip.
          Order does not matter — items are sorted automatically.
   title  Plain text.
   body   May contain HTML, so links work as usual.
   images Optional, 1–3 entries: { src, alt }. They render as a small
          row under the item; one photo fills the width, two or three
          share the row.

   The landing page shows the newest three; news.html shows all.

   !! Items below contain [bracketed] placeholders where details were
      missing. Search for "[" to find them all.

   Image src values are written relative to the site root ("imgs/..."); the
   renderers prefix them with the deploy base path at render time, so they
   resolve correctly no matter which page shows them.
   ============================================================ */

window.NEWS = [
  {
    date: "2026-07",
    title: "Max awarded a DOC Fellowship",
    body: 'Max has been awarded the competitive DOC Fellowship of the Austrian Academy of Sciences. His project focuses on curating high-quality chemical reaction datasets that meaningfully cover reaction space to train more reliable AI models for synthetic chemistry. Congratulations, Max! \
    Read the full press release <a href="https://stipendien.oeaw.ac.at/en/stipendien/doc/doc-gefoerderte-personen">here</a>.',
    images: [
      { src: "imgs/news/2026-07-max-1.jpeg", alt: "" },
      { src: "imgs/news/2026-07-max-2.jpeg", alt: "" }
    ]
  },
  {
    date: "2026-07",
    title: "Charlotte co-organized WiML @ ICML 2026",
    body: 'Charlotte took on the role of Finance &amp; Sponsorship Chair for the Women in Machine Learning (WiML) <a href="https://sites.google.com/wimlworkshop.org/wimlsymposium-2026/committee">Symposium</a> at ICML 2026 in Seoul.'
  },
  {
    date: "2026-07",
    title: "Three new students joining the group",
    body: 'We\'re excited to welcome three new students to the lab this summer:' +
      '<ul>' +
      '<li><strong>Christoph Kloesch</strong> (Uni Wien) — joining for his MSc thesis</li>' +
      '<li><strong>Philip Kamper</strong> (TU Wien) — for his BSc thesis</li>' +
      '<li><strong>Johann Wu</strong> — for a summer internship over his high-school summer break</li>' +
      '</ul>'
  },
  {
    date: "2026-06",
    title: "Highlights from the Science Days 2026",
    body: 'The <a href="https://www.tuwien.at/tch/yia/science-days/">Science Days</a> 2026 were a full success with a wide range of contributions from the group, including a talk by Esther, moderation by Max, posters and pitches by Leon and Synnöve, and to top it all off, Leon taking home the first poster prize. Congratulations all round!',
    images: [
      { src: "imgs/news/2026-06-science-days-1.jpg", alt: "Science Days 2026" },
      { src: "imgs/news/2026-06-science-days-2.jpg", alt: "Science Days 2026" },
      { src: "imgs/news/2026-06-science-days-3.jpg", alt: "Science Days 2026" }
    ]
  },
  {
    date: "2026-06",
    title: "Johannes returns on an ESPRIT fellowship",
    body: 'We are super excited to welcome back Johannes Karwounopoulos, who rejoins the group with his own <a href="https://www.fwf.ac.at/en/research-radar/10.55776/ESP1292125">FWF ESPRIT fellowship</a> for this project titled "Towards Accurate Binding Free Energies using Machine-Learned Potentials". For this he will explore how machine-learned potentials can improve free-energy predictions. Welcome back!'
  },
  {
    date: "2026-05",
    title: "Synnöve and Charlotte participate in the Epistimi Leadership Program",
    body: 'Synnöve and Charlotte went to Athens for a week to take part in the <a href="https://www.epistimi.org/program">Epistimi Leadership Program</a>, led by former MIT professor Dr. Angeliki Rigos. Built on MIT\'s LEAPS program and created by women in STEMM for women in STEMM, the workshops help early-career researchers begin their leadership journey — from self-awareness and communication to leading teams, navigating conflict, and negotiation.',
    images: [
      { src: "imgs/news/2026-05-epistimi-1.jpeg", alt: "Epistimi Leadership Program in Athens" },
      { src: "imgs/news/2026-05-epistimi-2.jpeg", alt: "Epistimi Leadership Program in Athens" },
      { src: "imgs/news/2026-05-epistimi-3.jpeg", alt: "Epistimi Leadership Program in Athens" }
    ]
  },
  {
    date: "2026-03-26",
    title: "Esther elected to the Austrian Academy of Sciences",
    body: 'We are delighted that Esther has been elected as a new member of the Young Academy (Junge Akademie) of the Austrian Academy of Sciences (ÖAW), in recognition of her outstanding research in bridging chemistry and AI. The ÖAW welcomed 46 newly elected members in March 2026, with women making up 63% of new members. Read the full press release <a href="https://www.oeaw.ac.at/news/neue-mitglieder-gewaehlt-46-spitzenforschende-verstaerken-die-oeaw">here</a>.',
    images: [
      { src: "imgs/news/2026-03-esther-oeaw-1.jpg", alt: "Esther Heid" },
      { src: "imgs/news/2026-03-esther-oeaw-2.jpg", alt: "Esther Heid" }
    ]
  },
  {
    date: "2026-03-01",
    title: "Jonathan joins the group as a postdoc",
    body: 'We are thrilled to welcome Jonathan Zheng, who joins the group as a postdoctoral researcher after successfully defending his PhD at MIT and moving across the Atlantic to Vienna. As part of the ERC project, he will be working on modeling enzymatic reactions. Welcome, Jonathan!'
  },
  {
    date: "2026-03-01",
    title: "Max returns to the group as a PhD student",
    body: 'We are happy to welcome back Max, who previously did his master thesis with us in the summer of 2025 on <a href="https://repositum.tuwien.at/bitstream/20.500.12708/218844/1/Kovar%20Maximilian%20-%202025%20-%20On%20the%20influence%20of%20dataset%20quality%20on%20chemical...pdf">"On the Influence of Dataset Quality on Chemical Reaction Machine Learning"</a>. After his research visit to Spain, he is now back with us for his PhD, where he will continue his work on curating meaningful datasets to enable future AI assistants to learn chemistry.'
  },
  {
    date: "2026-03-27",
    title: "Max successfully defends his second master thesis",
    body: 'Congratulations to Max, who successfully defended his second master thesis, carried out with a research group in Spain, on "Simulation of Proton Transfer Reactions in Ionic Liquids confined in Metal-Organic Frameworks: Methylimidazolium Acetate &amp; Triflate in NU-1000 using Machine-Learned Interatomic Potentials"!'
  },
  {
    date: "2026-03-18",
    title: "Stephie successfully defends her master thesis",
    body: 'Congratulations to Stephie, who successfully defended her master thesis on "Integrating nudged elastic band with flow matching for enhanced transition state prediction"!',
    images: [
      { src: "imgs/news/2026-03-stephi-1.jpeg", alt: "Stephie's master thesis defense" },
      { src: "imgs/news/2026-03-stephi-2.jpeg", alt: "Stephie's master thesis defense" },
      { src: "imgs/news/2026-03-stephi-3.jpeg", alt: "Stephie's master thesis defense" }
    ]
  },
  {
    date: "2025-12",
    title: "Christmas party",
    body: 'Finishing a successful year of 2025 with a Christmas party.',
    images: [
      { src: "imgs/news/2025-12-christmas.jpg", alt: "Heid Lab Christmas party 2025" }
    ]
  }
];
