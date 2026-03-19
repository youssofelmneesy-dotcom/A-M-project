const mongoose = require('mongoose');

const barberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bio: { type: String },
    specializations: { type: [String] },
    yearsOfExperience: { type: Number },
    hourlyRate: { type: Number },
    isAvailable: { type: Boolean, default: true },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    weeklySchedule: { type: Object },
}, { timestamps: true });

module.exports = mongoose.model('Barber', barberSchema);