const express = require('express');
const app = express();
const port = 3000;

const usersRoutes = require('./Routes/usersRoutes');
const productsRoutes = require('./Routes/productsRoutes');
const cartRoutes = require('./Routes/cartRoute');

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});