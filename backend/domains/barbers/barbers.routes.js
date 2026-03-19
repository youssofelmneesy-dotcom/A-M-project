const express = require("express");
const { listBarbers, createBarber } = require("./barbers.controller");
const { protect, requireAdmin } = require("../../middleware/auth");

const router = express.Router();

router.get("/", listBarbers);
router.post("/", protect, requireAdmin, createBarber);

module.exports = router;
