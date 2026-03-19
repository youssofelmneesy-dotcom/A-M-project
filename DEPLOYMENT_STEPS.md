# Deployment Steps (Atlas + Render + Netlify)

## 1) MongoDB Atlas

1. Create Atlas account and cluster.
2. Create DB user (username/password).
3. In Network Access, allow your server provider or temporarily `0.0.0.0/0`.
4. Copy connection string.

## 2) Deploy Backend on Render

1. Push project to GitHub.
2. In Render: New + > Blueprint.
3. Select repository (uses `backend/render.yaml`).
4. Set environment variables on Render service:
   - `MONGODB_URI` = Atlas URI
   - `JWT_SECRET` = long random secret
   - `JWT_EXPIRES_IN` = `7d`
   - `CORS_ORIGIN` = your Netlify frontend URL (later)
   - `ADMIN_EMAIL` = admin@ambarbershop.com (or your email)
   - `ADMIN_PASSWORD` = strong password
   - `ADMIN_NAME` = A&M Admin
5. Deploy.
6. Copy backend URL (example: `https://am-barbershop-api.onrender.com`).

## 3) Seed Data (one time)

In Render Shell (or locally using same env values):

```bash
cd backend
npm run seed
```

## 4) Deploy Frontend on Netlify

1. Import GitHub repo in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Set environment variable:
   - `VITE_API_BASE_URL` = `https://<your-render-domain>/api`
5. Deploy and copy frontend URL.

## 5) Final CORS Update

1. Go back to Render env vars.
2. Set `CORS_ORIGIN` to your exact Netlify URL.
3. Redeploy backend.

## 6) Smoke Test

1. Open frontend URL.
2. Register a user and login.
3. Verify bookings load and create successfully.
4. Test `/api/health` from backend URL.

## Notes

- Frontend now uses backend JWT auth and API endpoints.
- Google/Firebase auth buttons are disabled in backend mode intentionally.
- Temporary localtunnel links are not needed after deployment.
