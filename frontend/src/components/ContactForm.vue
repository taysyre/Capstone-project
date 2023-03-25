<template>
    <div class="contact-form">
      <form action="https://formspree.io/f/mdojzboj" method="POST">
        <div class="form-group">
          <label for="#firstname">Name</label>
          <input id="firstname" name="firstName" type="text" placeholder="Enter your name" required>
        </div>
  
        <div class="form-group">
          <label for="#email">Email</label>
            <input id="email" name="email" type="text" placeholder="Enter your email" required> 
        </div>
  
        <div class="form-group">
          <label for="#Message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>

        </div>
   
        <button class="ConBtn">SEND</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    /* background-color: #000; */
    color: #fff;
    padding: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-size: 17px;
    padding: 5px;
    width: 45%;
  }
  
  textarea {
    height: 150px;
  }
  
  button {
    background-color: #fff;
    border: none;
    /* border-radius: 5px; */
    color: #000;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #30f808;
    box-shadow: 0 0 5px #03f40f,
              0 0 25px #03f40f,
              0 0 50px #03f40f,
              0 0 100px #03f40f;
  }
  .login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.ConBtn {
  background: rgba(34, 34, 34, 0.9);
  color: #fff;
  border-radius: 5px;
  width: 35%;
  margin-right: 530px;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,100% {
    left: 100%;
  }
}

  </style>
  