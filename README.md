# Vela Candela

E-commerce web aplikacija za ručno izrađene svijeće (prema projektnoj dokumentaciji).

## Struktura

- `frontend/` — Vite + React + TypeScript + Tailwind CSS
- `backend/` — Express API + Prisma (PostgreSQL)

## Brzi start

```bash
# Instalacija
npm run install:all

# Frontend (http://localhost:5173)
cd frontend
cp .env.example .env.local
npm run dev

# Backend (http://localhost:3000) — u drugom terminalu
cd backend
cp .env.example .env
# postavite DATABASE_URL i ostale varijable
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

## Tehnologije

| Sloj | Stack |
|------|--------|
| Frontend | React 19, Vite, TypeScript, Tailwind v4, React Router, Zustand, Framer Motion |
| Backend | Node.js, Express, Prisma, JWT, Stripe (priprema) |

## Deploy na Render (statička stranica)

1. Na [Render](https://render.com) → **New** → **Static Site**
2. Povežite repozitorij: `braneZd1950/velacandela`
3. Postavke:

| Polje | Vrijednost |
|-------|------------|
| **Root Directory** | `frontend` |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist` |

4. **Ne koristite Yarn** — uklonite `yarn install; yarn build` ako je ručno upisano.
5. **Environment** → `NODE_VERSION` = `22.14.0` (opcionalno)
6. Za React Router: uključene su rewrite pravila u `render.yaml` i `frontend/public/_redirects`

Alternativa: **New** → **Blueprint** → odaberite repo (koristi `render.yaml` u korijenu).
