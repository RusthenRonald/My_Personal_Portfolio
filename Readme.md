# my-portfolio

> Personal portfolio with a React frontend and an Express backend, organized as an npm monorepo.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat&logo=resend&logoColor=white)

---

## Monorepo structure

```
my-portfolio/
├─ packages/
│  ├─ web/        # Vite + React + TypeScript + Tailwind
│  ├─ api/        # Express + Zod + Resend
│  └─ shared/     # Zod schemas + shared types
├─ package.json   # workspace root
└─ README.md
```

---

## Prerequisites

- Node.js >= 20
- npm >= 10
- [Resend](https://resend.com) account and API key

---

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/YourUsername/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
# Windows (PowerShell)
Copy-Item packages/api/.env.example packages/api/.env
Copy-Item packages/web/.env.example packages/web/.env

# macOS / Linux
cp packages/api/.env.example packages/api/.env
cp packages/web/.env.example packages/web/.env
```

Fill in the values in each `.env` file (see [Environment variables](#-environment-variables) below).

### 4. Run in development

```bash
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3001 |

---

## Environment variables

### `packages/api/.env`

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=you@yourdomain.com
PORT=3001
```

### `packages/web/.env`

```env
VITE_API_URL=http://localhost:3001
```

> Never commit `.env` files. They are listed in `.gitignore`.

---

## Scripts

Run from the **repository root**.

```bash
npm run dev        # start web + api in parallel
npm run build      # build both packages
npm run lint       # lint all packages
npm run format     # format all packages
```

Or target a single package:

```bash
npm run dev -w web
npm run dev -w api
```

---

## Deployment

| Package | Host | Notes |
|---|---|---|
| `web` | Vercel / Netlify | Set `VITE_API_URL` to your deployed API URL |
| `api` | Render / Railway | Set env vars in the host dashboard |

---

## License

MIT
