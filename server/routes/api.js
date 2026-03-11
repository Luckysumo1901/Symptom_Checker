import express from 'express';
import { predictDisease, getAllSymptoms } from '../controllers/predictController.js';

const router = express.Router();

router.post('/predict', predictDisease);
router.get('/symptoms', getAllSymptoms);

export default router;
