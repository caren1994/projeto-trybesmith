import express from 'express';
import productsRouter from './routes/products.routes';
import userRouter from './routes/user.routes';
import orderRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
