<template>
   <br>
  <br>
  <br>
    <div class="contact-page">
      <img class="contactImg" src="https://i.postimg.cc/GmWQmWZd/Screenshot-2023-03-10-113934.png">

      <h1>Contact Us</h1>
  
      <p>Fill out the form below to get in touch with us.</p>
  
      <contact-form></contact-form>
    </div>
  </template>
  
  <script>
  import ContactForm from '@/components/ContactForm.vue';
  
  export default {
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    background: rgba(0,0,0,.8);
    color: #fff;
    min-height: 100vh;
    padding: 30px;
  }
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  </style>
  