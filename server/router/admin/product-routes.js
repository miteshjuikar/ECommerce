const express = require('express');

const { handleImageUpload, addProduct, fetchAllProducts,editProduct, deleteProduct } = require('../../controllers/admin/products-controller');

const { upload } = require('../../helpers/cloudinary');

const router = express.Router();

router.post('/upload-image', upload.single('my_file'), handleImageUpload);
router.post('/add', addProduct);
router.put('/edit', editProduct);
router.delete('/delete', deleteProduct);
router.get('/get', fetchAllProducts);


module.exports = router;