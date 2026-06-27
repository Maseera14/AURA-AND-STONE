// Backend/routes/leadRoutes.js
import express from 'express';
import { createLead } from '../controllers/leadController.js';

const router = express.Router();

// Direct endpoint routing for project stream ingestion
router.route('/').post(createLead);

export default router;