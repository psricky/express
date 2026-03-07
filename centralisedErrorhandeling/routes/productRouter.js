const express=require('express');
const router=express.Router();
const productController=require('../controllers/productController');


router.get('/:id',productController.fetchProduct);

router.post('/',productController.postProduct);

module.exports=router;