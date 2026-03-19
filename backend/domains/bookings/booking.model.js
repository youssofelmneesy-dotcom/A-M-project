const mongoose = require("mongoose");

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

const bookingSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    barberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Barber",
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: String,
      required: true,
      match: DATE_REGEX,
    },
    time: {
      type: String,
      required: true,
      match: TIME_REGEX,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "confirmed",
    },
    notes: {
      type: String,
      default: "",
      maxlength: 500,
    },
  },
  { timestamps: true, strict: "throw" }
);

bookingSchema.index({ barberId: 1, date: 1, time: 1 }, { unique: true });
bookingSchema.index({ customerId: 1, createdAt: -1 });

module.exports = mongoose.model("Booking", bookingSchema);
