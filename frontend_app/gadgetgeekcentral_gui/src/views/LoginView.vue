<template>
  <div v-if="spinner" class="login">
        <SpinnerComp/>
    </div>
   <div class="vh-80" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;background-color: rgba(113, 167, 228, 0.84);">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://i.postimg.cc/2515v39X/william-zv-Wxl-Td3-IP0-unsplash.jpg"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div v-if="!spinner" class="card-body p-4 p-lg-5 text-black">

                <form v-if="login && user == null && !spinner">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fa-solid fa-right-to-bracket" style="color: blue;padding:1rem ;"></i>
                    <span class="h1 fw-bold mb-0">GadgetGeekCentral</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" v-model="payload.emailAdd" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" v-model="payload.userPass"/>
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button" v-on:click.prevent="userLogin(payload)">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <router-link to="/register">Register here</router-link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
                <div v-if="user !== null && !spinner"   class="loggedIn">
          <h1>you're logged in<i class="fa-solid fa-face-smile"></i></h1>
            <Logout/>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
import {useRouter} from 'vue-router';
import { computed } from '@vue/runtime-core';
import Logout from '@/components/logout.vue';
export default{
    setup(){
        const store = useStore();
        const router = useRouter();
        let spinner = ref(false);
        let login = ref(true);
        const usermsg= computed( () => store.state.msg )
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        
        const payload = {
            "emailAdd":'',
            "userPass":''
        }
        
        
        async function userLogin(payload){
            spinner.value = !spinner.value;
            await store.dispatch( 'login', payload);
            localStorage.setItem('user',JSON.stringify(store.state.user))
            location.reload();
            spinner.value = !spinner.value;
            router.push({name:'home', path:'/'}).then(() => location.reload())
            alert('you have succesfully logged in')
        };
     
        return{
            user,
            router,
            login,
            usermsg,
            payload, 
            userLogin,
            spinner
        }
    },
    components:{
  SpinnerComp,
  Logout
}
}
</script>

<style  scoped>


.btn{
    border-radius: 0;
    
}
.form-control{
  border-radius: 0;
}

</style>