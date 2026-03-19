const asyncHandler = require("../../utils/async-handler");
const Barber = require("./barber.model");

const listBarbers = asyncHandler(async (req, res) => {
  const barbers = await Barber.find({ isActive: true }).sort({ rating: -1 });
  res.status(200).json(barbers);
});

const createBarber = asyncHandler(async (req, res) => {
  const barber = await Barber.create(req.body);
  res.status(201).json(barber);
});

module.exports = {
  listBarbers,
  createBarber,
};
