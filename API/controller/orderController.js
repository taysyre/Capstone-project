const order = require('../model/orderModel');

module.exports = {
  getOrder(req, res) {
    try {
      product.getOrder(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  getOrders(req, res)  {
    try {
      order.getOrders(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  addToCart(req, res) {
    try {
      order.addToCart(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  // updateProduct(req, res) {
  //   try {
  //     product.updateProduct(req, res)
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send(error);
  //   }
  // },
  // deleteProduct(req, res) {
  //   try {
  //     product.deleteProduct(req, res)
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send(error);
  //   }
  // },
}