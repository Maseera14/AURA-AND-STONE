// Backend/routes/proRoutes.js
import express from 'express';
import { getProfessionals, getProfessionalById } from '../controllers/proController.js';

const router = express.Router();

// Route mapping for filtering clusters and fetching listings
router.route('/').get(getProfessionals);
router.route('/:id').get(getProfessionalById);

export default router;