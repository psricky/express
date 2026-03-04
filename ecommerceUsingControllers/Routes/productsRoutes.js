
const express=require('express');
const router=express.Router();
const productController=require('../Controllers/productController');

router.get('/',productController.fetchAllProducts);

router.post('/',productController.addProduct);      

router.get('/:id',productController.getProductWithId);

module.exports=router;