const{sendResponse,sendErrorResponse} =require('../utils/response');

const fetchCart=(req,res)=>{
    const userId=req.params.id;

    if(userId>10){
        return sendErrorResponse(res, {message:'User not found',statusCode:404});
    }

    return sendResponse(res,userId,200); 

}


module.exports={fetchCart};