<template>
    <div class="delproduct">
      <button type="button" class="btn btn-danger" v-if="$route.params.id"  @click="deleteProduct"> <i class="fa-solid fa-trash"></i></button>
      </div>
  </template>
  
  <script>
   export default {
      methods: {
      deleteProduct() {
        this.$store.dispatch('deleteProduct', this.$route.params.id);
      }
    },
    computed: {
      product() {
        return this.$store.state.product
      }   
    },
   
  }
    
    
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  </style>