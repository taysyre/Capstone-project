const con = require('../config')

module.exports = {
  getProducts(req, res) {
    req.user
    con.query("SELECT productID, productName, description, price, stock, ImgURL FROM products", (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  },
  getProduct(req, res) {
    con.query("SELECT productID, productName, description, price, stock, ImgURL FROM products WHERE productID = ?", [req.params.id], (err, result) => {
      if (err) throw err;
      res.send(result[0]);
    });
  },
  createProduct(req, res) {
    con.query("INSERT INTO products set ? ", [req.body], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product added successfully"}])
    })
  },
  updateProduct(req, res) {
    con.query('UPDATE products SET ? WHERE productID = ?', [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Updated Successfully"}])
    })
  },
  deleteProduct(req, res) {
    con.query('DELETE FROM products WHERE productID = ?;', [req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Deleted Successfully"}])
    })
  }
}