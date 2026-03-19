const asyncHandler = require("../../utils/async-handler");
const User = require("./user.model");

const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const listUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  res.status(200).json(users);
});

module.exports = {
  getProfile,
  listUsers,
};
