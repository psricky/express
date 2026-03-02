const express=require('express');
const app=express();
const port=3000;

const ordersRouter=require('./routes/orders');

app.use('/orders',ordersRouter); // Integrating the router inside express server

const usersRouter=require('./routes/users');

app.use('/users',usersRouter);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});