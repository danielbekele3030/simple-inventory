import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import { addProduct, getAllProducts } from '../controllers/ProductController.js';
const router = express.Router();

// Get all products
router.get('/', verifyToken,getAllProducts);

// Add a new product
router.post('/', verifyToken,addProduct);

export default router;
