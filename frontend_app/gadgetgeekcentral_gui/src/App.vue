
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
  color: #2f2424;
  padding-top: 7rem;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f7ee33;
}

nav a.router-link-exact-active {
  color: #eded9b ;
}
</style>
