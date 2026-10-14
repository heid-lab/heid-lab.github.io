# Heid Lab website

The website for the Heid Lab at TU Wien (Faculty of Technical Chemistry, Institute of Materials Chemistry).

<!-- Live at **https://heid-lab.github.io/**. -->


## Tech stack

- **Framework:** [Astro](https://astro.build/) — builds to static HTML/CSS/JS
- **Language:** TypeScript (data) + `.astro` components
- **Styling:** one CSS file; Lato via Google Fonts
- **Interactivity:** small vanilla-JS scripts (`public/js/`)
- **Hosting:** GitHub Pages, deployed by GitHub Actions
- **Tooling:** [Node.js](https://nodejs.org/) + npm (build only)


## Development

- Just want to see the site on your computer? → [Run the website locally](#run-the-website-locally)
- Want to change content (publication, team member, news item, photo, page text)? → [Content management](#content-management)

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (includes npm)

### Run the website locally

Clone the repo:

```bash
git clone git@github.com:heid-lab/heid-lab.github.io.git
```

Go into the folder and run:

```bash
# 1. Go into cloned folder
cd heid-lab.github.io

# 2. Install dependencies (first time only)
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:4321/** in your browser.

Leave `npm run dev` running while you edit. When you save a file, the browser
reloads on its own. Press **Ctrl-C** to stop it.

Local changes don't touch the live site. The live site only changes when you
push to `main` (see [Deployment](#deployment)).

<details>
<summary>Other commands (rarely needed)</summary>

```bash
# Build the production site into dist/ (the deploy does this for you)
npm run build

# Preview that build locally
npm run preview
```
</details>

### Project structure

```
src/
├── pages/                One file per page. index.astro is the home page;
│                         the rest map to their URL (team.astro → /team, etc.).
├── layouts/
│   └── Layout.astro      Shared page shell (head, header, footer). Every page
│                         uses this, so the header/footer are written ONCE here.
├── components/           Reusable pieces:
│   ├── Header.astro      Top navigation.
│   ├── Footer.astro      Site footer with the TU logo.
│   ├── TeamCard.astro    One team-member card.
│   └── IconSprite.astro  Social-media icon definitions.
├── data/
│   ├── team.ts           Team members + alumni.
│   └── publications.ts   Publications, grouped by year.
└── styles/
    └── style.css         All styling (one file).

public/                   Copied as-is to the site root.
├── imgs/                 All images (team_members/, news/, group/, grants/, …).
└── js/                   Vanilla scripts (slideshow, news, gallery, filters)
    └── news-data.js      News items live here.
```

## Content management

### Adding a publication

Edit `src/data/publications.ts` and add an entry to the right year's `items`
array (newest first). Add a new year block at the top if the year isn't there
yet.

```ts
{
  meta: 'Digital Discovery 1, 234 · 2026',
  title: 'Paper title goes here',
  href: 'https://doi.org/1.234/ABC', 
  authors: 'J. Doe, …', 
  preprint: true,                             // optional: shows the "Preprint" tag
  funding: ['erc'],                           // optional: grant(s) the paper acknowledges
  // titleHtml: 'Ti-rich SrTiO<sub>3</sub>(110) …',  // use INSTEAD of `title` if it needs markup
},
```

- Use `titleHtml` **instead of** `title` only when the title needs markup like a
  subscript (`<sub>`).
- Add `funding: ['erc']` if the paper acknowledges the ERC grant. It is **not**
  shown on the Publications page — it only decides whether the paper appears in
  the "related publications" list on the ERC grant page. Leave it out otherwise.

### Adding a team member

Edit `src/data/team.ts` and add an entry to the `members` array. The `group`
field decides which section (and filter tab) they appear under.

```ts
{
  name: 'Jane Doe',
  role: 'Ph.D. Student · ERC project',   // the line under the name
  group: 'phd',                        // 'postdoc' | 'phd' | 'project'
  photo: 'jane-doe.jpg',               // file in public/imgs/team_members/ (see below)
  bio: [
    'First paragraph of the bio. May contain HTML links.',
    'A second paragraph, if needed.',
  ],
  links: {                             // all optional
    github: 'https://github.com/…',
    linkedin: 'https://www.linkedin.com/in/…',
    scholar: 'https://scholar.google.com/citations?user=…',
  },
  // avatar: 'high',                    // optional photo-crop nudge: 'high' | 'low' | 'top' | 'zoom' | 'zoom-sm'
},
```

**Their photo:** put the file in `public/imgs/team_members/` and set `photo` to
its filename. If you leave `photo` out, the card shows a placeholder with their
initials.

To remove someone or move them to **Alumni**, delete their entry from `members`
and add a line to the `alumni` array further down the same file:

```ts
{
  year: '2026',
  people: [
    { name: 'Jane Doe', note: 'Ph.D., now at …' },
  ],
},
```

### Adding a news item

Edit `public/js/news-data.js` and add an object to the `NEWS` array. Order
doesn't matter — items are sorted by date (newest first). The home page shows
the newest three; the News page shows all.

```js
{
  date: "2026-08-15",   // full date, or month only ("2026-08")
  title: "Headline of the news item",
  body: 'Body text. May contain HTML, so <a href="…">links</a> work.',
  images: [             // optional, 1–3 photos (see below)
    { src: "imgs/news/2026-08-example.jpg", alt: "Short description" }
  ]
},
```

### Adding photos (news items & "Life in the lab" gallery)

1. Put the image files in `public/imgs/news/`.
2. Reference them from a news item's `images` array in
   `public/js/news-data.js`, using the path **`imgs/news/your-file.jpg`**
   (root-relative).

The **"Life in the lab"** gallery on the News page fills itself: it collects
every image from every news item (plus the group photo). Add photos to news
items and they show up there too.

### Other common edits

- **Change the navigation** → `src/components/Header.astro` (one place, not every page).
- **Change text on a page** → that page's file in `src/pages/`.
- **Change styling** → `src/styles/style.css`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. No manual step — just commit and push.

One-time setup in the GitHub repo (only if Pages isn't already configured):
**Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

> **Note on the base path.** The repo is `heid-lab.github.io`, so Pages serves
> the site at the domain root and `astro.config.mjs` sets `base: '/'`.
