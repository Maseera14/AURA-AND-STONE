// Backend/routes/api.js
import express from 'express';
import proRoutes from './proRoutes.js';
import leadRoutes from './leadRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// Assigning specific endpoint contexts to underlying routes
router.use('/professionals', proRoutes);
router.use('/leads', leadRoutes);
router.use('/users', userRoutes);

export default router;