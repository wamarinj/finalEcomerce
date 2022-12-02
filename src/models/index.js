const Users = require("./users.models");
const Products = require ('./products.models');
const Cart = require ('./cart.models');
const ProductInOrder = require('./productsOrders.models');
const ProductInCart = require('./productsCart.models');
const Orders = require ('./orders.models');


module.exports = {
  Users, Products, Cart, ProductInCart, ProductInOrder, Orders,
 
};