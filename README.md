# Liz French portfolio

A small React and Vite portfolio that keeps the original four page URLs and visual identity.

## Local development

Requires Node.js 20.19 or newer and pnpm 11.

```sh
pnpm install
pnpm dev
```

Create the production site with `pnpm build`; inspect it locally with `pnpm preview`. Run the
style and correctness checks with `pnpm lint`.

## GitHub Pages

The Pages workflow builds and deploys from `main`. Changes on the redesign branch do not publish
to the live site. To publish the new version, merge the branch into `main` and configure the
repository’s Pages source to **GitHub Actions** if it is not already set that way.
