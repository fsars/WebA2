import express from 'express';
import projectCtrl from '../controllers/project.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.route('/')
    .get(projectCtrl.list)
    .post(authMiddleware.requireSignin, projectCtrl.create)
    .delete(authMiddleware.requireSignin, projectCtrl.removeAll);

router.route('/:id')
    .get(projectCtrl.read)
    .put(authMiddleware.requireSignin, projectCtrl.update)
    .delete(authMiddleware.requireSignin, projectCtrl.remove);

export default router;
