const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartroutes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});