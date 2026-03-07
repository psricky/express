const express=require('express');
const router=express.Router();
const productController=require('../controllers/cartController');


router.get('/:id',productController.fetchCart);


module.exports=router;