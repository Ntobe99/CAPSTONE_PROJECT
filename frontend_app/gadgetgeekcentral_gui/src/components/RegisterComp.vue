<template>
    <div class="container-fluid">
        <div class="row">
            <h3 class="display-2">Register</h3>
        </div>
        <div class="row">
            <div class="col">
                <form class="form" @submit.prevent="signUp">
                    <div class="form-control-wrapper ">            
                      <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstname"/>   
                      <i class="fa-solid fa-user"></i>                           
                  </div>
                  <div class="form-control-wrapper ">           
             <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastname">             
                  </div>
                  <div class="form-control-wrapper ">  
                        <i class="fa-solid fa-user"></i> <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                           
                  </div>
                  <div class="form-control-wrapper ">  
                      
                        <i class="fa fa-telephone-fill"></i><input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                        
                            
                  </div>
                  <div class="form-control-wrapper ">  
                      
                        <i class="fa fa-envelope"></i> <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">         
                            
                  </div>
                  <div class="form-control-wrapper ">  
                    
                        <i class="fa fa-person-fill"></i><input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"> 
                            
                  </div>
                  <div class="form-control-wrapper ">  
                 <i class="fa fa-link"></i><input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                       
                             
                  </div>
                  <div class="form-control-wrapper ">  
                      
                        <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                              
                  </div>
                  <div class="form-control-wrapper ">  
                    <label class="form-control bg-gradient  alert alert-success" v-if="usermessage" >{{usermessage}}</label>
                  </div>
                  <div class="form-control-wrapper ">  
                    <button type="submit" class="btn btn-dark w-100">Register</button>
                  </div>
              </form>
            </div>
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup() {
      const payload = {
          firstname: '',
          lastname: '',
          gender: '',
          userRole:'user',
          cellphoneNumber: '',
          emailAdd: '',
          userPass: '',
          userProfile: 'https://i.postimg.cc/HLtYpsMc/person-icon-red-7540-1-removebg-preview.png',
          joinDate: ''
        };
      const store = useStore();
      const signUp = () => {
      store.dispatch("register", payload);
      console.log(payload,alert('user successfully registered'));  
      }
      const usermessage= 
      computed( () => store.state.message )
      return {
        payload,
        usermessage,
        signUp,
      
      }
      
    }
}
</script>
<style scoped>
.form{
  margin-left: 30rem;
  margin-right:30rem ;
  backdrop-filter: blur(21px) saturate(180%);
    -webkit-backdrop-filter: blur(21px) saturate(180%);
    background-color: rgba(74, 144, 226, 0.84);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    padding: 2rem;
}
.form-control{
  background-color: rgba(113, 161, 216, 0.84);
} 
#alert{
  background-color: rgb(113, 228, 113);
}
</style>