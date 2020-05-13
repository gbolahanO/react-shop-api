import jwt from 'jsonwebtoken';
import { Product, Category } from '../models';
import { decryptToken } from '../libs/utils';

const getAllProducts = async (req, res) => {
  const products = await Product.findAll({
    include: Category
  });
  res.json({ products });
}

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const products = await Product.findAll({
    where: {
      categoryId: categoryId
    }
  });
  res.json({ products });
}

const getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findOne({
    where: {
      id: productId
    },
    include: Category
  });
  res.json({ product });
}

const create = async (req, res) => {
  const { name, price, description, image, categoryId } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  try {
    let { id } = decryptToken(token);
    await Product.create({
      name,
      price,
      description,
      image,
      categoryId,
      userId: id
    });
    res.json({
      success: 'Product created'
    });
  } catch (error) {
    console.log(error.message)
  }


}

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price, description, image, categoryId } = req.body;

  const token = req.headers.authorization.split(' ')[1];
  try {
    let data = decryptToken(token);
    await Product.update({
      name,
      price,
      description,
      image,
      categoryId
    }, {
      where: {
        id: productId,
        userId: data.id
      }
    });
  } catch (error) {
    console.log(error.message)
  }

  res.json({
    success: 'Product updated'
  });

}

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  try {
    let data = decryptToken(token);
    await Product.destroy({
      where: {
        id: productId,
        userId: data.id
      }
    });
  } catch (error) {
    console.log(error.message);
  }

  res.json({
    success: 'Product deleted'
  });
}


export default {
  getAllProducts,
  getProductsByCategory,
  getSingleProduct,
  create,
  updateProduct,
  deleteProduct
}