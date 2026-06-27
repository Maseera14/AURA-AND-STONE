// Backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import apiRouter from './routes/api.js';

// Configuration Variables loading
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database Environment
connectDB();

// Global Middlewares Configurations
app.use(cors({ origin: '*' })); // Allows smooth cross-origin requests from frontend port
app.use(express.json()); // Parses incoming json stream structures
app.use(express.urlencoded({ extended: true }));

// Core API Gateway Prefix Setup
app.use('/api/v1', apiRouter);

// Base System Check Route
app.get('/', (req, res) => {
    res.status(200).json({
        status: "Active",
        message: "Aura & Stone High-Tier API Gateway operations running flawlessly."
    });
});

// Start listening execution threads
app.listen(PORT, () => {
    console.log(`\x1b[33m%s\x1b[0m`, `[SERVER] Processing threads streaming live on port : ${PORT}`);
});