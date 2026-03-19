# A&M Backend (Express + MongoDB)

## 1) Setup (MongoDB Atlas)

1. Create MongoDB Atlas cluster and database user.
2. Copy `.env.example` to `.env`.
3. Put Atlas connection string in `MONGODB_URI`.
4. Set `JWT_SECRET` and `CORS_ORIGIN`.
3. Install dependencies:

```bash
cd backend
npm install
```

5. Run server:

```bash
npm run dev
```

Server runs on `http://localhost:5000` by default.

## 1.1) Optional: Local MongoDB with Docker

If MongoDB is not installed locally:

```bash
cd backend
npm run db:up
```

Then seed initial data:

```bash
npm run seed
```

## 2) API Endpoints

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me` (token required)
- `GET /api/users` (admin only)
- `GET /api/barbers`
- `POST /api/barbers` (admin only)
- `GET /api/services`
- `POST /api/services` (admin only)
- `GET /api/bookings` (token required)
- `POST /api/bookings` (token required)
- `PATCH /api/bookings/:id/status` (owner/admin)

## 3) Sample Auth Header

```http
Authorization: Bearer <jwt_token>
```

## 4) Deploy API (Render)

This repo includes `backend/render.yaml`.

1. Push code to GitHub.
2. In Render: New + > Blueprint.
3. Select repository.
4. Set required env vars (`MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`).
5. Deploy.
