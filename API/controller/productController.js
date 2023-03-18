const product = require('../model/productModel');

module.exports = {
  getProducts(req, res) {
    try {
      product.getProducts(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  getProduct(req, res)  {
    try {
      product.getProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  createProduct(req, res) {
    try {
      product.createProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  updateProduct(req, res) {
    try {
      product.updateProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  deleteProduct(req, res) {
    try {
      product.deleteProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
}