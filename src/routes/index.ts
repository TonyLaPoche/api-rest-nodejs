import { Router } from 'express';
import { createExemple, getExemples, getExemple, updateExemple, deleteExemple } from '../controllers/exempleController';

export const router = Router();

router.post('/exemples', createExemple);
router.get('/exemples', getExemples);
router.get('/exemples/:id', getExemple);
router.put('/exemples/:id', updateExemple);
router.delete('/exemples/:id', deleteExemple);