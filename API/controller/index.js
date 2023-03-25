const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User, Product,Cart} = require('../model');
// Create a user instance
const user = new User();
// Product instance
const product = new Product();
//cart instance 
const cart= new Cart();
// ^/$|/gadgetgeekcentral 
route.get('^/$|/GadgetGeekCentral', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
//get one user 
route.get('/user/:id',(req,res)=>{
user.fetchUser(req,res)}
)
// Update user
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})


// Delete a sinlge  user 
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// Fetch all products
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// Fetch a single product
route.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Add a new product
route.post('/add', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Update a product
route.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
route.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})

//cart 

//add to cart
route.post('/user/:id/cart',
bodyParser.json(),
(req,res)=>{cart.addToCart(req,res);
})

//get cart items
route.get('/user/:id/carts',(req,res)=>
{cart.getCartItems(req,res)})

//update cart item 
route.put('/user/:id/cart',
bodyParser.json(),
(req,res)=>{cart.updateCartItem(req,res)})

//delete delete item from cart
route.delete('/user/:id/cart/:id',(req,res) =>
{cart.removeCartItem(req,res)}
)
//clear cart
route.delete('/user/:id/cart',(req,res) =>
    {cart.clearCart(req,res)}
    )



module.exports = route;