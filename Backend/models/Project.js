// Backend/models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    leadFirm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional',
        required: true
    }, // Contract tracking linkage
    progress: { type: Number, default: 0, min: 0, max: 100 }, // Telemetry calculation metrics
    status: {
        type: String,
        required: true,
        default: 'Masonry Frame'
    },
    budgetAllocated: { type: Number },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', projectSchema);