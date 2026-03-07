const{sendResponse,sendErrorResponse} =require('../utils/response');

const fetchProduct=(req,res)=>{
    const product=req.params.id;

    if(product>10){
        return sendErrorResponse(res, {message:'Product not found',statusCode:404});
    }

    return sendResponse(res,product,200); 

}

const postProduct=(req,res)=>{

    const {name,description}=req.body;

    if(!description || !name){

    return sendErrorResponse(res,{message:'Name and description are required',statusCode:400});
    }
    const product={id:1,name,description};

    return sendResponse(res,product,201);
}

module.exports={
    fetchProduct,
    postProduct
};