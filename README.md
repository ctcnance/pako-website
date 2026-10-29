# PAKO Analytics

Official website for PAKO Analytics, an independently founded software development and data analytics business.

## Requirements

- Node.js 20.19.0 or later
- npm

## Setup

```sh
npm install
npx playwright install --with-deps chromium
```

## Development

```sh
npm run dev
```

Astro prints the local development URL after the server starts.

## Build

```sh
npm run build
npm run preview
```

The production site is statically generated into `dist/`.

## Tests and quality checks

```sh
npm test
npm run test:e2e
npm run lint
npm run format:check
```

`npm test` runs Vitest unit tests. `npm run test:e2e` runs Playwright browser checks and requires the Chromium browser installed during setup. `npm run lint` checks JavaScript, TypeScript, and Astro files with ESLint; `npm run format:check` checks formatting with Prettier.

## Project structure

- `src/pages/` contains Astro's file-based routes.
- `src/layouts/` contains the shared page shell and document metadata.
- `src/components/` contains shared site navigation and footer components.
- `src/data/` contains the site identity and navigation definitions.
- `src/styles/` contains global design tokens and responsive styles.
- `tests/` contains browser-level smoke tests.

The site is static and has no backend, database, analytics tracking, contact form, CMS, or authentication.
