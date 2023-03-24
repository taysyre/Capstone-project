<template>
    <br>
    <br>
    <br>
    <br>
    <div class="products">

    <!-- <img class="ProdBanner" src="https://i.postimg.cc/13psMhYM/your-lie-in-april-piano.gif"> -->
    <!-- <img src="https://i.postimg.cc/TPv5nxqP/banner-slider1.jpg"> -->
      <div>
      <input v-model="filterText" type="text" placeholder="Search...">
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
      </div>
      <br>
      
    <div class="row products-container">
  
  <div v-for="product in filterItems" :key="product.productID" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
    <div class="card m-auto">
      <img :src="product.imgURL" class="card-img-top" :alt="product.prodName">
      <div class="card-body">
        <h5 class="card-title">{{product.productName.slice(0, 27)}} ...</h5>
        <p class="card-text my-0">Author: {{product.description}}</p>
        <p class="card-text my-0">Price: R{{product.price}}</p>
        <p class="card-text my-0">Stock: {{product.stock}}</p>
        <router-link to="product" @click.prevent="()=>viewProduct(product)">See more ></router-link>
        <a @click.prevent="()=>addToCart(product)" class="ms-5">
          <img src="https://img.icons8.com/external-anggara-detail-outline-anggara-putra/48/FFFFFF/external-add-to-cart-retail-anggara-detail-outline-anggara-putra-2.png" width="30"/>
        </a>
        <!-- <a href="#" class="btn btn-primary">View Product</a> -->
      </div>
    </div>
  </div>
    </div>
   
      <!-- <h2 class="crd">Card</h2> 
      <div class="card">
  <div class="card2">
  </div>
</div> -->
    </div>
    </template>
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'tyvon', image: 'https://i.postimg.cc/8zTZbs91/51-Db-Sz-QTAKL.jpg' },
          { id: 2, name: 'Banana' },
          { id: 3, name: 'Cherry' },
          { id: 4, name: 'Date' },
          { id: 5, name: 'John' },
          { id: 6, name: 'Mishaine' },
          { id: 7, name: 'sakhe' },
          ],
        filterText: '',   
      }
    },
    computed: {
      filteredItems() {
        return this.items.filter(item =>
          item.name.toLowerCase().includes(this.filterText.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name))
      },
    },
  }

  </script>
  <style>
  .ProdBanner{
    width: 1000px;
  }
  </style>
    <!-- import Add_Product from '@/components/AddProduct.vue';
  
    export default {
      components: {
        Add_Product
      },
    } -->