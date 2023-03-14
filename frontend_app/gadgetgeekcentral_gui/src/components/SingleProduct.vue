<template>
    <div class="row mt-5">
        <SpinnerComp/>
        <div class="col-4">
            <img src="" class="w-100"/>
        </div>
        <div class="col-8">
            <h1></h1>
            <div class="btn btn-dark">Add to cart</div>
            <p class="mt-4"></p>
        </div>

    </div>
</template>

<script>

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import SpinnerComp from "./SpinnerComp.vue";

export default{
    props: ["prodID"],
    setup() {
        const store = useStore();
        store.dispatch("fetchProduct");
        const product = computed(() => store.state.product);
        const spinnerDisplay = computed(() => store.state.showSpinner);
        return {
            product,
            spinnerDisplay,
        };
    },
    components: { SpinnerComp, SpinnerComp }
}
</script>

<style  scoped>

</style>