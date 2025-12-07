import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.route('/')
    .get(contactCtrl.list)
    .post(contactCtrl.create)
    .delete(authMiddleware.requireSignin, contactCtrl.removeAll);

router.route('/:id')
    .get(contactCtrl.read)
    .put(authMiddleware.requireSignin, contactCtrl.update)
    .delete(authMiddleware.requireSignin, contactCtrl.remove);

export default router;
