# Open Source Portfolio

Languages: English | [简体中文](README.zh-CN.md)

A deployment-first portfolio and lightweight service landing page for students, independent developers, and new open source maintainers.

It is built with React, TypeScript, and Vite, with GitHub Pages deployment already wired in. The default content is tuned for a full-stack developer who wants to show practical projects, deployment ability, contribution readiness, and a clear paid service offer.

## Why This Exists

Most portfolio templates focus on decoration. This one focuses on proof:

- selected projects with real engineering context
- a focused services section with concrete packages
- readable source code for fast customization
- GitHub Pages workflow included
- open source docs that make forks and pull requests easy

## Quick Start

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

Edit the profile and project arrays in `src/App.tsx`.

Important fields:

- `profile`: name, role, headline, email, GitHub link, audit service link
- `offers`: service packages, scope, and links
- `projects`: project title, category, summary, stack, and link
- `workflow`: the operating loop shown near the bottom of the page

Visual styling lives in `src/App.css` and global theme variables live in `src/index.css`.

## Deploy To GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages.

After pushing to GitHub:

1. Open the repository settings.
2. Go to **Pages**.
3. Set source to **GitHub Actions**.
4. Push to `main`.

The site URL will be:

```text
https://<your-github-name>.github.io/open-source-portfolio/
```

If you rename the repository, update `base` in `vite.config.ts`.

## Project Structure

```text
open-source-portfolio/
├─ public/                    # public visual assets
├─ src/
│  ├─ App.tsx                 # portfolio content and page structure
│  ├─ App.css                 # page-level styles and responsive layout
│  └─ index.css               # global theme and font setup
├─ .github/workflows/deploy.yml
├─ CONTRIBUTING.md
├─ LICENSE
└─ README.md
```

## Good First Issues

- Add a resume download button.
- Add a project detail page.
- Add a theme switcher.
- Add a script that rewrites profile data from a JSON file.

## License

MIT
