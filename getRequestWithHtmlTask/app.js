const express=require('express');
const app=express();
const port=3000;

const productRoutes=require('./Routes/productRoute');

app.use('/products',productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});