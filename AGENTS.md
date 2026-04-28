# Repository Agent Instructions

## Scope

- Follow `README.md`, `package.json`, Vite, TypeScript, and ESLint conventions already present in the repo.
- Keep the portfolio UI responsive and visually aligned with the existing design.
- Do not commit secrets, tokens, cookies, generated credentials, browser profiles, private logs, or local machine paths.

## Commands

- Install: `npm ci`.
- Develop: `npm run dev`.
- Build: `npm run build`.
- Lint: `npm run lint`.
- Preview: `npm run preview`.

## Verification

For UI or TypeScript changes, run `npm run build` and `npm run lint` when practical. For visual changes, use a browser smoke check across desktop and mobile widths.

## Git

- Preserve unrelated dirty changes.
- Do not rewrite history, delete branches, push, publish, or open PRs without explicit confirmation.
