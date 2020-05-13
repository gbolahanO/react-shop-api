import { Product, Category } from '../models';


export const getAllCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json({ categories });
};

export const create = async (req, res) => {
  const { name } = req.body;
  await Category.create({
    name: name
  });
  res.json({
    success: 'Category created'
  });
};

export const edit = async (req, res) => {
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

};

export const deleteCategory =  async (req, res) => {
  const { id } = req.params;

  await Category.destroy({
    where: {
      id: id
    }
  });

  res.json({
    success: 'Category deleted'
  });
};

export default {
  getAllCategories,
  create,
  edit,
  deleteCategory
}
