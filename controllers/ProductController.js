
import Product from '../models/Product.js';

// Get all products
export const getAllProducts= async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a new product
export const addProduct=async (req, res) => {
  const { name, category, price } = req.body;
  try {
    const newProduct = new Product({ name, category, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {addProduct,getAllProducts};
