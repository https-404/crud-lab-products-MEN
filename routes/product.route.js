const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');
const {AddProductValidation, updateProductValidation} = require('../middleware/productValidation.js');


router.get('/', getProducts);
router.get("/:id", getProduct);

router.post("/add",AddProductValidation, createProduct);

// update a product
router.put("/update/:id",updateProductValidation, updateProduct);

// delete a product
router.delete("/del/:id", deleteProduct);



module.exports = router;