//Import db connection from config folder
let db = require("../config");
//Import bcrypt module
let { hash, compare, hashSync } = require("bcrypt");

// creating a token
let { createToken } = require("../middleware/AuthenticatedUser.js");

class User {
  login(req, res) {
    const { emailAdd, userPass } = req.body

    const strQry = `
              SELECT userID, firstname, lastname, emailAdd, userPass, gender, userRole, userProfile, cellphoneNumber, joinDate
              FROM USERS 
              WHERE emailAdd = '${emailAdd}';
              `;

    db.query(strQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "You provided the wrong email address or Password" });
      } else {
        await compare(userPass, data[0].userPass, (cErr, cResult) => {
          if(cErr) cResult(cErr,null);
          const jwToken = createToken({
            emailAdd,
            userPass
          });
          //saving token
          res.cookie("LegitUser", jwToken, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "You have successfully logged in",
              jwToken,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "You entered an invalid password or did not register.",
            });
          }
        });
      }
    });
  }

  fetchUsers(req, res) {
    const strQry = `
          SELECT
          userID,
          firstname,
          lastname,
          emailAdd,
          gender,
          userRole,
          userProfile,
          cellphoneNumber,
          joinDate
           FROM USERS;
          `;
    db.query(strQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }

  fetchUser(req, res) {
    const strQry = `

          SELECT   
          userID,
          firstname,
          lastname,
          gender,
          cellphoneNumber,
          emailAdd,
          userRole,
          userProfile,
          joinDate 
          
          FROM USERS WHERE userID = ?;
          `;
    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else res.status(200).json({ result: data });
    });
  }

  async createUser(req,res) {
    // Payload
    let detail = req.body;
    // Hashing user password
    detail.userPass = await hash(detail.userPass, 15);
    // This information will be used for authentication.
    let user = {
      emailAdd: detail.emailAdd,
      userPass: detail.userPass,
    };
    // sql query
    const strQry = `
          INSERT INTO USERS
          SET ?;`;
    db.query(strQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err:'unable to register user' });
      } else {
        // Create a token
        const jwToken = createToken(user);
        res.cookie("LegitUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "user was successfully registered" });
        
      }
    });
  }

  updateUser(req, res) {
    let data = req.body;
    if (data.userPass !== null || 
      data.userPass !== undefined)
      data.userPass = hashSync(data.userPass, 15);
    const strQry = `
          UPDATE USERS
          SET ?
          WHERE userID = ?;
          `;
    //db
    db.query(strQry, [data, req.params.id],
       (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "User  updated" });
    });
  }

  deleteUser(req, res) {
    const strQry = `
          DELETE FROM USERS
          WHERE userID = ?;
          `;
    //db
    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "user deleted" });
    });
  }
}

class Product {
  fetchProducts(req, res) {
    const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
          FROM Products;`;
    db.query(strQry, (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  fetchProduct(req, res) {
    const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
          FROM Products
          WHERE prodID = ?;`;
    db.query(strQry, [req.params.id], (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  addProduct(req, res) {
    const strQry = `
          INSERT INTO Products
          SET ?;
          `;
    db.query(strQry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to insert a new record." });
      } else {
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  updateProduct(req, res) {
    const strQry = `
          UPDATE Products
          SET ?
          WHERE prodID = ?;
          `;
    db.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to update a record." });
        console.log(err);
      } else {
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
          DELETE FROM Products
          WHERE prodID= ?;
          `;
    db.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

class Cart {
  // Function to add a product to the cart
  addToCart(req, res) {
    const qry = `INSERT INTO  
        Cart  SET ?;`;
    db.query(qry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to add to new cart." });
      } else {
        res.status(200).json({ msg: "item added to cart" });
      }
    });
  }

  // Function to retrieve all the products in the cart for a specific user
  getCartItems(req, res) {
    const qry = `SELECT Cart.id, Cart.prodID, Cart.userID, USERS.firstname, USERS.lastname, Products.prodName,  Products.price * Cart.quantity as total, Products.price
    FROM Cart
    INNER JOIN USERS ON USERS.userID = Cart.userID
    INNER JOIN Products ON Products.prodID = Cart.prodID
    WHERE Cart.userID = ${req.params.id};
    `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }

  // Function to update the quantity of a product in the cart
  updateCartItem(req, res) {
    const qry = `UPDATE Cart SET quantity = ? WHERE id = ?`;

    db.query(qry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to update a record." });
        console.log(err);
      } else {
        res.status(200).json({ msg: "cart updated" });
      }
    });
  }

  // Function to remove a product from the cart
  removeCartItem(req, res) {
    const qry = `DELETE FROM Cart WHERE id = ?`;
    db.query(qry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A cart item  was deleted." });
    });
  }
}
// Export User class
module.exports = {
  User,
  Product,
  Cart,
};
