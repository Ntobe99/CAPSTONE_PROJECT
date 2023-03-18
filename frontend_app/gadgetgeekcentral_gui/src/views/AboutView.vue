
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
          <h1 class="text text-center mt-5">About GadgetGeekCentral</h1>
        <p class="lead text-center mb-5">GadgetGeekCentral is a website dedicated to giving access the latest technology gadgets.</p>
        <div class="row">
          <div class="col-sm-12 col-md-6 text-start">
            <p>GadgetGeekCentral is the ultimate destination for tech-savvy customers who are looking for the latest and greatest in the world of technology gadgets. With our exceptional customer service, wide range of products, and commitment to providing a great user experience.</p>
            <p>Our team of experts are constantly researching and testing the latest gadgets to provide you with the most awesome gadgets.</p>
            <p>Whether you're looking for a new smartphone, tablet, or laptop, GadgetGeekCentral has got you covered.</p>
          </div>
          <div class="col-sm-12 col-md-6">
            <img src="" class="img-fluid ">
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>


export default{
   
}
</script>

<style scoped>
.container-fluid{
  min-height: 100vh;
}
.text { 
  font-size: clamp(4em, 15vmin, 20em);
  text-shadow: 0;
  color: black;
  animation: anime 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) alternate infinite;
}

@keyframes anime {
  from {
    font-variation-settings: "wght" 800, "slnt" 0;
    text-shadow: -5px 10px 0px #a2cce5, -10px 20px 0px #6795c8,
      -15px 30px 0px #254990;
  }
  to {
    font-variation-settings: "wght" 300, "slnt" 15;
    text-shadow: none;
  }
}
</style>
