<template>
    <div class="container-fluid">

      <div class="container text-center">
  <div class="row">
    <div class="col">
      <button
      type="button"
      class="btn btn-dark"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
    <router-link to="/add">Add Product</router-link>
     
    </button>

    </div>
    <div class="col">
      <button
           type="button"
                  class="btn btn-primary "
                  style="width: 5rem"  >
                BUTTON
                </button>
    </div>

    <div class="col">
     
    </div>
  </div>
</div>

    <div class="row"><h1>Users</h1></div>
    <div class="row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">EmailAddress</th>
            <th scope="col">Action</th>
           
          </tr>
        </thead>
        <tbody>

            
          <tr v-for="user in users" :key="user.userID">
            
            <td>{{user.userID}}</td>
            <td><img :src="user.userProfile" style="height:5rem"></td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Edit
</button>
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="edit">

            <input type="number" placeholder="id" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userID">
            <input type="text" placeholder="Firstname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.firstname">
            <input type="text" placeholder="Lastname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.lastname">  
            <input type="text" placeholder="gender" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.gender">
            <input type="number" placeholder="cellphoneNumber" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.cellphoneNumber">
            <input type="email" placeholder="Email" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.emailAdd">
            <input type="text" placeholder="image" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userProfile">
            <input type="text" placeholder="Enter Password" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userPass">
           <input type="date" placeholder="date" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.joinDate">

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  v-on:click="edit">Save changes</button>
      </div>
    </div>
  </div>
</div>
     </td>
     <td>
      
     </td>
          </tr>
        </tbody>
      </table>

      <div class="products">
        <h1>Products</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.prodID">
              <td scope="row">{{ product.prodID  }}</td>
              <th scope="row">{{ product.prodName }}</th>
              <td scope="row">R{{ product.price }}</td>
              <td><img :src="product.imgURL" style="height: 5rem" /></td>
              <td>
               buttons
                
              </td>

            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  
   
 </template>
 
 <script>
 
// import AddProduct from '@/components/AddProduct.vue';
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
export default{
    
    setup() {
        const getLocation = () => {
            let locationArr = location.pathname.split('/');
            let locationID = locationArr[locationArr.length-1];
            return locationID
            
        }
        const payload ={
            userID:'',
            firstname:'',
            lastname: '',
            emailAdd: '',
            gender: '',
            userRole: '',
            userPass:'',
            userProfile: "https://i.postimg.cc/HLtYpsMc/person-icon-red-7540-1-removebg-preview.png",
            cellphoneNumber:'',
            joinDate:''
        };
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        store.dispatch("fetchUserById", getLocation())
        const products = computed(() => store.state.products);
        const users = computed(() => store.state.users);
        
        // const addProduct= computed(()=>store.state.addProduct)
        const edit = () => {
            store.dispatch("updateUser", payload)
            store.dispatch("fetchUsers");
            console.log(payload,alert('user details updated successfully'));
        }
        return {
            users,
            products, 
            edit,
            payload  
        };
    },
   
};
</script>

<style scoped>
.container-fluid {
 padding-top: 1rem;
}
@media screen and (max-width: 700px) {
  .container-fluid {
    padding-top: 17rem;
    padding-bottom: 1rem;
  }
 }
 
 </style>
