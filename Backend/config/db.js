// Backend/config/db.js
import mongoose from 'mongoose';

/**
 * Initializes a secure connection pool to the MongoDB instance
 * specified via the environment configurations variables.
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // Cyan color logging for system readiness tracking
        console.log(`\x1b[36m%s\x1b[0m`, `[DATABASE] MongoDB Cluster Connected: ${conn.connection.host}`);
    } catch (error) {
        // Red color logging for critical errors tracking
        console.error(`\x1b[31m%s\x1b[0m`, `[CRITICAL ERROR] DB Connection Failed: ${error.message}`);
        process.exit(1); // Force graceful system crash on core infrastructural failure
    }
};

export default connectDB;