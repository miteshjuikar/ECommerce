const Product = require("../../models/product");

const getFilteredProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        console.log(products);
        res.status(200).json({
            success: true,
            data: products,
        })
        

    } catch (error) {
        console.log("Product Controller", error);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        })
        
    }
}

module.exports = { getFilteredProducts }