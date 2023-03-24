<template>
  <div class="navb">
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid" id="box">
      <img
        class="icon"
        src="https://i.postimg.cc/GmWQmWZd/Screenshot-2023-03-10-113934.png"
        alt="logo"
        loading="lazy"
      /><br />
      <h6>Lost In Harmony</h6>
      <button
        class="navbar-toggler ms-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <br />
          <ul class="d-flex flex-column flex-sm-row">
            <li>
              <router-link to="/"
                >Home<img
                  class="H_img"
                  src="https://img.icons8.com/material-sharp/24/FFFFFF/home-page.png"
              /></router-link>
            </li>
            <li>
              <router-link to="../Products"
                >Products<img
                  class="H_img"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-bag.png"
              /></router-link>
            </li>
            <li>
              <router-link to="../Admin"
                >Admin<img
                  class="H_img"
                  src="https://img.icons8.com/material-sharp/24/FFFFFF/pencil-tip.png"
              /></router-link>
            </li>
            <li>
              <router-link to="../contact"
                >Contact<img
                  class="H_img"
                  src="https://img.icons8.com/material-sharp/24/FFFFFF/call-female.png"
              /></router-link>
            </li>
            <li>
              <router-link to="../login"
                >Login<img
                  class="H_img"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/login-rounded.png"
              /></router-link>
            </li>
            <li>
              <router-link to="../About"
                >About<img
                  class="H_img"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/info.png"/>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="socials d-flex justify-content-right align-items-center mx-4">
      <a href=""
        ><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png"
      /></a>
      <a href=""
        ><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/instagram-new.png"
      /></a>
      <a href=""
        ><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/facebook-new.png"
      /></a>
      <a href=""
        ><img src="https://img.icons8.com/material-sharp/24/FFFFFF/twitter.png"
      /></a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "navbar_Com",
};
//     // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
</script>

<style>
.icon {
  width: 4em;
  border-radius: 2em;
}
.icon:hover {
  box-shadow: 0 0 6px 4px rgb(249, 246, 246);
  scale: 1.1;
}
.navb {
  position: fixed;
  width: 100%;
  background-image: url(https://i.postimg.cc/CKQtdzCX/keyboardsindex-6aecfb3aa62a2ecfca1204dea45918da.webp);
  z-index: 10;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  top: 0px;
}
nav ul li {
  list-style: none;
  margin-left: 20px;
}
nav ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}
nav ul li a:hover,
nav ul li .router-link-exact-active {
  background: #fff;
  color: #2b1055;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

@media screen and (max-width: 800px) {
  body {
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
  body {
    font-size: 11px;
  }
}
/* nav{
    background-image: url(https://i.postimg.cc/TPv5nxqP/banner-slider1.jpg);
   
} */
.H_img {
  height: 19px;
  background-color: rgba(255, 255, 255, 0);
}
h6 {
  color: white;
  font-family: cursive;
}
#navbar {
  overflow: hidden;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}
</style>
