const fetchAllProducts=(req,res)=>{
    res.json("Fetching all products");   
};

const addProduct=(req,res)=>{
    res.json("Adding a new product");
};

const getProductWithId=(req,res)=>{
    const productId=req.params.id;
    res.json(`Fetching product with ID: ${productId}`);
};

module.exports={
    fetchAllProducts,
    addProduct,
    getProductWithId
};