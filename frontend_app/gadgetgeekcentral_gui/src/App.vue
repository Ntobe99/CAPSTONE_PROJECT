
<template>
 <NavBar/>
  <router-view/>
 <FooterComp/>
</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';

export default{
  components:{
    NavBar,
    FooterComp
}
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  padding-top: 6rem;
  
}

nav {
  padding: 30px;
 
}

nav a {
  font-weight: bold;
  color: #2ccbd6;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #aac7e3 ;
}
</style>
