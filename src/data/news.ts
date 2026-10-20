// News items, shown on the home page (the newest three) and the News page (all
// of them, grouped by month). This is the only file you edit to add news.
// Order does not matter — items are sorted by date automatically.
//
// Fields:
//   date    Full ISO date ("2026-07-08") or month only ("2026-07").
//           Month-only items show just the month in the date chip.
//   title   Plain text; inline HTML such as <em> for italics is allowed.
//   body    May contain HTML, so links work as usual.
//   images  Optional, 1–3 entries: { src, alt }. They render as a row of
//           thumbnails under the item that open full size on click, and also
//           appear in the "Life in the lab" gallery on the News page. Add
//           credit: "Name" to photos we don't own; it shows as
//           "Photo: © Name" under the photos and in the captions.
//
// Image src values are written relative to the site root ("imgs/..."), i.e.
// the file public/imgs/news/x.jpg is "imgs/news/x.jpg".

export interface NewsImage {
  src: string;
  alt: string;
  credit?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  body?: string;
  images?: NewsImage[];
}

export const news: NewsItem[] = [
  {
    date: "2026-10-01",
    title: 'Our Seminar Series "Interdisciplinary Foundations of Deep Learning in Chemistry" opens its doors',
    body: 'We are proud to announce that Esther and Max will host the Seminar Series <a href="/teaching/interdisciplinary-foundations">Interdisciplinary Foundations of Deep Learning in Chemistry</a>, which is now also accessible to an interested audience as well as to motivated students in mathematics, data science, informatics, computer science, computational science and engineering, physics, chemistry, and chemical engineering.'
  },
  {
    date: "2026-10",
    title: "Florentin joins for his master's thesis",
    body: 'We are happy to welcome Florentin again, who will write his master\'s thesis with Jasper.'
  },
  {
    date: "2026-09-26",
    title: "Max was interviewed by <em>Kurier</em> about his Ph.D. project",
    body: 'In the Austrian daily <em>Kurier</em>, Max talks about his DOC-funded Ph.D. project. <em>"The goal is not to collect every recipe in the world, but to understand the principles behind them"</em>. Read the full article <a href="https://kurier.at/wissen/wien-wills-wissen/tu-wien-forschung-mathematische-sandwiches-ki-kochbuch/403193545">here</a> (in German).'
  },
  {
    date: "2026-09-23",
    title: "Chemietage 2026 in Krems",
    body: 'Off to the Wachau! For the 21st <a href="https://www.chemietage.at/">Chemietage</a> of the <a href="https://www.goech.at/en">Austrian Chemical Society (GÖCH)</a> at IMC Krems, Leon and Synnöve presented their posters, and Max gave a talk on the advances of chemical reaction machine learning and its current limitations due to data, which was awarded the Best Presentation Award. Congratulations!',
    images: [
      { src: "imgs/news/2026-09-22-Chemietage_all.jpeg", alt: "Synnöve, Leon, and Max at the Chemietage 2026 in Krems" },
      { src: "imgs/news/2026-09-21-Chemietage_Leo.jpeg", alt: "Leon presenting his poster on asymmetric organocatalysis" },
      { src: "imgs/news/2026-09-22-Chemietage_Synnoeve.jpeg", alt: "Synnöve presenting her poster on early lung cancer detection" },
      { src: "imgs/news/2026-09-22-Chemietage_Max_talk.jpeg", alt: "Max giving his talk at the Chemietage 2026" },
      { src: "imgs/news/2026-09-23-Chemietage_Max_Prize.jpeg", alt: "Max receiving his prize at the Chemietage 2026" }
    ]
  },
  {
    date: "2026-09-16",
    title: "Guest article by Esther on AI in chemistry in <em>Der Standard</em>",
    body: 'Esther wrote a guest article for the Young Academy blog in the Austrian daily <em>Der Standard</em> on how specialized AI models, beyond general-purpose chatbots like ChatGPT, could make chemical research faster, more efficient, and more innovative. For our German-speaking readers, the full article is available <a href="https://www.derstandard.at/story/3000000338392/mehr-als-chatgpt-wie-kuenstliche-intelligenz-die-chemie-veraendert">here</a>.'
  },
  {
    date: "2026-09-08",
    title: "Group excursion to the Zotter chocolate factory",
    body: 'We swapped the lab for the Styrian countryside and headed to the Zotter chocolate factory in Riegersburg for the day. Instead of chemical reactions, we analyzed chocolate, and are happy to report overwhelmingly positive results, with only a few outliers reporting a chocolate hangover. We\'d recommend giving it a try and reproducing the results yourself.',
    images: [
      { src: "imgs/news/2026-09-zotter.jpg", alt: "The Heid Lab group at the Zotter chocolate factory" }
    ]
  },
  {
    date: "2026-09-04",
    title: "People's Poster Prize for Jonathan",
    body: 'Congratulations to Jonathan, who won the People\'s Poster Prize at the <a href="https://www.rscbmcs.org/events/aichem9/">9th RSC AI in Chemistry Symposium</a> at Churchill College, Cambridge! His poster “Modeling Acid-Base Phenomena: Advances in Data, Simulations, Cheminformatics, and Deep Learning” won over the attendees, who voted it their favorite. Well deserved, Jonathan!',
    images: [
      { src: "imgs/news/2026-09-04-RSC_AI_Jonathan_Prize.png", alt: "Jonathan with the other prize winners on stage at the RSC AI in Chemistry Symposium in Cambridge" },
      { src: "imgs/news/2026-09-04-RSC_AI_Jonathan_Poster.jpg", alt: "Jonathan with his certificate next to his poster on acid-base phenomena" }
    ]
  },
  {
    date: "2026-07",
    title: "Max receives a DOC fellowship",
    body: 'Max has been awarded the competitive DOC Fellowship of the Austrian Academy of Sciences. From September onwards, he will be able to focus on his research project, which focuses on curating high-quality chemical reaction datasets that meaningfully cover reaction space to train more reliable AI models for synthetic chemistry. Congratulations, Max! \
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
      '<li><strong>Christoph</strong> (University of Vienna) — joining for a research internship with Max about rigorous high-throughput quantum chemical pipelines</li>' +
      '<li><strong>Philip</strong> — joining for a bachelor\'s thesis with Max about using LLMs in chemical synthesis</li>' +
      '<li><strong>Johann</strong> (AHS Bernoulligasse) — joining during his summer break for an internship with Max about computational chemistry</li>' +
      '</ul>'
  },
  {
    date: "2026-06",
    title: "Highlights from the Science Days 2026",
    body: 'The <a href="https://www.tuwien.at/tch/yia/science-days/">Science Days</a> 2026 were a full success with a wide range of contributions from the group, including a talk by Esther, moderation by Max, posters and pitches by Leon and Synnöve, and to top it all off, Leon taking home the first poster prize. Congrats to all!',
    images: [
      { src: "imgs/news/2026-06-science-days-1.jpg", alt: "Science Days 2026" },
      { src: "imgs/news/2026-06-science-days-2.jpg", alt: "Science Days 2026" },
      { src: "imgs/news/2026-06-science-days-3.jpg", alt: "Science Days 2026" },
      { src: "imgs/news/2026-06-science-days-4.jpeg", alt: "At the image competition of the Science Days 2026" }
    ]
  },
  {
    date: "2026-06",
    title: "Johannes returns on an ESPRIT fellowship",
    body: 'We are super excited to welcome back Johannes, who rejoins the group with his own <a href="https://www.fwf.ac.at/en/research-radar/10.55776/ESP1292125">FWF ESPRIT fellowship</a> for this project titled “Towards Accurate Binding Free Energies using Machine-Learned Potentials”. For this he will explore how machine-learned potentials can improve free-energy predictions. Welcome back!'
  },
  {
    date: "2026-05-07",
    title: "Esther officially welcomed into the Young Academy",
    body: 'Two months after her election, it became official: at the welcome ceremony of the Austrian Academy of Sciences (ÖAW) in Vienna, Esther received her certificate as a new member of the Young Academy. Jasper and Max accompanied her to celebrate this great achievement. We are very proud of you, Esther!',
    images: [
      { src: "imgs/news/2026-05-07-esther-oeaw-1.jpg", alt: "Esther receiving her ÖAW certificate" },
      { src: "imgs/news/2026-05-07-esther-oeaw-2.jpg", alt: "Esther at the ÖAW welcome ceremony" },
      { src: "imgs/news/2026-05-07-esther-oeaw-3.jpeg", alt: "Esther pointing at her own name at the Austrian Academy of Sciences" }
    ]
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
    date: "2026-04",
    title: "A new student joining the group",
    body: 'We\'re excited to welcome a new student to the lab this spring:' +
      '<ul>' +
      '<li><strong>Marton</strong> — joining for a research internship with Jasper</li>' +
      '</ul>'
  },
  {
    date: "2026-03-26",
    title: "Esther elected to the Austrian Academy of Sciences",
    body: 'We are delighted that Esther has been elected as a new member of the Young Academy (Junge Akademie) of the Austrian Academy of Sciences (ÖAW), in recognition of her outstanding research in bridging chemistry and AI. The ÖAW welcomed 46 newly elected members in March 2026, with women making up 63% of new members. Read the full press release <a href="https://www.oeaw.ac.at/news/neue-mitglieder-gewaehlt-46-spitzenforschende-verstaerken-die-oeaw">here</a>.'
  },
  {
    date: "2026-03-19",
    title: "Lecture Night at the Vienna Science Circle",
    body: 'Esther held a lecture at the <a href="https://viennasciencecircle.at/">Vienna Science Circle</a> about the use of artificial intelligence in chemistry.',
    images: [
      { src: "imgs/news/2026-03-19-Science_Circle.jpeg", alt: "At the Vienna Science Circle" }
    ]
  },
  {
    date: "2026-03-09",
    title: "Esther's new course “AI in Chemistry” kicks off",
    body: 'A new course is born! On 9 March, Esther taught the very first unit of <a href="https://tiss.tuwien.ac.at/course/courseDetails.xhtml?semester=2026S&locale=en&courseNr=165171">AI in Chemistry</a> (165.171), where chemistry students learn about the exciting opportunities of neural networks, machine learning, and more.'
  },
  {
    date: "2026-03",
    title: "Jonathan joins the group as a postdoc",
    body: 'We are thrilled to welcome Jonathan, who joins the group as a postdoctoral researcher after successfully defending his Ph.D. at MIT and moving across the Atlantic to Vienna. As part of the ERC project, he will be working on modeling enzymatic reactions. Welcome, Jonathan!'
  },
  {
    date: "2026-03",
    title: "Max returns to the group as a Ph.D. student",
    body: 'We are happy to welcome back Max, who previously did his master\'s thesis with us in the summer of 2025 on <a href="https://repositum.tuwien.at/bitstream/20.500.12708/218844/1/Kovar%20Maximilian%20-%202025%20-%20On%20the%20influence%20of%20dataset%20quality%20on%20chemical...pdf">“On the Influence of Dataset Quality on Chemical Reaction Machine Learning”</a>. After his research visit to Spain, he is now back with us for his Ph.D., where he will continue his work on curating meaningful datasets to enable future AI assistants to learn chemistry. Welcome home, Max!'
  },
  {
    date: "2026-03-27",
    title: "Max successfully defends his second master's thesis",
    body: 'Congratulations to Max, who successfully defended his second master\'s thesis, carried out with a research group in Spain, on “Simulation of Proton Transfer Reactions in Ionic Liquids confined in Metal-Organic Frameworks: Methylimidazolium Acetate &amp; Triflate in NU-1000 using Machine-Learned Interatomic Potentials”!',
    images: [
      { src: "imgs/news/2026-03-27-Max-defence-1.jpeg", alt: "Max with his examination committee and the group after his defense" },
      { src: "imgs/news/2026-03-27-Max-defence-2.jpeg", alt: "Max presenting his second master's thesis" },
      { src: "imgs/news/2026-03-27-Max-defence-3.jpeg", alt: "The audience in the lecture hall during Max's defense" }
    ]
  },
  {
    date: "2026-03-18",
    title: "Stephie successfully defends her master's thesis",
    body: 'Congratulations to Stephie, who successfully defended her master\'s thesis on “Integrating nudged elastic band with flow matching for enhanced transition state prediction”!',
    images: [
      { src: "imgs/news/2026-03-stephi-1.jpeg", alt: "Stephie's master's thesis defense" },
      { src: "imgs/news/2026-03-stephi-2.jpeg", alt: "Stephie's master's thesis defense" },
      { src: "imgs/news/2026-03-stephi-3.jpeg", alt: "Stephie's master's thesis defense" }
    ]
  },
  {
    date: "2026-03-10",
    title: "Group Seminar becomes the Seminar Course “Interdisciplinary Foundations of Deep Learning in Chemistry”",
    body: 'After the great success of the group seminar in teaching us each other\'s basics, the series is relabeled <a href="/teaching/interdisciplinary-foundations">“Interdisciplinary Foundations of Deep Learning in Chemistry”</a> and will include invited talks henceforth, with the option to open it up to students outside the group in the future.'
  },
  {
    date: "2025-12-01",
    title: "Esther is a finalist of the Dream Chemistry Award",
    body: 'Esther made it to the final five of the <a href="https://www.dreamchemistryaward.org/">Dream Chemistry Award</a> 2025! At the finals at IOCB Prague, she presented her vision “Reactivity Without Borders: A Multilingual AI for Chemistry” and earned a Dream Chemistry Top 5 prize. Don\'t stop dreaming, Esther!'
  },
  {
    date: "2025-12",
    title: "Christmas party",
    body: 'Finishing a successful year of 2025 with a Christmas party.',
    images: [
      { src: "imgs/news/2025-12-christmas.jpg", alt: "Heid Lab Christmas party 2025" }
    ]
  },
  {
    date: "2025-12",
    title: "Synnöve joins the group as a Ph.D. student",
    body: 'We are thrilled to welcome Synnöve, our first Ph.D. student shared with the group of Prof. Erwin Rosenberg (TU Wien). With years of expertise both in analytical and computational chemistry, she will focus on analyzing breath-based samples for future cancer diagnostics. Welcome, Synnöve!'
  },
  {
    date: "2025-12",
    title: "Sebastian joins the group",
    body: 'We are happy to welcome Sebastian, who joins us for his master\'s thesis on using machine learning to predict pH optima for mutated enzymes as part of the <a href="/grants-erc">ERC-funded project</a>. Welcome, Sebastian!'
  },
  {
    date: "2025-10",
    title: "A new student joining the group",
    body: 'We\'re excited to welcome a new student to the lab this fall:' +
      '<ul>' +
      '<li><strong>Florentin</strong> — joining for a research internship with Jasper</li>' +
      '</ul>'
  },
  {
    date: "2025-09",
    title: "AITHYRA Symposium “AI for Life Science”",
    body: 'We were present at <a href="https://www.aithyra.at/">AITHYRA</a>, the new institute for AI in biomedicine of the Austrian Academy of Sciences, where we all presented a poster together. Sharing a poster is truly amazing, as you can also leave it and read the others from time to time. We are looking forward to having AITHYRA around in Vienna!',
    images: [
      { src: "imgs/news/2025-09-AITHYRA_1.jpeg", alt: "Group selfie at AITHYRA" },
      { src: "imgs/news/2025-09-AITHYRA_2.jpeg", alt: "Poster session at AITHYRA" }
    ]
  },
  {
    date: "2025-08-29",
    title: "Max successfully defends his master's thesis",
    body: 'We are proud to announce that Max has successfully defended his master\'s thesis on <a href="https://repositum.tuwien.at/bitstream/20.500.12708/218844/1/Kovar%20Maximilian%20-%202025%20-%20On%20the%20influence%20of%20dataset%20quality%20on%20chemical...pdf">“On the Influence of Dataset Quality on Chemical Reaction Machine Learning”</a> and therefore finished one of his master\'s degrees. The committee questioned him for over an hour, but he did not show any signs of fatigue. Congratulations, Max!',
    images: [
      { src: "imgs/news/2025-08-29-Max_defence_1.jpeg", alt: "Max presenting his master's thesis" },
      { src: "imgs/news/2025-08-29-Max_defence_2.jpeg", alt: "Max and Esther after the defense" },
      { src: "imgs/news/2025-08-29-Max_defence_3.jpeg", alt: "Celebrating with friends after Max's defense" }
    ]
  },
  {
    date: "2025-08-06",
    title: "Visit to the Atominstitut",
    body: 'Exactly 80 years after “Little Boy” was dropped on Hiroshima, we were invited together with the groups of Georg Madsen, Aleix Comas Vives and Maren Podewitz to the <a href="https://www.tuwien.at/en/phy/ati">Atominstitut</a> of TU Wien by Prof. Georg Steinhauser. We learned about the history of nuclear physics/chemistry, and the Atominstitut. We also got to see the research reactors and the laboratories where they conduct experiments with radioactive materials.',
    images: [
      { src: "imgs/news/2025-08-06-Atominstitut-1.jpeg", alt: "Group photo at the Atominstitut" }
    ]
  },
  {
    date: "2025-08",
    title: "Stephie starts her master's thesis",
    body: 'We are happy to welcome Stephie back to the group, who starts her master\'s thesis on flow matching for nudged elastic band reaction path prediction. Welcome back, Stephie!'
  },
  {
    date: "2025-07",
    title: "Jasper continues as a Ph.D. student",
    body: 'We are glad to announce Jasper is staying with us as a Ph.D. student from now on. He will continue his exciting research on machine learning for chemical reactions.'
  },
  {
    date: "2025-06-18",
    title: "Highlights from the Science Days 2025",
    body: 'Our first <a href="https://www.tuwien.at/tch/yia/science-days/">Science Days</a> as a group! Konsti presented a poster on his flow matching models and even won his first poster prize with his beautiful piece. Max also received a prize in the Ph.D. and master\'s students\' flash talk competition. They enjoyed the rest of the day in the warm sun on our balcony. Well deserved!',
    images: [
      { src: "imgs/news/2025-06-18-ScienceDays_Posters.jpeg", alt: "Three group members in front of their posters at the Science Days 2025" },
      { src: "imgs/news/2025-06-18-ScienceDays_Prizes.jpeg", alt: "Two group members with their prize certificates at the Science Days 2025" }
    ]
  },
  {
    date: "2025-06-16",
    title: "Jasper successfully defends his master's thesis",
    body: 'Congratulations to Jasper, our first master\'s student to successfully defend his thesis, on <a href="https://repositum.tuwien.at/bitstream/20.500.12708/216211/1/De%20Landsheere%20Jasper%20-%202025%20-%20Graph%20Representations%20and%20Neural%20Network...pdf">“Graph Representations and Neural Network Architectures for Reaction Barrier Height Prediction”</a>. The committee did not spare any questions from various fields, but Jasper answered them all with ease. We are proud of you, Jasper!',
    images: [
      { src: "imgs/news/2025-06-16-Jasper_defence_1.jpeg", alt: "Jasper presenting his master's thesis" },
      { src: "imgs/news/2025-06-16-Jasper_defence_2.jpeg", alt: "Jasper and Esther after the defense" }
    ]
  },
  {
    date: "2025-06",
    title: "Two new students joining the group",
    body: 'We\'re excited to welcome two new students to the lab this summer:' +
      '<ul>' +
      '<li><strong>Benjamin</strong> — joining for a bachelor\'s thesis with Max about accelerating and automating reaction dataset generation</li>' +
      '<li><strong>Marion</strong> (University of Vienna) — joining for a research stay with Johannes about simulating liquids in MOFs using MLIPs</li>' +
      '</ul>'
  },
  {
    date: "2025-05",
    title: "Charlotte joins the group as a Ph.D. student",
    body: 'We are happy to welcome Charlotte, who joins the group as a Ph.D. student. With roots in bioinformatics, she will focus on string-based representations and models for chemical reactions. Welcome, Charlotte!'
  },
  {
    date: "2025-04",
    title: "Anton joins the group",
    body: 'We welcome Anton, who joins the group to support our team, while also pursuing his studies at TU Wien.'
  },
  {
    date: "2025-03-05",
    title: "Esther paves the way for interdisciplinary group seminars to foster communication between group members from different fields",
    body: 'With the Heid Lab growing rapidly with people from different fields, Jasper, Max, Leo, Leon, and Konsti want to dedicate two hours every week to teach the foundations of their respective fields to each other.'
  },
  {
    date: "2025-03",
    title: "Konsti joins the group as a Ph.D. student",
    body: 'We are thrilled to welcome Konsti, the group\'s first mathematician, who joins as a Ph.D. student. He will strengthen our team\'s abstract reasoning and problem-solving capabilities significantly while focusing on generative models together with Leo. Welcome, Konsti!'
  },
  {
    date: "2025-03",
    title: "Two new students joining the group",
    body: 'We\'re excited to welcome two new students to the lab this spring:' +
      '<ul>' +
      '<li><strong>Stephie</strong> — joining for a research internship with Max about clustering reactions within datasets chemically</li>' +
      '<li><strong>Hannah</strong> — joining for her bachelor\'s thesis about the effect of distribution shifts in GNNs</li>' +
      '</ul>'
  },
  {
    date: "2025-02",
    title: "Max starts his master's thesis",
    body: 'After his research internship in the group, Max continues with his master\'s thesis on filtering existing and curating new chemical reaction datasets for machine learning applications. Welcome back, Max!'
  },
  {
    date: "2025-02",
    title: "Leon joins the group as a Ph.D. student",
    body: 'We\'re excited to welcome Leon, our first shared Ph.D. student and wet-lab chemist. Together with the group of <a href="https://info.ias.tuwien.ac.at/schroederlab/">Prof. Katharina Schröder</a> (TU Wien), he will focus on reactions using organocatalysts as part of the <a href="/grants-erc">ERC project</a>. Welcome, Leon!'
  },
  {
    date: "2024-12",
    title: "Leo joins the group as a Ph.D. student",
    body: 'We welcome Leo, who joins the group as its first Ph.D. student. After his work at the Department of Geosciences (TU Wien) and the Neuroimaging Labs (MedUni Wien), he will start his work on transition state geometry generation. Welcome, Leo!'
  },
  {
    date: "2024-12",
    title: "Esther becomes Assistant Professor",
    body: 'Less than three years after returning from MIT, and fresh off an ERC Starting Grant and an FWF START Prize, Esther starts as Assistant Professor for Machine Learning for Sustainable Chemistry at TU Wien. The Heid Lab is officially born!'
  },
  {
    date: "2024-12",
    title: "“Programming for Chemists” wins TU Wien's Best Lecture Award",
    body: 'Our course “Programming for Chemists”, taught by Esther together with Georg Ramer, won TU Wien\'s <a href="https://www.tuwien.at/en/studies/teaching-at-tu-wien/best-teaching-awards/ceremonies-2017-2025/best-teaching-awards-2024">Best Lecture Award 2024</a>. Amazing!'
  },
  {
    date: "2024-11",
    title: "A new student joining the group",
    body: 'We\'re excited to welcome a new student to the lab this fall:' +
      '<ul>' +
      '<li><strong>Max</strong> — joining for a research internship about making data usable for chemical reaction machine learning</li>' +
      '</ul>'
  },
  {
    date: "2024-09-05",
    title: "Esther receives an ERC Starting Grant",
    body: 'Just a few months after the FWF START Prize, more great news: the European Research Council (ERC) has awarded Esther a Starting Grant worth €1.5 million over five years for her project on “Deep learning of chemical reactions”. TU Wien is as proud as we are: read their <a href="https://www.tuwien.at/en/tu-wien/news/news-articles/news/esther-heid-kuenstliche-intelligenz-fuer-chemische-reaktionen">press release</a>.',
    images: [
      { src: "imgs/news/2024-09-erc-esther.jpg", alt: "Esther Heid", credit: "Ulrich Zinell" }
    ]
  },
  {
    date: "2024-10",
    title: "Johannes joins the group as a postdoc",
    body: 'We are thrilled to welcome Johannes, who joins the group as the first postdoctoral researcher after successfully defending his Ph.D. at Universität Wien. Welcome, Johannes!'
  },
  {
    date: "2024-08",
    title: "Jasper joins as a master's student",
    body: 'We are excited to welcome Jasper, who will be our first master\'s student. He will work on graph representations and neural network architectures for reaction barrier height prediction. Good luck, Jasper!'
  },
  {
    date: "2024-06-20",
    title: "Esther receives the FWF START Prize",
    body: 'Esther has been awarded the START Prize of the Austrian Science Fund (FWF), Austria\'s most prestigious award for early-career researchers. Now, the Heid Lab may cease to be a one-woman show. Read the interview with Esther about her vision of the “virtual laboratory”: <a href="https://scilog.fwf.ac.at/en/magazine/a-virtual-laboratory-for-more-sustainability">A virtual laboratory for more sustainability</a>.',
    images: [
      { src: "imgs/news/2024-06-fwf-start-esther.jpg", alt: "Esther Heid", credit: "FWF/Ulrich Zinell" }
    ]
  },
  {
    date: "2022-01",
    title: "Esther returns to Vienna",
    body: 'After some years at MIT, Esther starts her second postdoctoral stay at TU Wien. The start of something truly amazing...'
    // TODO: add photo, e.g.
    // images: [
    //   { src: "imgs/news/2022-01-esther-vienna.jpg", alt: "" }
    // ]
  }

  /* ── Draft entries: arrivals, theses and defenses ─────────────────
     Waiting for text (and some dates). Each one moves up into the
     list, in date order, once it is filled in. "??" marks unknown
     dates. Students on short stays (internships, bachelor's theses,
     visits) are never named in the title: "<N> new students joining
     the group", with one line each in a list (affiliation only if not
     TU Wien; co-supervisor and topic). Thesis defenses get photos;
     arrivals don't by default.

  {
    date: "????-??",                                      // on hold
    title: "Giulia",                                      // visiting Ph.D. student, University of Bologna
    body: 'TODO'
  },
  {
    date: "????-??",                                      // on hold
    title: "Albert",                                      // bachelor's thesis
    body: 'TODO'
  }
  ── end of drafts ─────────────────────────────────────────────────── */
];

// Newest first. ISO dates sort correctly as plain strings; a month-only date
// ("2026-07") is treated as the start of that month.
export function newsByDate(): NewsItem[] {
  const sortKey = (date: string) => (date.length === 7 ? `${date}-00` : date);
  return [...news].sort((a, b) => sortKey(b.date).localeCompare(sortKey(a.date)));
}

// An image's URL on the site: "imgs/..." becomes "/imgs/...". Full URLs and
// paths that already start with "/" pass through unchanged.
export function imageUrl(src: string): string {
  return /^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('/') ? src : `/${src}`;
}

// Titles may contain inline HTML (e.g. <em>); labels and captions need the
// plain text.
const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: '\u00a0' };
export function plainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (_, name: string) => ENTITIES[name]);
}
