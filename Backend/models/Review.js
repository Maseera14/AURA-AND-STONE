// Backend/models/Review.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    professionalNode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional',
        required: true
    },
    reviewerName: { type: String, required: true },
    numericalScore: { type: Number, required: true, min: 1, max: 5 },
    critiqueText: { type: String, required: true },
    verifiedExecution: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Review', reviewSchema);