const express=require('express');
const app=express();
const port=3000;

const productRoutes=require('./Routes/productRoute');

app.use(express.static('public'));

app.use(express.json());

app.use('/api/products', productRoutes);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});