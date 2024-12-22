import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
});

export default mongoose.model('Inventory', inventorySchema);
