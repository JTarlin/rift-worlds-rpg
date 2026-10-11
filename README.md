# Rift Worlds RPG

The official static rules site for **Rift Worlds**, built with [Astro](https://astro.build/). It is designed for fast reference at the table, comfortable long-form reading, and straightforward rule editing through Markdown content collections.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```sh
npm install
npm run dev
```

Astro starts the development server at `http://localhost:4321/rift-worlds-rpg/`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript validation |
| `npm run build` | Validate and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing the rules

Rule chapters live in [`src/content/rules`](src/content/rules). Frontmatter controls each chapter's title, description, navigation order, icon, and publication state:

```yaml
---
title: Core Concepts
description: The dice, risks, and principles at the heart of play.
order: 1
icon: "◇"
eyebrow: Chapter One
updated: 2026-10-10
draft: false
---
```

The collection schema is defined in [`src/content.config.ts`](src/content.config.ts). A chapter with `draft: true` is excluded from production navigation and routes.

When adding or renaming a chapter, update `ruleNavigation` in [`src/data/site.ts`](src/data/site.ts) so the sidebar and chapter-to-chapter navigation stay intentional.

## Project structure

```text
public/                 Static assets and social image
src/components/         Shared navigation and card components
src/content/rules/      Markdown rule chapters
src/data/               Site metadata and navigation
src/layouts/            Base and rules page layouts
src/pages/              Astro routes
src/styles/             Global responsive design system
```

## Deployment

Pushes to `main` are deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). For another static host, run `npm run build` and deploy the generated `dist/` directory.

If the production URL changes, update `site` and `base` in `astro.config.mjs` so canonical URLs, the sitemap, and generated links use the correct origin.
