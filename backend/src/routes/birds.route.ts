import { Router } from 'express';
import BirdsController from '../controllers/birds.controller';

const router = Router();

router.get('/birds/:userId', BirdsController.getAllBirds);
router.get('/birds/:id', BirdsController.getBirdById);
router.post('/birds', BirdsController.createBird);
router.put('/birds/:id', BirdsController.updateBird);
router.delete('/birds/:id', BirdsController.deleteBird);

export default router;
