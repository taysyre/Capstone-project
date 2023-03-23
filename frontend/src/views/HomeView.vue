<!-- <template>
  <div class="home">
    <div>
      <div class="landing">
        <br>
        <br>
        <br>
        <br>
        <h1 class="landing_words">CHECKOUT OUR COLLECTION</h1>
        <h2 class="landing_words_2">ANIMERCH</h2> 
        <button><router-link to="../Products" class="button_2"><b>SHOP NOW</b></router-link></button>><img class="M_clothes" src="https://i.postimg.cc/sgpLvv2Y/c2-204577a6-removebg-preview.png">
        <br>
        <br>
        <br>
      </div>
      <div
        id="carouselExampleControls0"
        class="carousel slide landing-carousel"
        data-bs-ride="carousel"
        data-aos="zoom-in"
      >
        <div class="carousel-inner">
          <div class="container" data-bs-interval="3000">
          
            <div class="overlay"></div>
          </div>
          <div class="container" data-bs-interval="4000">
            <img
              src="https://i.postimg.cc/Ls6ML6wF/Banner-Small-Independence-Day-1500x.webp"
              class="d-block2"
              alt="Avatar"
              loading="lazy"
            />
            <div class="overlay_2">
              <img src="https://i.postimg.cc/HsRY8sJh/4.webp" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls0"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls0"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h2>
      CHECK OUT OUR WIDE VARIETY<br />
      OF ANIME MERCH!!!<br />
    </h2>
    <p>Lets go plus ultra</p>
    <img src="https://i.postimg.cc/8CjFpqvd/Clothes.gif" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
<style>
.container {
  position: relative;
  width: 50%;
}
.d-block {
  width: 1519px;
}
.d-block2 {
  width: 1519px;
  height: 600px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 600px;
  width: 1510px;
  opacity: 0;
  transition: 0.5s ease;
  background-image: url(https://i.postimg.cc/tJS3CZ9B/One-Piece-Clothing-Banner-1920x730px.jpg);
}
.overlay_2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 600px;
  width: 1510px;
  opacity: 0;
  transition: 0.5s ease;
  background-image: url(https://i.postimg.cc/HsRY8sJh/4.webp);
}
.container:hover .overlay {
  opacity: 1;
}
.container:hover .overlay_2 {
  opacity: 1;
}
.landing{
  background-image: linear-gradient(rgb(7, 109, 116), rgb(7, 93, 124));
}
.landing_words{
  font-size: 75px;
  color: white;
}
.landing_words_2{
  font-size: 100px;
  color: white;
}
.button_2 {
  background-color: #de2e2e; /* Green */
  border: 3px solid black;
  color: white;
  padding: 35px 52px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  cursor: pointer;
}
.button_2:hover{
  background-color: #b70707;
  color: rgb(205, 196, 196);
}
.M_clothes{
  width: 1050px;
}
</style> -->
<template>
  <div class="home">
    <div>
      <div class="landing">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 class="landing_words" id="animate-charcter"><b>CHECKOUT OUR COLLECTION OF</b></h1>
        <h2 class="landing_words_2" id="animate-charcter"><b>Instruments</b></h2><br><br>
        <button><router-link to="../Products" class="button_2"><p class="shopBtn"><b>SHOP NOW</b></p></router-link></button>
        
        <br>
        <br>
        <br>
      </div>
      <div class="landing-carousel" data-aos="zoom-in">
        <div id="carouselExampleControls0" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="container" data-bs-interval="3000">
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="gallery">
    <br>
    <br>
    <img class="HomeGif" src="https://i.postimg.cc/N0Pd10DC/tumblr-n42sig-MXEh1s7tglio1-500.gif">
    <br>
    <br>
    <h2><b>BEAUTIFUL GALLERY</b></h2>
      <img class="G1" src="https://i.postimg.cc/VkJ2ws16/100se-a.jpg">
    <img class="G2" src="https://i.postimg.cc/mZq3P7HT/new.jpg">
    <img class="G3" src="https://i.postimg.cc/bv1Wxtpd/learn-piano-on-a-keyboard1550004644.jpg">
    <img class="G4" src="https://i.postimg.cc/50PWt4Ts/instagram8.jpg">
    <img class="G5" src="https://i.postimg.cc/7Lfh3LrT/Timpani-kettledrums.webp">
    <img class="G6" src="https://i.postimg.cc/SxyYvgdh/hhx8cympsyrtrf8y67rz.webp">
    
  </div>
</template>

<script>
export default {  
  name: 'HomeView',
} 


</script>

<style>
.container {
  position: relative;
  width: 100%;
  max-width: 1510px;
  margin: 0 auto;
}

.d-block2 {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
}

.overlay_2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
} 

  body{
  background-image: url(https://i.postimg.cc/CKQtdzCX/keyboardsindex-6aecfb3aa62a2ecfca1204dea45918da.webp);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  
  
}
  .shopBtn {
 text-decoration: none;
 position: absolute;
 border: none;
 font-size: 15px;
 font-family: inherit;
 color: #fff;
 width: 9em;
 height: 3em;
 line-height: 3em;
 text-align: center;
 background: linear-gradient(90deg,#03a9f4,#f441a5,#f64882 ,#03a9f4);
 background-size: 300%;
 border-radius: 30px;
 z-index: 1;
 margin-right: 1000px;
}
/* .shopBtn{
  text-align: center;
  font-size: 19px;
} */

.shopBtn:hover {
 animation: ani 8s linear infinite;
 border: none;
}

@keyframes ani {
 0% {
  background-position: 0%;
 }

 100% {
  background-position: 400%;
 }
}

.shopBtn:before {
 content: '';
 position: relative;
 top: -5px;
 left: -5px;
 right: -5px;
 bottom: -5px;
 z-index: -1;
 background: linear-gradient(90deg,#03a9f4,#f441a5,#f64882 ,#03a9f4);
 background-size: 400%;
 border-radius: 35px;
 transition: 1s;
}

.shopBtn:hover::before {
 filter: blur(20px);
}

.shopBtn:active {
 background: linear-gradient(32deg,#03a9f4,#f441a5,#f64882 ,#03a9f4);
}
#animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #03a9f4  0%,
    #f441a5 29%,
    #f64882 67%,
    #03a9f4 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 60px;
      text-shadow: 2px 2px white;
      font-family: cursive;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
@media only screen and (min-width: 300px) {
  .container {
    width: 100% !important;
  }
  .d-block {
    width: 100%;
  }
  .d-block2 {
    width: 100%;
    height: auto;
  }
  .carousel-wrapper {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .button_2 {
    color: white;
    font-size: larger !important;
  }
  .M_clothes {
    width: 80%;
    margin: 0 auto;
    display: block;
  }


}
@media only screen and (max-width: 300px) {
  .container {
    width: 100% !important;
  }
  .d-block {
    width: 100%;
  }
  .d-block2 {
    width: 100%;
    height: auto;
  }
  .carousel-wrapper {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  /* .landing_words {
    font-size: 60px;
    color: white;
    position: relative;
  }
  .landing_words_2 {
    font-size: 90px;
    color: white;
  } */
  .button_2 {
    padding: 15px 25px;
    font-size: 250px;
  }
  .M_clothes {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
}
.gallery{
  background-color: white;
  box-shadow: 0 0 11px 6px black;
}
.G1{
  width: 300px;

}
.G2{
  width: 340px;
}
.G3{
  width: 400px;
}
.G4{
  width: 300px;
}
.G5{
  width: 350px;
}
.G6{
  width: 400px;
}
.G1, .G2, .G3, .G4, .G5, .G6{
  justify-content:space-around;
  box-shadow: 0 0 4px 2px black ;
  display: inline-flex;
  margin-left: 20px;
  margin-bottom:13px;
   padding: 10px;
   box-shadow: 0 0 6px 4px rgb(0, 0, 0);
}

.G1:hover{
  scale: 1.1;
  margin-bottom: 21px !important;
  
}
.G2:hover{
  scale: 1.1;
}
.G3:hover{
  scale: 1.1;
}
.G4:hover{
  margin-top: 17px !important;
  scale: 1.1;
}
.G5:hover{
  scale: 1.1;
}
.G6:hover{
  scale: 1.1;
}
.HomeGif{
width: 1000px;
border: 3.5px solid rgb(0, 0, 0);
/* height:; */
box-shadow: 0 0 6px 4px black;
 }
</style>
