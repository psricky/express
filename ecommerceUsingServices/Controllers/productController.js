
const producService = require('../Services/productServices');

const getAllProducts = (req, res) => {
    
    res.json(producService.fetchAllProducts(req, res));

};

const createProduct = (req, res) => {
    
    res.json(producService.addProduct(req, res)); 
};

const getProductById = (req, res) => {
    res.json(producService.getProductWithId(req.params, res));
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
