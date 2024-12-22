
import Inventory from '../models/InventoryModel.js';
import Product from '../models/ProductModel.js';

// Get all inventory items
export const getAllInventorys=async (req, res) => {
  try {
    const inventoryItems = await Inventory.find().populate('product');
    res.json(inventoryItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a new inventory item
export const addInventory=async (req, res) => {
  const { productId, quantity, location } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const newInventoryItem = new Inventory({ product: productId, quantity, location });
    await newInventoryItem.save();
    res.status(201).json(newInventoryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {addInventory};
