const con = require('../config')

module.exports = {
  getOrder(req, res) {
    const orderID = req.params.id
    con.query("SELECT * FORM orders JOIN products WHERE orderID = ? AND orders.prodID = products.prodID;", [orderID], (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  },
  getOrders(req, res) {
    const orderInfo = req.body
    con.query("SELECT * FORM `user ? cart`;", [orderInfo.userID], (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  },
  addToCart(req, res) {
    const orderData = req.body
    con.query("SELECT orderID FROM orders WHERE prodID = ?", [orderData.prodID], (err, result) => {
      if (err) throw err;
      if (result) {
        this.incrementOrder(req, res)
      } else {
        this.createOrder(orderData, res)
      }
    })
  },
  incrementOrder(req, res){
    con.query(
      "UPDATE orders SET quantity = quantity + 1;",
      (err) => {
        if (err) throw err;
        res.send({msg: "Order has been increased."})
      }
    )
  },
  createOrder(orderData, res) {
    con.query(
      "INSERT INTO orders set ?", 
      [orderData],
      (err) => {
        if (err) throw err
        res.send({msg: "Order Added successfully!"})
      }      
    );
  },
  // updateOrders(req, res) {
  //   con.query('UPDATE products SET ? WHERE productID = ?', [req.body, req.params.id], (err) => {
  //     if (err) throw err;
  //     res.send([req.body, {msg: "Product Updated Successfully"}])

  //   })
  // }
  // deleteOrders(req, res) {
  //   con.query('DELETE FROM products WHERE productID = ?;', [req.params.id], (err) => {
  //     if (err) throw err;
  //     res.send([req.body, {msg: "Product Deleted Successfully"}])
  //   })
  // }
}