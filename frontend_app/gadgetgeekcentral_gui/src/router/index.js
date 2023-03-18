import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/user',
    name: 'user',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfileView.vue')
  },
  {
    path:'/updatep',
    name:'updatep',
    component: () => import(/* webpackChunkName: "about" */ '../components/updateProduct.vue')
  },
  {
    path:'/singlep/:id',
    name:'singlep',
    component: () => import(/* webpackChunkName: "about" */ '../components/SingleProduct.vue')
  },
  {
    path:'/cart',
    name:'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
  },
  {
    path:'/add',
    name:'add',
    component: () => import(/* webpackChunkName: "about" */ '../components/addProduct.vue')
  }
  



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
