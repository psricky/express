const express=require('express');
const app=express();
const port=3000;

const productsRoutes=require('./Routes/productRoutes');

app.use('/api/products',productsRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
