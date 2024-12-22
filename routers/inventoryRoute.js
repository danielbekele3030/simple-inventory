import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import { addInventory, getAllInventorys } from '../controllers/InventoryController.js';

const router = express.Router();

// Get all inventory items
router.get('/', verifyToken,getAllInventorys);

// Add a new inventory item
router.post('/', verifyToken,addInventory);

export default router;
