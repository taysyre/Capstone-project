
const express = require('express');
const router = express.Router();
const controller = require('../controller/orderController');

router.get('/', (req, res) => {
  controller.getOrders(req, res)
});
router.post('/', (req, res) => {
  controller.addToOrder(req, res)
})
router.get('/:id', (req, res) => {
  controller.getOrder(req, res)
})
// router.patch('/:id', (req, res) => {
//   controller.updateOrder(req, res)
// })
// router.delete('/:id', (req, res) => {
//   controller.deleteOrder(req, res)
// })

module.exports = router