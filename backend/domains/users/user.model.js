const mongoose = require("mongoose");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: EMAIL_REGEX,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: String,
      default: "",
      maxlength: 30,
    },
    role: {
      type: String,
      enum: ["customer", "barber", "admin"],
      default: "customer",
    },
  },
  { timestamps: true, strict: "throw" }
);

userSchema.index({ role: 1 });

module.exports = mongoose.model("User", userSchema);
