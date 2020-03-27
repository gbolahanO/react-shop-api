import { Router } from 'express';
import { Category, Product } from '../models';
let router = Router();

router.get('', async (req, res) => {
  const categories = await Category.findAll({
    include: Product
  });
  res.json({ categories });
});

router.post('/create', async (req, res) => {
  const { name } = req.body;
  await Category.create({
    name: name
  });
  res.json({
    success: 'Category created'
  });
});

router.put('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await Category.update({ name: name }, {
    where: {
      id: id
    }
  });

  res.json({
    success: 'Category updated'
  });

});

router.delete('/:id/delete', async (req, res) => {
  const { id } = req.params;

  await Category.destroy({
    where: {
      id: id
    }
  });
});

export default router;