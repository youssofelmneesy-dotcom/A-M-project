
  # A&M Barbershop

  Frontend (Vite + React) and backend API (Express + MongoDB).

  ## 1) Frontend local run

  1. `npm install`
  2. `npm run dev`

  ## 2) Backend local run

  1. `cd backend`
  2. `npm install`
  3. Copy `.env.example` to `.env`
  4. Fill `MONGODB_URI`, `JWT_SECRET`, and `CORS_ORIGIN`
  5. `npm run dev`

  Details: `backend/README.md`

  ## 3) Production deployment (no local database)

  ### Database: MongoDB Atlas

  1. Create an Atlas cluster.
  2. Create a DB user.
  3. Allow network access from your server provider.
  4. Copy connection string to backend env (`MONGODB_URI`).

  ### Backend: Render

  1. Push repository to GitHub.
  2. In Render, create service from blueprint using `backend/render.yaml`.
  3. Set env vars:
    - `MONGODB_URI`
    - `JWT_SECRET`
    - `CORS_ORIGIN` (frontend domain)
  4. Deploy and copy backend URL.

  ### Frontend: Netlify

  1. Import repository in Netlify.
  2. Build command: `npm run build`
  3. Publish directory: `dist`
  4. Netlify config is already prepared in `netlify.toml`.
  5. If needed later, set `VITE_API_BASE_URL` from `.env.example`.

  ## 4) Quick temporary public link

  You can expose local frontend quickly using localtunnel:

  `npx localtunnel --port 5174`

  This link is temporary and changes when terminal/session stops.
  