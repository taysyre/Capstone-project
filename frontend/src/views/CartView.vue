<template>
    <div class="cart">
      <h1>Shopping Cart</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              #
              <button class="sort-btn" onclick="sortList()" value="numUp">
                Price:
                <img
                  src="https://img.icons8.com/material-outlined/24/null/numerical-sorting-12.png"
                />
              </button>
            </th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount In Stock</th>
            <th scope="col">Author</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody v-for="order in cart" :key="order.orderID" class="products-table">
          <tr :id="`item-row-${order.orderID}`">
            <th scope="row">{{cart.indexOf(order) + 1}}</th>
            <td>{{order.productName}}</td>
            <td>{{order.description }}</td>
            <td>R{{order.price}}</td>
            <td>{{order.stock}}</td>
            <td>
              <button
                style="background-color: rgba(255, 255, 255, 0); border: none"
                class="edit-item"
                data-bs-toggle="modal"
                data-bs-target="#edit-modal-{{product.prodID}}"
                id="edit-modal-btn-{{product.prodID}}"
              >
                <img
                  style="height: 30px"
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-edit-interface-kiranshastry-lineal-kiranshastry.png"
                />
              </button>
            </td>
            <td>
              <button
                style="background-color: rgba(255, 255, 255, 0); border: none"
                class="del-item"
                onclick="itemRemove({{product.id - 1}})"
              >
                <img
                  style="height: 30px"
                  src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"
                />
              </button>
            </td>
          </tr>
        </tbody>
    
        <tfoot></tfoot>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user(){
        if (this.$store.state.user) {
          return this.$store.state.user
        } else {
          this.$store.commit('setUser', cookies.get("login_cookie").result);
          return this.$store.state.user
        }
      },
      product(){
        return this.$store.state.product
      },
      cart(){
        return this.$store.state.cart
      }
    },
    created(){
      this.$store.dispatch('fetchCart', this.user.userID)
    }
  }
  </script>
  
  <style scoped>
    .cart {
      color: white;
    }
    .cart table {
      width: 80%;
      margin: auto;
    }
  
    .cart th, .cart td {
      color: white !important;
    }
  </style>