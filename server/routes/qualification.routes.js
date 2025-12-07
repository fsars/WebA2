import express from 'express';
import qualificationCtrl from '../controllers/qualification.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.route('/')
    .get(qualificationCtrl.list)
    .post(authMiddleware.requireSignin, qualificationCtrl.create)
    .delete(authMiddleware.requireSignin, qualificationCtrl.removeAll);

router.route('/:id')
    .get(qualificationCtrl.read)
    .put(authMiddleware.requireSignin, qualificationCtrl.update)
    .delete(authMiddleware.requireSignin, qualificationCtrl.remove);

export default router;
