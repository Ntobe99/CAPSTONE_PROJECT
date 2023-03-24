<template>
    <div  class="logout">
    <button @click="logout" class="btn btn-dark">Logout</button>
    </div>
    
</template>

<script>

export default {
  setup(){

  },
    methods: {
        logout() {
            localStorage.removeItem("user"); // remove the 'user'  from local storage
            location.reload();
            router.push({ name: "home", path: "/" }).then(() => location.reload());
        }
    },

}
</script>

<style  scoped>
.btn{
    border-radius: 0;
    transition: all 0.25s ease 0s;
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}
</style>