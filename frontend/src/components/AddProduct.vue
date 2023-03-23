

    <!-- <div>
      <h2>Product</h2>
      <form @submit.prevent="addProduct">
        <label>Name:</label>
        <input v-model="product.name" type="text" required>
        <label>Price:</label>
        <input v-model="product.price" type="number" required>
        <button type="submit">Add Product</button>
      </form>
    </div> -->
  

    <template>
      <br>
      <br>
        <h1>Products</h1>
      <div>
          <div class="card" v-for="product in products" :key="product">
              <img src="" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">{{products.productName}}</h5>
                <p class="card-text">{{ products.description}}</p>
                <p class="card-text">{{ products.price}}</p>
                <P class="card-text">{{ products.stock }}</P>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>  
            </div>
          </div>
      
    </template>
    <script> 
    import { useStore } from 'vuex';
    import { computed } from '@vue/runtime-core';
    export default {
      setup(){
          const store = useStore();
          store.dispatch("fetchProducts");
          let products = computed(() => store.state.products)
          return{
              products,
          }
      },
      name : 'Add_Product',
    }
    </script>
    <style>
      .card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 50px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2px 14px;
  }
  
.crd{
  display: flex;
   justify-content: space-between;
}
  .card {
 width: 190px;
 height: 255px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
}

.card2 {
 width: 188px;
 height: 259px;
 background-color: #1a1a1a;
 border-radius: 20px;
 transition: all .2s;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 20px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
    </style>