<template>
  
    <br>
    <div class="products">

    <!-- <img class="ProdBanner" src="https://i.postimg.cc/13psMhYM/your-lie-in-april-piano.gif"> -->
    <!-- <img src="https://i.postimg.cc/TPv5nxqP/banner-slider1.jpg"> -->
      <!-- <div>
      <input v-model="filterText" type="text" placeholder="Search...">
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
      </div> -->
      <br>
      
     
      <Add_Product/>
      <!-- <h2 class="crd">Card</h2> 
      <div class="card">
  <div class="card2">
  </div>
</div> -->
    </div>
    </template>
  <script>
  // export default {
  //   data() {
  //     return {
  //       items: [
  //         { id: 1, name: 'tyvon', image: 'https://i.postimg.cc/8zTZbs91/51-Db-Sz-QTAKL.jpg' },
  //         { id: 2, name: 'Banana' },
  //         { id: 3, name: 'Cherry' },
  //         { id: 4, name: 'Date' },
  //         { id: 5, name: 'John' },
  //         { id: 6, name: 'Mishaine' },
  //         { id: 7, name: 'sakhe' },
  //         ],
  //       filterText: '',
  //     }
  //   },
  //   computed: {
  //     filteredItems() {
  //       return this.items.filter(item =>
  //         item.name.toLowerCase().includes(this.filterText.toLowerCase())
  //       ).sort((a, b) => a.name.localeCompare(b.name))
  //     },
  //   },
  // }
  import Add_Product from '@/components/AddProduct.vue';
  
  export default {
    components: {
      Add_Product
    },
  }
  </script>
  <style>
  .ProdBanner{
    width: 1000px;
  }
  </style>
  