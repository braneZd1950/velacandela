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
