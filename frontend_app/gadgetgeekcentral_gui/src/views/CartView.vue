<template>
   <div class="cart">
    <div class="table-responsive">
    <table class="table table-success table-hover table-striped">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove/Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in Cart">
                <td>{{ product.prodID }}</td>
                <td></td>
                <td>R{{ product.price }}</td>
                <td class="d-flex justify-content-center">
                    <button class="btn btn-danger ms-5" >
                        
                    </button>
                </td>
                </tr>
        </tbody>   
        </table>
      </div>
   </div>
</template>

<script>

export default{
  data(){
        return{
            userID: '',
            prodID: ""
        }
    },
    methods:{
        addToCart: function (user, product) {
            return this.$store.dispatch("addToCart", {
                userID: user?.userID,
                prodID: product?.prodID
            })
        },
    },

}

  
</script>

<style  scoped>
.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.cart h2 {
  font-size: 20px;
  margin-top: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.product-name {
  flex-grow: 1;
}

.product-price {
  margin-right: 20px;
}

.total {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

</style>