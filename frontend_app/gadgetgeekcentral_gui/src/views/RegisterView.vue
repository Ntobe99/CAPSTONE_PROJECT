<template>
  
    <div class="container-fluid" >
                <form class="form" @submit.prevent="signUp" >
                    <div class="form-control-wrapper ">            
                      <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstname"/>                             
                  </div>
                  <div class="form-control-wrapper ">           
             <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastname">             
                  </div>
                  <div class="form-control-wrapper ">  
                        <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                           
                  </div>
                  <div class="form-control-wrapper ">  
                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
 
                  </div>
                  <div class="form-control-wrapper ">  
                      
                      <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">         
                            
                  </div>
                  <div class="form-control-wrapper ">  
                    
                  <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"> 
                            
                  </div>
                  <div class="form-control-wrapper ">  
                <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                       
                             
                  </div>
                  <div class="form-control-wrapper ">  
                      
                        <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">          
                  </div>
                  <div class="form-control-wrapper" >  
                    <label class="form-control bg-gradient  alert alert-success" v-show="usermsg" >{{usermsg}}</label>
                  </div>
                  <div class="form-control-wrapper ">  
                    <button type="submit" class="btn btn-dark w-50">Register</button>
                  </div>
              </form>
            </div>
     
</template>
<script>


import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup() {
      
        const payload = {
            firstname: "",
            lastname: "",
            gender: "",
            userRole: "user",
            cellphoneNumber: "",
            emailAdd: "",
            userPass: "",
            userProfile: "https://i.postimg.cc/PJ76s5mb/person-4-512.png",
            joinDate: ""
        };
        const store = useStore();
        const signUp = () => {
            store.dispatch("register", payload);
            console.log(payload);
        };
        const usermsg = computed(() => store.state.msg);
        return {
            payload,
            usermsg,
            signUp,
           
        };
    },
    
}
</script>
<style scoped>
.form{
  /* width: 50%; */
  backdrop-filter: blur(21px) saturate(180%);
    -webkit-backdrop-filter: blur(21px) saturate(180%);
    background-color: rgba(113, 167, 228, 0.84);
    border-radius: 0;
    border: 1px solid rgba(209, 213, 219, 0.3);
    padding: 2rem;

}
.btn{
  border-radius: 0;
  margin-top: 1rem;
}
.form-control{
  background-color: rgba(188, 202, 219, 0.84);
  border-radius: 0;
  margin-top: 1rem;
  
} 
/* .container-fluid{ */
  /* padding-left: 30rem;
} */


</style>