const express = require('express');
const app = express();
const port = 3000;  

const productsRoutes = require('./routes/productsRoutes');

app.use('/products', productsRoutes);





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});