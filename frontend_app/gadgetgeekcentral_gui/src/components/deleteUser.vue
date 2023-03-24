<template>
    <div class="deluser">
 <button type="button" class="btn btn-danger" v-if="$route.params.id"  @click="deleteUser">DeleteProfile</button>
    </div>
</template>

<script>
     export default {
      methods: {
      deleteUser() {
        this.$store.dispatch('deleteUser', this.$route.params.id);
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }   
    },
   
  }
</script>

<style  scoped>
.deluser{
  background-color: red;
}
</style>