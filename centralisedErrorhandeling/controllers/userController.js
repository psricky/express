const{sendResponse,sendErrorResponse} =require('../utils/response');

const fetchUser=(req,res)=>{
    const user=req.params.id;

    if(user>10){
        return sendErrorResponse(res, {message:'User not found',statusCode:404});
    }

    return sendResponse(res,user,200); 

}

const postUser=(req,res)=>{

    const {name,email}=req.body;

    if(!email || !name){

    return sendErrorResponse(res,{message:'Name and email are required',statusCode:400});
    }
    const user={id:1,name,email};

    return sendResponse(res,user,201);
}

module.exports={
    fetchUser,
    postUser
};