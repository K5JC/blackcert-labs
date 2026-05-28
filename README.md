# blackcert-labs Monorepo

This monorepo contains two independent Next.js projects under a shared root.

## Structure

```
blackcert-labs/
├── authlokr/   # AuthLokr marketing/landing site
└── blackcert/  # BlackCert Consulting site
```

## Projects

### `authlokr/`
AuthLokr landing page built with Next.js, Tailwind CSS, and TypeScript. Exports as a static site.

### `blackcert/`
BlackCert Consulting site built with Next.js, Tailwind CSS, and TypeScript. Exports as a static site.

## Getting Started

Each project is self-contained. Install dependencies and run from within its subfolder:

```bash
cd authlokr   # or cd blackcert
npm install
npm run dev
```

## Building for Production

Both projects are configured with `output: 'export'` for static site generation:

```bash
npm run build
```

Output is written to the `out/` directory and can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).
