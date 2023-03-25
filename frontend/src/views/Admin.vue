<template>
    <br>
    <br>
    <br>
    <br>
    <SpinnerVue v-if="showSpinner"/>
    <div class="admin-container" v-else>
      <h2>Products</h2>
      <table class="table table-dark table-striped">
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
            <th scope="col">Product Name</th>
            <th scope="col">description</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.prodID" class="products-table">
          <tr id="item-row-{{product.prodID}}">
            <th scope="row">{{product.productID}}</th>
            <td>{{product.productName}}</td>
            <td>R{{product.price}}</td>
            <td>{{product.stock}}</td>
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
  
      <h2>Users</h2>
      <table class="table table-dark table-striped">
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
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.userID" class="products-table">
        <tr id="item-row-{{user.userID}}">
          <th scope="row">{{user.userID}}</th>
          <td>{{user.username}}</td>
          <td>{{user.firstName}} {{ user.lastName }}</td>
          <td>{{user.gender }}</td>
          <td>{{user.email}}</td>
          <td>{{user.password}}</td>
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
  import Spinner_component from '@/components/Spinner.vue'
  export default {
    components: {
        Spinner_component
    },
    computed: {
      products() {
        return this.$store.state.products
      },
      users() {
        return this.$store.state.users
      },
      setSpinner(){
        if(this.$store.state.products && this.$store.state.users) {
          this.$store.commit("setSpinner", false)
        }
      },
      showSpinner() {
        this.setSpinner
        return this.$store.state.showSpinner
      }
    },
    created() {
      this.$store.dispatch('fetchProducts')
      this.$store.dispatch('fetchUsers')
    },
  };
  </script>
  <style>
    .admin-container {
      color: white;
      margin-bottom: 30px;
    }
    .table {
      width: 80%;
      margin: auto;
      background-color: transparent;
    }
  </style>