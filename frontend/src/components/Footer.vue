<template>
    <footer>
        <h3>tyvon</h3>
      <div class="container2">
        <p>&copy; {{ currentYear }} My Website</p>
      </div>
    </footer>
  </template>
  
  <script>

  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
  footer {
    background: rgba(0,0,0,.8);
    color: #fff;
    padding: 40px 0;
  }
  .container2 {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  p{
    color: white;
  }
  </style>
  