const fetchAllProducts=(req,res)=>{
    return "Fetching all products";   
};

const addProduct=(req,res)=>{
    return "Adding a new product";
};

const getProductWithId=(req,res)=>{
    const userId=req.id;
    return (`Fetching product with ID: ${userId}`);
};

module.exports={
    fetchAllProducts,
    addProduct,
    getProductWithId
};