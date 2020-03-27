import { Router } from 'express';
import { Product } from '../models';
let router = Router();

router.get('', async (req, res) => {
  const products = await Product.findAll();
  res.json({ products });
});

router.get('/:categoryId/products', async (req, res) => {
  const { categoryId } = req.params;
  const products = await Product.findAll({
    where: {
      categoryId: categoryId
    }
  });
  res.json({ products });
});

router.get('/:id/single', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({
    where: {
      id: id
    }
  });
  res.json({ product });
});

router.post('/create', async (req, res) => {
  const { name, price, description, image, categoryId } = req.body;
  await Product.create({
    name,
    price,
    description,
    image,
    categoryId
  });
  res.json({
    success: 'Product created'
  });
});

router.put('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, categoryId } = req.body;

  await Product.update({
    name,
    price,
    description,
    image,
    categoryId
  }, {
    where: {
      id: id
    }
  });

  res.json({
    success: 'Product updated'
  });

});

router.delete('/:id/delete', async (req, res) => {
  const { id } = req.params;

  await Product.destroy({
    where: {
      id: id
    }
  });
});

export default router;