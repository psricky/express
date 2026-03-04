const express=require('express');
const router=express.Router();

const productController=require('../Controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.postProducts);

module.exports=router;
