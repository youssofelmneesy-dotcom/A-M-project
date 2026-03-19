const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../../utils/async-handler");
const User = require("../users/user.model");

function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "fullName, email, and password are required." });
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    return res.status(409).json({ message: "Email already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
    phone,
    role: "customer",
  });

  const token = signToken(user._id);

  res.status(201).json({
    message: "User registered successfully",
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required." });
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const token = signToken(user._id);

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = {
  register,
  login,
};
