
const path=require('path');

const getAllProducts=(req,res)=>{

    res.sendFile(path.join(__dirname,'..','view','product.html'));

};

const postProducts=(req,res)=>{
    const data=req.body;

    res.json({value:data.productName});
}

module.exports={
    getAllProducts,
    postProducts
};