import { Router } from 'express';

import productsController from '../controllers/productsController';
import { authMiddleware } from '../libs/utils';

let router = Router();

router.get('', productsController.getAllProducts);

router.get('/:categoryId/products', productsController.getProductsByCategory);

router.get('/:id/product', productsController.getSingleProduct);

router.post('/create', authMiddleware,  productsController.create);

router.put('/:productId/edit', authMiddleware, productsController.updateProduct);

router.delete('/:productId/delete', authMiddleware, productsController.deleteProduct);

export default router;