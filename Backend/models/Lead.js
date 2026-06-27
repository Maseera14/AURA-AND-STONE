// Backend/models/Lead.js
import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    secureChannel: { type: String, required: true }, // Client email
    projectScope: { type: String, required: true }, // Detailed manifesto text
    targetLocation: { type: String, required: true },
    assignedPro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional',
        default: null
    }, // Reference linkage to professional node
    status: {
        type: String,
        enum: ['Ingested into Matching Queue', 'Under Review', 'Connected', 'Closed'],
        default: 'Ingested into Matching Queue'
    },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', leadSchema);