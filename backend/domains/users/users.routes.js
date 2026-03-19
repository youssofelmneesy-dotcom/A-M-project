const express = require("express");
const { getProfile, listUsers } = require("./users.controller");
const { protect, requireAdmin } = require("../../middleware/auth");

const router = express.Router();

router.get("/me", protect, getProfile);
router.get("/", protect, requireAdmin, listUsers);

module.exports = router;
