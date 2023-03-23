<template>
    <div>
     
      <!-- Button trigger modal -->
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editProductModal">
  <i class="fa-solid fa-pen-to-square"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editProductModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form @submit.prevent="addProduct">
              <div class="form-group">
                <label for="prodName">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="prodName"
                  v-model="payload.prodName"
                />
              </div>
              <div class="form-group">
                <label for="prodID">Product ID</label>
                <input
                  type="number"
                  class="form-control"
                  id="prodID"
                  v-model="payload.prodID"
                />
              </div>
              <div class="form-group">
                <label for="prodDescription">Product Description</label>
                <textarea
                  class="form-control"
                  id="prodDescription"
                  rows="3"
                  v-model="payload.prodDescription"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <select class="form-control" id="category" v-model="payload.category">
                  <option value="laptops">Laptops</option>
                  <option value="tablets">tablets</option>
                  <option value="gaming">gaming</option>
                  <option value="vr">vr</option>
                  <option value="drones">Drones</option>
                </select>
              </div>
              <div class="form-group">
                <label for="quantity">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="payload.prodQuantity"
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="payload.price"
                />
              </div>
              <div class="form-group">
                <label for="URL">URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="imgURL"
                  v-model="payload.imgURL"
                />
              </div>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="editProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>

       
    </div>
</template>

<script>
import {useStore} from 'vuex';
export default{
    
    setup(){
      const payload= {
      prodID:'',
      prodName:'',
      prodDescription:'',
      category:'',
      price:'',
      prodQuantity:'',
      imgURL:'https://www.freepik.com/premium-vector/product-line-concept-simple-line-icon-colored-illustration-product-symbol-flat-design-can-be-used-ui-ux_19082268.htm#query=product%20icon&position=13&from_view=keyword&track=ais'
    }
        const store = useStore(); 
        const editProduct = async () => {
            await store.dispatch('editProduct',)
            await store.dispatch('fetchProducts');
            location.reload();    
        
        }
        return{
            payload,
            editProduct
        }
    }
}
</script>