<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateProductModal'+this.product.prodID">
  Edit
</button>

<!-- Modal -->
<div class="modal fade mt-5" :id="'updateProductModal'+this.product.prodID" tabindex="-1" aria-labelledby="updateProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="updateProductModalLabel">Edit {{ this.product.prodName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control mb-1" type="number" name="prodID" :id="'prodID'+this.product.prodID" :placeholder="this.product.prodID" :value="this.product.prodID" readonly>
        <input class="form-control mb-1" type="text" name="prodName" :id="'prodName'+this.product.prodID" :placeholder="this.product.prodName" v-model="payloadTemp.prodName" required>
        <input class="form-control mb-1" type="text" name="prodDescription" :id="'prodDescription'+this.product.prodID" :placeholder="this.product.prodDescription" v-model="payloadTemp.prodDescription" required>
        <input class="form-control mb-1" type="text" name="price" :id="'price'+this.product.prodID" :placeholder="this.product.price" v-model="payloadTemp.price" required>
        <input class="form-control mb-1" type="text" name="prodQuantity" :id="'prodQuantity'+this.product.prodID" :placeholder="this.product.quantity" v-model="payloadTemp.quantity" required>
        <input class="form-control mb-1" type="text" name="imgUrl" :id="'imgUrl'+this.product.prodID" :placeholder="this.product.prodImg"  v-model="payloadTemp.prodImg" required>
        <input class="form-control" type="number" name="catID" :id="'catID'+this.product.prodID" min="1" max="3" :placeholder="this.product.catID" :value="this.product.catID" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="editProduct(this.product)">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
export default{
    inheritAttrs:false,
    props:['product'],
    setup(){
        const store = useStore();
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        let payloadTemp = {
                prodID:'',
                prodName:'',
                prodDescription:'',
                price:'',
                quantity:'',
                prodImg:'',
                catID:''
            }
        let payloadFunction= async (product) => {
            let payload =  await  {
                prodID:await product.prodID,
                prodName:payloadTemp.prodName,
                prodDescription:payloadTemp.prodDescription,
                price:payloadTemp.price,
                quantity:payloadTemp.quantity,
                prodImg:payloadTemp.prodImg,
                catID:await product.catID
            }
            if(payload.prodName == '')payload.prodName=product.prodName;
            if(payload.prodDescription == '')payload.prodDescription=product.prodDescription;
            if(payload.price == '')payload.price=product.price;
            if(payload.quantity == '')payload.quantity = product.quantity;
            if(payload.prodImg == '')payload.prodImg=product.prodImg;
            return payload;
        }
        const editProduct = async (product) => {
            await store.dispatch('updateProduct', await  payloadFunction(product));
            await store.dispatch('fetchProducts');
            location.reload();
        }
        return{
            payloadTemp,
            user,
            payloadFunction,
            editProduct
        }
    }
}
</script>