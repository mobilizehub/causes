# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router and MobilizeHub.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://github.com/mobilizehub/causes/tree/main/default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmobilizehub%2Fcauses&env=MOBILIZEHUB_API_KEY,MOBILIZEHUB_ORG_ID)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
- ↗️ Integration with [MobilizeHub](https://mobilizehb.com)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Set up env

Create an organization in MobilizeHub and an API key. Add API key and organization id to .env file:

```
MOBILIZEHUB_API_KEY=
MOBILIZEHUB_ORG_ID=
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

