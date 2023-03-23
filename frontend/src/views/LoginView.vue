<!-- <template>
    <div class="login">
      
      <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input name="" type="text">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input name="" type="password">
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
</div>
    </div>
  </template>
  <style scoped>
  .login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  padding: 40px;
  margin: 20px auto;
  transform: translate(-50%, -55%);
  background: rgba(0,0,0,.9);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #fff;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 3px
}

.login-box a:hover {
  background: #03f40f;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03f40f,
              0 0 25px #03f40f,
              0 0 50px #03f40f,
              0 0 100px #03f40f;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03f40f);
  animation: btn-anim1 1.5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fff);
  animation: btn-anim2 1.5s linear infinite;
  animation-delay: .375s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03f40f);
  animation: btn-anim3 1.5s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fff);
  animation: btn-anim4 1.5s linear infinite;
  animation-delay: 1.125s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,100% {
    bottom: 100%;
  }
}

.login-box p:last-child {
  color: #aaa;
  font-size: 14px;
}

.login-box a.a2 {
  color: #fff;
  text-decoration: none;
}

.login-box a.a2:hover {
  background: transparent;
  color: #aaa;
  border-radius: 5px;
}
</style> -->
<template>
  <div v-if="spinner" class="signInAndOut">
      <SpinnerComponent/>
  </div>
  <div v-if="!spinner" class="signInAndOut">
      <form v-if="signIn && user == null && !spinner" class="signIn">
          <h2 class="display-5 fw-bold mb-4 mt-2">SIGN IN</h2>
          <label for="userEmail" class="mt-3 lead">Email Address</label>
          <input type="email" name="userEmail" id="userEmail" class="form-control w-50 mx-auto mb-2" required placeholder="Enter Your Email Address..." v-model="signInPayload.userEmail">
          <label for="userPass" class="mt-3 lead">Password</label>
          <input type="password" name="userPass" id="userPass" class="form-control w-50 mx-auto mb-5" required placeholder="Enter Your Password..." v-model="signInPayload.userPass">
          <button class="btn btn-dark mb-3 me-1 mt-4" v-on:click.prevent="userSignIn(signInPayload)">Sign In</button>
          <button class="btn btn-danger mb-3 mt-4" v-on:click.prevent="changeSign()">Sign Up</button>
      </form>

      <form v-if="!signIn && user == null && !spinner" class="signUp">
          <h2 class="display-5 fw-bold mt-2">SIGN UP</h2>
          <label class="mt-3 lead" for="firstName">First Name</label>
          <input class="form-control w-50 mx-auto mb-2" type="text" name="firstName" id="firstName" required placeholder="Enter Your First Name..." v-model="signUpPayload.firstName">
          <label class="mt-3 lead" for="lastName">Last Name</label>
          <input class="form-control w-50 mx-auto mb-2" type="text" name="lastName" id="lastName" required placeholder="Enter Your Last Name..." v-model="signUpPayload.lastName">
          <label class="mt-3 lead" for="email">Email Address</label>
          <input class="form-control w-50 mx-auto mb-2" type="email" name="email" id="email" placeholder="Enter Your Email Address..." v-model="signUpPayload.userEmail">
          <label class="mt-3 lead" for="userPass">Password</label>
          <input class="form-control w-50 mx-auto mb-2" type="password" name="userPass" id="userPass" required placeholder="Enter Your Password..." v-model="signUpPayload.userPass">
          <button class="btn btn-dark mb-3 me-1 mt-4" v-on:click.prevent="userSignUp(signUpPayload)">Sign Up</button>
          <button class="btn btn-danger mb-3 mt-4" v-on:click.prevent="changeSign()">Sign In</button>
      </form>

      <div v-if="user !== null && !spinner" class="userSignedIn">
          <h1>YOU'VE SIGNED IN!</h1>
      </div>
  </div>
  </template>

<style scoped>
.signInAndOut{
  min-height: 100vh;
  padding: 5em 0 2em 0;
  color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.signIn,
.signUp{
  background-color: #000000ae;
  width: 50%;
  margin: 0 auto;
}

</style>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import SpinnerComponent from '@/components/Spinner.vue';
import {useRouter} from 'vue-router';
export default{
  setup(){
      const store = useStore();
      const router = useRouter();

      let spinner = ref(false);
      let signIn = ref(true);

      const userLoggedIn =JSON.parse(localStorage.getItem('user'));
      let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
      
      const signInPayload = {
          "userEmail":'',
          "userPass":''
      }
      const signUpPayload = {
          "firstName":'',
          "lastName":'',
          "userEmail":'',
          "userPass":''
      }
      
      async function userSignIn(signInPayload){
          spinner.value = !spinner.value;
          await store.dispatch('login', signInPayload);
          localStorage.setItem('user',JSON.stringify(store.state.user))
          location.reload();
          spinner.value = !spinner.value;
          router.push({name:'home', path:'/'}).then(() => location.reload())
      }

      async function userSignUp(signUpPayload){
          spinner.value = !spinner.value;
          await store.dispatch('register', signUpPayload);
          let tempPayload = {
              "userEmail":signUpPayload.userEmail,
              "userPass":signUpPayload.userPass
          };
          await store.dispatch('login', tempPayload);
          localStorage.setItem('user', JSON.stringify(store.state.user));
          router.push({name:'home', path:'/'}).then(() => location.reload())
          spinner.value = !spinner.value;
      }

      function changeSign(){
          signIn.value = !signIn.value
      }

      return{
          user,
          router,
          signIn,
          signInPayload,
          signUpPayload,
          userSignIn,
          userSignUp,
          changeSign,
          spinner

      }
  },

  components:{
      SpinnerComponent
  }
}
</script>