# Heid Lab website

The website for the Heid Lab at TU Wien (Faculty of Technical Chemistry, Institute of Materials Chemistry).

<!-- Live at **https://heid-lab.github.io/**. -->


## Tech stack

- **Framework:** [Astro](https://astro.build/) — builds to static HTML/CSS/JS
- **Language:** TypeScript (`src/data/`), `.astro` components
- **Styling:** one CSS file; Lato via Google Fonts
- **Interactivity:** small `<script>` blocks inside the components and pages they belong to, bundled by Astro
- **Hosting:** GitHub Pages, deployed by GitHub Actions
- **Tooling:** [Node.js](https://nodejs.org/) + npm (build only)


## Development

Changing the website takes five steps:

1. [Set up](#1-set-up-first-time-only) (first time only)
2. [Create a branch](#2-create-a-branch)
3. [Preview the site locally](#3-preview-the-site-locally)
4. [Make your changes](#4-make-your-changes): publications, team, news, photos, page text
5. [Publish your changes](#5-publish-your-changes): commit, push, merge into `main`

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (includes npm)

<details>
<summary>Not sure if you have Node.js?</summary>

Run this in a terminal:

```bash
node -v
```

If it prints a version number of 20 or higher (e.g. `v22.11.0`), you're set.
If it says *command not found* or shows an older version, download and install
the **LTS** version from [nodejs.org](https://nodejs.org/), then open a new
terminal window and run `node -v` again.
</details>

### 1. Set up (first time only)

```bash
# Download the code
git clone git@github.com:heid-lab/heid-lab.github.io.git

# Go into the folder
cd heid-lab.github.io

# Install dependencies
npm install
```

### 2. Create a branch

Work on your own branch, so your changes stay separate from `main` (the live
site) until they're ready:

```bash
git switch main             # start from the latest version
git pull
git switch -c my-change     # pick a short name, e.g. add-news-item
```

### 3. Preview the site locally

Start a local copy of the website, so you can see how your edits look while
you make them:

```bash
npm run dev
```

Open the **Local** address the terminal prints in your browser:

```
┃ Local    http://localhost:4321/
```

The port may differ (e.g. `4322`) if 4321 is already in use. Ignore any
*"New version of Astro available"* message; upgrading can break the site.

Leave it running while you edit: every time you save a file, the browser
reloads with your change. Press **Ctrl-C** to stop it.

These changes exist only on your computer. The live website doesn't change
until you publish them ([step 5](#5-publish-your-changes)).

<details>
<summary>Other commands (rarely needed)</summary>

```bash
# Build the production site into dist/ (the deploy does this for you)
npm run build

# Preview that build locally
npm run preview
```
</details>

### 4. Make your changes

Here are some examples of changes you may want to make:

<details>
<summary><b>Adding a publication</b></summary>

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
- Add `funding: ['erc']` if the paper acknowledges the ERC grant; leave it out
  otherwise. It doesn't affect the Publications page, only whether the paper
  appears in the "related publications" list on the ERC grant page.

</details>

<details>
<summary><b>Adding or removing a team member</b></summary>

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

**Their photo:** put the file in `public/imgs/team_members/`, run
`npm run photos` (see [Adding photos](#adding-photos)), and set `photo` to its
filename. If you leave `photo` out, the card shows a placeholder with their
initials.

To remove someone or move them to **Alumni**, delete their entry from `members`
and add a line to the `alumni` array further down the same file:

```ts
{
  year: '2026',
  people: [
    { name: 'Jane Doe', note: 'Visiting researcher, University of …' },
  ],
},
```

</details>

<details>
<summary><b>Adding a news item</b></summary>

Edit `src/data/news.ts` and add an object to the `news` array. Order
doesn't matter — items are sorted by date (newest first). The home page shows
the newest three; the News page shows all.

```js
{
  date: "2026-08-15",   // full date, or month only ("2026-08")
  title: "Headline of the news item",
  body: 'Body text. May contain HTML, so <a href="…">links</a> work.',
  images: [             // optional, 1–3 photos (see below)
    { src: "imgs/news/2026-08-example-1.jpg", alt: "Short description" },
    { src: "imgs/news/2026-08-example-2.jpg", alt: "Short description" }
  ]
},
```

</details>

<details>
<summary><b>Adding photos (news items & "Life in the lab" gallery)</b></summary>

The **"Life in the lab"** gallery on the News page fills itself: it collects
every image from every news item, captioned with the item's title. Add photos
to news items and they show up there too. (The first photo is fixed and set in
`src/components/NewsGallery.astro`.)

1. Put the image files in `public/imgs/news/`.
2. Run **`npm run photos`** (see below).
3. Reference them from a news item's `images` array in
   `src/data/news.ts`, using the path **`imgs/news/your-file.jpg`**
   (root-relative).

<a id="adding-photos"></a>**Every new or replaced image** (news, team, group,
research, …) must go through `npm run photos` before you commit it. Photos
straight from a phone are several MB, may be stored sideways, and contain the
GPS location where they were taken. The command fixes that in place:

- It removes hidden metadata (camera info, GPS location) from every image
  without re-saving it, so the picture itself stays exactly the same.
- Only images over 1.5 MB, or stored sideways, are re-saved: turned upright
  and shrunk to at most 2400 px on the long edge, at high quality.

Images that are already fine are left alone.

If you forget, the commit is stopped with a message telling you to run it
(`npm install` switches this check on), and GitHub runs the same check on
every push.

</details>

<details>
<summary><b>Adding a page for a current course</b></summary>

A current course on the Teaching page can get its own page, with a table of
its sessions. Its card then shows a **Course details** link next to
**View on TISS**.

1. Copy `src/pages/teaching/_course-template.astro` into the same folder under
   a short name **without** the leading `_`, e.g.
   `ml-for-chemistry.astro`. The name becomes the URL
   (`/teaching/ml-for-chemistry`); files starting with `_` are
   never built into pages.
2. In the copy, fill in `course` (number, type, semester, title) and add the
   sessions to `sessions`:

   ```ts
   { date: '2026-10-08', title: 'Session title', area: 'Chemistry' },
   ```

3. In `src/pages/teaching.astro`, add `page` to the course's entry in
   `currentCourses`:

   ```ts
   { nr: '165.169', type: 'SE', ects: '3.0', title: '…', page: 'teaching/deep-learning-in-chemistry' },
   ```

</details>

#### Other common edits

- **Change the navigation** → `src/components/Header.astro` (one place, not every page).
- **Change text on a page** → that page's file in `src/pages/`.
- **Change the funders on the Research page** → `src/data/funding.ts`.
- **Change styling** → `src/styles/style.css`.

### 5. Publish your changes

For a bigger change, first run `npm run build` as a check: it builds every
page, not just the ones you opened in the dev server. If it fails locally, the
deploy would fail too, and the live site would stay on the previous version.

Save your changes in a commit and push your branch to GitHub:

```bash
git add .
git commit -m "feat: add news item about …"   # describe what you changed
git push -u origin my-change                  # your branch name from step 2
```

Then open the repo on GitHub, click **Compare & pull request** for your branch,
create the pull request and merge it into `main`. Merging starts the
[deployment](#deployment), and your changes are live on the website a few
minutes later. You can follow its progress in the repo's **Actions** tab.


## Project structure

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
│   ├── PubList.astro     A list of publications (Publications + ERC page).
│   ├── NewsList.astro    The news timeline (home page + News page).
│   ├── NewsGallery.astro The "Life in the lab" photo carousel (News page).
│   ├── SocialLinks.astro A person's GitHub / LinkedIn / Scholar icons.
│   ├── GrantPeople.astro The people lists on the ERC grant page.
│   └── IconSprite.astro  Social-media icon definitions.
├── data/
│   ├── team.ts           The PI, team members, and alumni.
│   ├── publications.ts   Publications, grouped by year.
│   ├── news.ts           News items.
│   └── funding.ts        Funders listed on the Research page.
├── scripts/
│   └── lightbox.ts       Full-size photo viewer shared by the news components.
└── styles/
    └── style.css         All styling (one file).

public/                   Copied as-is to the site root.
└── imgs/                 All images (team_members/, news/, group/, grants/, …).

tools/
└── photos.mjs            `npm run photos`: strips metadata, shrinks big images.
.githooks/
└── pre-commit            Runs the photo check before each commit.
```


## Deployment

Every push to `main`, including merging a pull request, triggers
`.github/workflows/deploy.yml`, which checks the photos, builds the site and
publishes it to GitHub Pages. If the photo check or the build fails, nothing is
published and the live site stays on the previous version.

Every push to any branch, and every pull request, also runs
`.github/workflows/check.yml` (photo check + build), so problems show up on the
pull request before anything is merged.

One-time setup in the GitHub repo (only if Pages isn't already configured):
**Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

> **Note on links.** The repo is `heid-lab.github.io`, so Pages serves the site
> at the domain root. Internal links and images are therefore written as root
> paths, e.g. `/team` or `/imgs/hero/esther-heid-hero.jpg`.
