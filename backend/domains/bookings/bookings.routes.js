const express = require("express");
const {
  createBooking,
  listBookings,
  updateBookingStatus,
} = require("./bookings.controller");
const { protect } = require("../../middleware/auth");

const router = express.Router();

router.use(protect);

router.get("/", listBookings);
router.post("/", createBooking);
router.patch("/:id/status", updateBookingStatus);

module.exports = router;
