<template>
    <div class="filter">
        <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search Product Name" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
    search(){
      let sBar = this.products;
      if (this.searchQuery.trim().length > 0) {
                sBar = sBar.filter((product) => product.prodName.toLowerCase().includes(this.searchQuery))
            }
            return sBar
    }
  },
data () {
    return {
      searchQuery: '',
    }
  }
    
  }
  </script>
  