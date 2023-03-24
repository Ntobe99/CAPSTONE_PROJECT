<template>
        
<div class="container-fluid">
        <form @submit.prevent="edit" class="form">
           <input type="number" placeholder="Please enter your user id " class="form-control text-center w-50 mx-auto mb-2" v-model="payload.userID" required>
            <input type="text" placeholder="Firstname" class="form-control text-center w-50 mx-auto mb-2" v-model="payload.firstname" required>
            <input type="text" placeholder="Lastname" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.lastname" required>  
            <input type="text" placeholder="gender" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.gender" required>
            <input type="varchar" placeholder="cellphoneNumber" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.cellphoneNumber" required>
            <input type="email" placeholder="Email" class="form-control text-center w-50 mx-auto mb-2" v-model="payload.emailAdd" required>
            <input type="text" placeholder="imageUrl" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.userProfile" required>
            <select type="text" id="roles"  placeholder="choose your role" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.userRole" required>
              <option value="Admin">Admin</option>
               <option value="User">User</option>
              </select>
            <input type="password" placeholder="Enter Password" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.userPass" required>
           <input type="date" placeholder="date" class="form-control text-center  w-50 mx-auto mb-2" v-model="payload.joinDate" required>
           <button type="button" class="btn btn-dark"  v-on:click="edit">Save changes</button>
        </form>
      </div>
        
       
     
    
</template>

<script>
import { useStore } from 'vuex';
export default{
 
setup(){
  const store = useStore();
        let payload = {
                userID:'',
                firstname:'',
                lastname:'',
                emailAdd:'',
                userPass:'',
                userProfile:'',
                userRole:'',
                joinDate:''
                
            }
            const edit = () => {
            store.dispatch("updateUser", payload)
            store.dispatch("fetchUsers");
            console.log(payload);
        }

  return{
    payload,
    edit
  }
}
}

</script>
<style scoped>
.btn{
  border-radius: 0;
  transition: all 0.25s ease 0s; 
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}
.form-control{
  border-radius: 0;
}
</style>