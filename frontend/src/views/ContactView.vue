<template>
    <div class="contact">
      <contact-page></contact-page>
    </div>
  <!-- <div id="app"> -->
  <!-- </div> -->
  </template>
  <script>
  import ContactPage from '@/components/ContactPage.vue';
  
  export default {
    components: {
      ContactPage,
    },
  };
  </script>
  <style>
  /* Add any global styles here */
  </style>
  <style>
  /* .contact {
    background-color: black;
  } */
.contactImg{
  float: right;
  margin-right: 50px;
  width: 500px;
}
</style>