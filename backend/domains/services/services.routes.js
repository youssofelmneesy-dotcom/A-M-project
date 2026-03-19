const express = require("express");
const { listServices, createService } = require("./services.controller");
const { protect, requireAdmin } = require("../../middleware/auth");

const router = express.Router();

router.get("/", listServices);
router.post("/", protect, requireAdmin, createService);

module.exports = router;
