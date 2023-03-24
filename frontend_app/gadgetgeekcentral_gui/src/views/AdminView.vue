<template>
    <div class="container-fluid">
        <div v-if="spinner" class="admin d-flex justify-content-center">
        <SpinnerComp/>
    </div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
     
    <router-link to="/add"
    custom
      v-slot="{ navigate }"
    >
    <button type="button" class="btn btn-dark"
        @click="navigate"
        role="link"
      >
        add product
      </button>


  </router-link>
     
  

    </div>
    <div class="col">
     
    </div>

    <div class="col">
     
    </div>
  </div>
</div>
<hr class="border border-dark border-2 opacity-50">
    <div class="row"><h1>Users</h1></div>
    <hr class="border border-dark border-2 opacity-50">
    <div class="row ">
      <div class="table-responsive">
      <table class="table table-success table-striped">
        <thead>
          <tr class="table table-success table-striped">
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">EmailAddress</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
           
          </tr>
        </thead>
        <tbody>

            
          <tr v-for="user in users" :key="user.userID" class="table table-success table-striped">  
            
            <td>{{user.userID}}</td>
            <td><img :src="user.userProfile" style="height:5rem"></td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-pen-to-square"></i>
</button>
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  >

            <input type="number" placeholder="Enter the id of user you want to edit" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userID">
            <input type="text" placeholder="Firstname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.firstname">
            <input type="text" placeholder="Lastname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.lastname">  
            <input type="text" placeholder="gender" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.gender">
            <input type="number" placeholder="cellphoneNumber" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.cellphoneNumber">
            <input type="email" placeholder="Email" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.emailAdd">
            <input type="text" placeholder="image" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userProfile">
            <input type="password" placeholder="Enter Password" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userPass">
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
       <router-link :to="{name: 'deleteuser', params: {id:user.userID}}">
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i>
        </button>  
        </router-link>
     </td>
          </tr>
        </tbody>
      </table>
    </div>
      <hr class="border border-dark border-2 opacity-50">
      <div class="products">
        <h1>Products</h1>
        <hr class="border border-dark border-2 opacity-50">
        <div class="table-responsive">
        <table class="table table-success table-striped">
          <thead>
            <tr class="table table-success table-striped">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>  
              <th scope="col"><i class="fa-solid fa-pen-to-square"></i></th>
              <th scope="col"><i class="fa-solid fa-trash"></i></th>
              
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products" :key="product.prodID" class="table table-success table-striped">
              <td scope="row">{{ product.prodID  }}</td>
              <th scope="row">{{ product.prodName }}</th>
              <td scope="row">R{{ product.price }}</td>
              <td scope="row">{{ product.category }}</td>
              <td><img :src="product.imgURL" style="height: 5rem" /></td>
           <td>   
                <UpdateProduct/> 
              </td>
              <td>
       <router-link :to="{name: 'deleteproduct', params: {id:product.prodID}}">
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i>
        </button>  
       </router-link>       
            </td>   
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
  
   
 </template>
 
 <script>

import SpinnerComp from '@/components/SpinnerComp.vue';
import UpdateProduct from '@/components/updateProduct.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
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
            userProfile: "https://i.postimg.cc/PJ76s5mb/person-4-512.png",
            cellphoneNumber:'',
            joinDate:''
        };
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        store.dispatch("fetchUserById", getLocation())
        const products = computed(() => store.state.products);
        const users = computed(() => store.state.users);
        const spinner = computed(() => store.state.spinner);        
        const edit = () => {
            store.dispatch("updateUser", payload)
            store.dispatch("fetchUsers");
            console.log(payload);
        }
        return {
            users,
            products, 
            edit,
            payload,
            spinner,
        };
    },
  components:{ SpinnerComp, UpdateProduct } 
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
 .btn{
  border-radius: 0;
  transition: all 0.25s ease 0s
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}
 </style>
