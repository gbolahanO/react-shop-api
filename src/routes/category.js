import { Router } from 'express';

import categoryController from '../controllers/categoryController';
import { authMiddleware } from '../libs/utils';

let router = Router();

router.get('', categoryController.getAllCategories);

router.post('/create', authMiddleware,  categoryController.create);

router.put('/:id/edit', authMiddleware, categoryController.edit);

router.delete('/:id/delete', authMiddleware, categoryController.deleteCategory);

export default router;