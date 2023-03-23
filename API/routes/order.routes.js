
const express = require('express');
const router = express.Router();
const controller = require('../controller/orderController');

router.get('/orders', controller.fetchOrders);

router.get('/orders/:id', controller.fetchOrderByUserId);

router.post('/orders', bodyParser.json(), controller.createOrder);

router.patch('/orders/:id', bodyParser.json(), controller.updateOrder);

router.put('/orders/:id', bodyParser.json(), controller.updateOrder);

router.delete('/orders/:id', controller.deleteOrder);

module.exports = router