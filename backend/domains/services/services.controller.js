const asyncHandler = require("../../utils/async-handler");
const Service = require("./service.model");

const listServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ isActive: true }).sort({ category: 1, name: 1 });
  res.status(200).json(services);
});

const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
});

module.exports = {
  listServices,
  createService,
};
