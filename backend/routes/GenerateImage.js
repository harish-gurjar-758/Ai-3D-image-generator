import express from 'express';
import { generateImage } from '../controllers/GenerateImage';
const router = express.Router();

router.post("/", generateImage);

export default router;