// Backend/models/Professional.js
import mongoose from 'mongoose';

const professionalSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    rating: { type: Number, default: 5.0, min: 1.0, max: 5.0 },
    projectsCount: { type: Number, default: 0 },
    specialty: { type: String, required: true },
    location: { type: String, required: true }, // Spatial region match cluster
    startingBudget: { type: Number, required: true }, // Base tier budget numeric
    sector: {
        type: String,
        required: true,
        enum: ['Residential Megastructures', 'Commercial High-Rise', 'Heritage Restoration', 'Sustainable/Green Architecture', 'Bespoke Landscape Design']
    },
    bio: { type: String, required: true },
    image: { type: String }, // Main profile/card image URL
    gallery: [{ type: String }], // Array of project image URLs
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Professional', professionalSchema);