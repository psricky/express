const express=require('express');
const app=express();
const port=3000;

const userRoutes=require('./routes/userRouter');
const productRoutes=require('./routes/productRouter');
const cartRoutes=require('./routes/cartRouter');

app.use(express.json());

app.use('/user',userRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);


app.listen(port,()=>{
    console.log(`Server is running on {port}`)
});