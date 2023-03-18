import axios from "axios";
import { createStore } from "vuex";

const ggcURL = "https://capstone-gl3k.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    cart:null,
  },
  getters: {
    getProducts: (state) => state.products,
    getMessage: (state) => state.msg,
    getProduct: (state) => state.product,
    getUsers: (state) => state.users,
    getUser:(state)=>state.user,
    addproduct: (state) => state.addproduct,
    deleteproduct: (state) => state.deleteproduct,
    addUser: (state) => state.product,
    updateUser: (state) => state.updateproduct,
    editproduct: (state) => state.editproduct,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },

    setUser(state, user) {
      state.user = user;
    },
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),

    setMessage(state, msg) {
      state.msg = msg;
    },
    setSpinner(state, value) {
      state.showSpinner = value;
    },
    addProduct: (state, value) => (state.value = value),
    deleteproduct: (state, value) => (state.value = value),
    addUser: (state, value) => (state.value = value),
    updateUser: (state, value) => (state.value = value),
    getProduct: (state, value) => (state.value = value),
    editproduct: (state, editproduct) => (state.editproduct = editproduct),
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${ggcURL}login`, payload);
      const { result,msg, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } if(msg) {
        context.commit("setMessage", msg);
    }else{
       context.commit("setMessage", msg);
    }
    },
    async register(context, payload) {
      const res = await axios.post(`${ggcURL}register`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async fetchUsers(context) {
      const res = await axios.get(`${ggcURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },

    fetchProducts: async (context) => {
      const response = await axios.get(`${ggcURL}products`);
      const { results } = response.data;
      if (results) {
        context.commit("setProducts", results);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },
    fetchProduct: async (context, id) => {
      const response = await axios.get(`${ggcURL}product/${id}`);
      const { results } = response.data;
      if (results) {
        context.commit("setProduct", results[0]);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },

    async addProduct(context, payload) {
      const res = await axios.post(`${ggcURL}add`, payload);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setproduct", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${ggcURL}product/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${ggcURL}user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchUserById(context, id) {
      const res = await axios.get(`${ggcURL}user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateUser(context, payload) {
      const res = await axios.put(`${ggcURL}user/${payload.userID}`, payload);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async editProduct(context, prodID) {
      const res = await axios.put(`${ggcURL}product/${prodID}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setEditProducts", result);
      } else {
        context.commit("setMessage ", err);
      }
    },
  },
  modules: {},
});
