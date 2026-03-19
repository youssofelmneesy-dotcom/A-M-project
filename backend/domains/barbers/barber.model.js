const mongoose = require("mongoose");

const barberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    experienceYears: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 4.5,
    },
    specialties: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, strict: "throw" }
);

barberSchema.index({ name: 1 }, { unique: true });
barberSchema.index({ rating: -1 });

module.exports = mongoose.model("Barber", barberSchema);
