const fetchCartForUser=(req,res)=>{
    const userId=req.params.id;
    res.json(`Fetching cart for user with ID: ${userId}`);   
};

const addToCartWithUserId=(req,res)=>{
    const userId=req.params.id;
    res.json(`Adding product to cart for user with ID: ${userId}`);
};

module.exports={
    fetchCartForUser,
    addToCartWithUserId
};

