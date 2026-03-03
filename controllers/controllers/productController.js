const getAllProducts = (req, res) => {
    res.json('Fetching all products');
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.json(`Fetching product with ID: ${productId}`);
};

const addProduct = (req, res) => {
    res.json('Adding a new product');
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};