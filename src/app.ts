import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
