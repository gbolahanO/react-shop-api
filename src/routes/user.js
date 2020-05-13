import { Router } from 'express';

import userController from '../controllers/userController';

let router = Router();

router.get('', userController.getAllUsers);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

export default router;