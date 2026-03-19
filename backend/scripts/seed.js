const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const Barber = require("../domains/barbers/barber.model");
const Service = require("../domains/services/service.model");
const User = require("../domains/users/user.model");

dotenv.config();

const barbers = [
  { name: "Michael Stone", experienceYears: 10, rating: 4.9, specialties: ["Fade", "Classic"] },
  { name: "David Crown", experienceYears: 8, rating: 4.8, specialties: ["Beard", "Styling"] },
  { name: "Alex Knight", experienceYears: 12, rating: 4.9, specialties: ["Color", "Treatment"] },
];

const services = [
  { name: "Classic Haircut", description: "Professional haircut with styling", price: 35, durationMinutes: 30, category: "Haircuts" },
  { name: "Beard Trim", description: "Precision beard shaping and trim", price: 25, durationMinutes: 20, category: "Beard" },
  { name: "Hair + Beard", description: "Complete style refresh", price: 55, durationMinutes: 50, category: "Combo" },
  { name: "Hair Protein Treatment", description: "Deep conditioning and strengthening", price: 80, durationMinutes: 60, category: "Treatments" },
];

async function seed() {
  try {
    await connectDB();

    await Barber.deleteMany({});
    await Service.deleteMany({});

    await Barber.insertMany(barbers);
    await Service.insertMany(services);

    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      const adminEmail = process.env.ADMIN_EMAIL.toLowerCase();
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      await User.findOneAndUpdate(
        { email: adminEmail },
        {
          fullName: process.env.ADMIN_NAME || "System Admin",
          email: adminEmail,
          password: hashedPassword,
          role: "admin",
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    console.log("Seed complete: barbers/services inserted and admin synced.");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
}

seed();
