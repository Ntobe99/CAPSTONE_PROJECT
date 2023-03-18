<template>
    <div  class="logout">
    <button @click="logout" class="btn btn-dark">Logout</button>
    </div>
    <div  v-if="spinner">
      <SpinnerComp/>
    </div>
</template>

<script>
import SpinnerComp from './SpinnerComp.vue';
import { computed} from '@vue/runtime-core';
import { useStore } from "vuex";
export default {
  setup(){
    const store = useStore()
    const spinner = computed(() => store.state.showSpinner);
    return{
    spinner,
}
  },
    methods: {
        logout() {
            localStorage.removeItem("user"); // remove the 'user'  from local storage
            location.reload();
            spinner.value = !spinner.value;
            router.push({ name: "home", path: "/" }).then(() => location.reload());
        }
    },
    
    components: { SpinnerComp }
}
</script>

<style  scoped>


</style>