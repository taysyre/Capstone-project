const express = require('express');
const router = express.Router();
const controller = require('../controller/productController')

router.get('/products', controller.getProducts);

router.get('/products/:id', controller.fetchProductById);

router.get('/product/category/:id', controller.fetchProductByCatId)

router.post('/products', bodyParser.json(), controller.createProduct);

router.patch('/products/:id', bodyParser.json(), controller.updateProduct);

router.put('/products/:id', bodyParser.json(), controller.updateProduct);

router.delete('/products/:id', controller.deleteProduct);
module.exports = router