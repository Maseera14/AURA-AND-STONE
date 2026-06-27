// Backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true }, // Encrypted hash buffer
    accountTier: {
        type: String,
        enum: ['Pro Essential', 'Custom Elite Model', 'Enterprise'],
        default: 'Pro Essential'
    },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);