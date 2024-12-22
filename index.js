import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routers/authRoutes.js'
import productRoute from './routes/productRoute.js';
import inventoryRoute from './routes/inventoryRoute.js';
import connectDB from './config.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


 app.use('/api/auth',authRoutes);
 app.use('/api/products', productRoute);
 app.use('/api/inventory', inventoryRoute);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});