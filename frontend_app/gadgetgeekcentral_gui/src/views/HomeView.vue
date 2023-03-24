<template>
  <div class="content-container d-flex justify-content-center align-content-center" v-if="spinner">
    <SpinnerComp/>
  </div>
  <div class="content-container" v-else-if="!spinner">
 <h2 class="display-6">GadgetGeekCentral</h2>
  <p class="lead text-center w-100">Revolutionize Your Life with the Latest Gadgets!</p>
      <div id="carouselCategory" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="https://i.postimg.cc/MphVrbGN/laptop-33521-1280.png" class="carouselImg d-block" alt="ALT">
      <div class="carousel-caption">
        <h5 class="display-6 fw-bold">Laptops</h5>
        <p class="lead">Innovative Technology at Your Fingertips.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://i.postimg.cc/3JLfb6mR/smartphone-153650_1280.png" class="carouselImg d-block" alt="">
      <div class="carousel-caption ">
        <h5 class="display-6 fw-bold">Phones</h5>
        <p class="lead">Browse our range of cellphones experience the Next Generation of Smartphones.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://i.postimg.cc/HW0k5053/virtual-2055227-1280.png" class="carouselImg d-block" alt="">
      <div class="carousel-caption category">
        <h5 class="display-6 fw-bold">VR Headsets</h5>
        <p class="lead"> See our vr headsets and experience virtual reality like never before.</p>
        
          <router-link to="/products">
            <button class="btn btn-dark">SEE MORE</button>
          </router-link>
      

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCategory" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCategory" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  name: 'HomeView',
  data(){
    let spinner = ref(true);
    return{
      spinner
    }
  },
  components: {
    SpinnerComp,
},
  mounted(){
    setTimeout(() => {
      this.spinner=!this.spinner
    },1000)
  }
}
</script>

<style scoped>
.btn{
  text-decoration: none;
 
}

.content-container{
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 4em 0 1em 0;
  background-color: #eaf2f7;
}


.carousel-caption button{
  transition: all 0.25s ease 0s;
 
}
.carousel-caption button:hover{
  scale: 1.05;
  box-shadow: 5px 5px 5px #000;
}
.carousel-item{
  position: relative;
  height: 100%;
}
.carousel-item img{
  height: 650px;
  
}

#carouselCategory{
  width: 100%;
  min-width: 300px;
  /* height: 600px; */
  margin: 0 auto;
  background-color: #eaf2f7;
}
.carousel-caption{
  position: absolute;
  top: 30%;
  bottom: 30%;
  background-color: #2a2a2ac2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
h5{
  color: #ffffff;
}
.carousel-item p{
  color: #ffffff;
}
</style>
