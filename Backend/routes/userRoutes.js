// Backend/routes/userRoutes.js
import express from 'express';
import { getDashboardMetrics } from '../controllers/userController.js';

const router = express.Router();

// Secure tracking telemetry route mapping
router.route('/dashboard').get(getDashboardMetrics);

export default router;