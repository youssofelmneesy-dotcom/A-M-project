
  # Barbershop Booking Platform UI/UX

  This is a code bundle for Barbershop Booking Platform UI/UX. The original project is available at https://www.figma.com/design/nvYduRPhiNGTenudBOpOHM/Barbershop-Booking-Platform-UI-UX.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Firestore rules for bookings

  A rules file is included at `firestore.rules` to secure the `bookings` collection.

  Deploy it with Firebase CLI:

  1. `npm i -g firebase-tools`
  2. `firebase login`
  3. `firebase init firestore` (if this project is not initialized yet)
  4. `firebase deploy --only firestore:rules`
  