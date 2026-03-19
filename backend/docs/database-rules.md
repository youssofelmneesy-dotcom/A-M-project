# Database Rules (MongoDB)

## Core Rules

1. `users.email` is unique and normalized to lowercase.
2. Public registration always creates `role=customer`.
3. `barbers.name` is unique.
4. `services` are unique by `(name, category)`.
5. `bookings` are unique by `(barberId, date, time)` to prevent double-booking.
6. Booking `date` format must be `YYYY-MM-DD`.
7. Booking `time` format must be `HH:mm` (24-hour).
8. Booking in the past is rejected at API level.
9. Unknown fields are rejected by strict schemas.
10. Admin account is provisioned from env values via `npm run seed`.

## Security Rules

1. JWT auth required for user, booking, and admin operations.
2. Only admin can list all users, create barbers, create services.
3. Booking status can be updated only by owner or admin.
4. Public API cannot assign admin role during register.

## Recommended Atlas Settings

1. Restrict IP access to your server provider.
2. Use separate DB users for app and admin tasks.
3. Rotate DB password and JWT secret periodically.
4. Enable backups/snapshots on cluster.
