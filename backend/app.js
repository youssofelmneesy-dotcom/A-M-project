const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./domains/auth/auth.routes");
const userRoutes = require("./domains/users/users.routes");
const barberRoutes = require("./domains/barbers/barbers.routes");
const serviceRoutes = require("./domains/services/services.routes");
const bookingRoutes = require("./domains/bookings/bookings.routes");
const { notFoundHandler, errorHandler } = require("./middleware/error-handler");

const app = express();

const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : ["*"];

app.use(helmet());
app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/barbers", barberRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
