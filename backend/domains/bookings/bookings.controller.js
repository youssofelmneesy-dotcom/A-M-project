const asyncHandler = require("../../utils/async-handler");
const Booking = require("./booking.model");

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

const createBooking = asyncHandler(async (req, res) => {
  const { barberId, serviceId, date, time, notes } = req.body;

  if (!barberId || !serviceId || !date || !time) {
    return res.status(400).json({
      message: "barberId, serviceId, date, and time are required.",
    });
  }

  if (!DATE_REGEX.test(date) || !TIME_REGEX.test(time)) {
    return res.status(400).json({
      message: "Invalid date/time format. Use date YYYY-MM-DD and time HH:mm.",
    });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const bookingDate = new Date(date);
  if (Number.isNaN(bookingDate.getTime()) || bookingDate < today) {
    return res.status(400).json({
      message: "Booking date must be today or in the future.",
    });
  }

  try {
    const booking = await Booking.create({
      customerId: req.user._id,
      barberId,
      serviceId,
      date,
      time,
      notes,
      status: "confirmed",
    });

    const populated = await Booking.findById(booking._id)
      .populate("customerId", "fullName email")
      .populate("barberId", "name experienceYears rating")
      .populate("serviceId", "name price durationMinutes");

    return res.status(201).json(populated);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "This barber already has a booking in this date/time slot.",
      });
    }

    throw error;
  }
});

const listBookings = asyncHandler(async (req, res) => {
  const isAdmin = req.user.role === "admin";

  const query = isAdmin ? {} : { customerId: req.user._id };
  const bookings = await Booking.find(query)
    .sort({ createdAt: -1 })
    .populate("customerId", "fullName email")
    .populate("barberId", "name experienceYears rating")
    .populate("serviceId", "name price durationMinutes");

  res.status(200).json(bookings);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatuses = ["pending", "confirmed", "completed", "cancelled"];
  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value." });
  }

  const booking = await Booking.findById(id);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found." });
  }

  const isAdmin = req.user.role === "admin";
  const isOwner = booking.customerId.toString() === req.user._id.toString();

  if (!isAdmin && !isOwner) {
    return res.status(403).json({ message: "Not allowed to update this booking." });
  }

  booking.status = status;
  await booking.save();

  res.status(200).json(booking);
});

module.exports = {
  createBooking,
  listBookings,
  updateBookingStatus,
};
