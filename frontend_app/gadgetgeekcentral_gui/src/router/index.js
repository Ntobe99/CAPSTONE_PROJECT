import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import productsView from '../views/ProductsView.vue'
import contactView from  '../views/ContactView.vue'
import adminView from '../views/AdminView.vue'
import loginView from  '../views/LoginView.vue'
import registerView from '../views/RegisterView.vue'
import userView from '../views/UserProfileView.vue'
import updateComp from '../components/updateProduct.vue'
import singleproduct from '../components/SingleProduct.vue'
import deleteProduct from '../components/deleteProduct.vue'
import updateUserComp from '../components/updateUser.vue'
import deleteUser from '../components/deleteUser.vue'
import cart from  '../views/CartView.vue'
import addProduct from '../components/addProduct.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',  
  component:aboutView
  },
  {
    path: '/products',
    name: 'products',
   component:productsView
  },
  {
    path: '/contact',
    name: 'contact',
    component : contactView
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView
  },
  {
    path: '/login',
    name: 'login',
    
    component:loginView
  },
  {
    path: '/register',
    name: 'register',
    
    component: registerView
  },
  {
    path: '/user',
    name: 'user',
    component: userView
  },
  {
    path:'/updatep',
    name:'updatep',
    component:  updateComp
  },
  {
    path:'/singlep/:id',
    name:'singlep',
    component: singleproduct
  },
  {
    path:'/deleteUser/:id',
    name:'deleteuser',
    component: deleteUser
  },
  {
    path:'/deleteProduct/:id',
    name:'deleteproduct',
    component: deleteProduct
  },
  {
    path:'/updateUser',
    name:'update user',
    component: updateUserComp 
  },
  {
    path:'/cart',
    name:'cart',
    component: cart
  },
  {
    path:'/add',
    name:'add',
    component:  addProduct
  }
  



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
