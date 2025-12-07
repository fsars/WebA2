import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Auth routes (public)
router.post('/signin', userCtrl.signin);
router.get('/signout', userCtrl.signout);

// CRUD routes
router.route('/')
    .get(userCtrl.list)
    .post(userCtrl.create)
    .delete(authMiddleware.requireSignin, userCtrl.removeAll);

router.route('/:id')
    .get(userCtrl.read)
    .put(authMiddleware.requireSignin, userCtrl.update)
    .delete(authMiddleware.requireSignin, userCtrl.remove);

export default router;
