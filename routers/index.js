import express from 'express';
import { Login, getMahasiswa } from '../controllers/mahasiswa.js';
import { VerifyToken } from '../middleware/VerifyToken.js';
const router = express.Router();
router.post('/login', Login);
router.get('/me', VerifyToken, getMahasiswa);

export default router;
