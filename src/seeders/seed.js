const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { Users,Products,Orders,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const users = [
  {
    username: "Jack Sparrow",
    email: "jacksparrow@gmail.com",
    password: "1234",
  },
  {
    username: "Elvis Presley",
    email: "elvis@gmail.com",
    password: "4456",
  },
  {
    username: "Clark Kent",
    email: "superman@gmail.com",
    password: "4568",
  },
  {
    username: "Barak Obama",
    email: "obama@gmail.com",
    password: "1234",
  },
  {
    username: "Simon Bolivar",
    email: "libertador@gmail.com",
    password: "1234",
  }
];

const products = [
  {
    name: "Hoodie Men",
    price: 120000,
    productImage: "https://www.freepik.com/free-psd/simple-white-hoodie-mockup-psd-comfortably-sporty-menswear_14323283.htm#query=man%20hoodie&position=0&from_view=keyword",
    availableQty: 18,
    status: true,
    userId: 1
  },
  {
    name: "Tshirt",
    price: 25000,
    productImage: "https://www.freepik.com/free-photo/tattooed-biker-hand-holds-hang-with-blank-black-t-shirt-from-premium-thin-cotton-isolated-white_11899478.htm#query=tshirt&position=0&from_view=search&track=sph",
    availableQty: 35,
    status: true,
    userId: 2
  },
  {
    name: "Sudadera",
    price: 150000,
    productImage:"https://www.freepik.com/free-photo/white-trendy-fashionable-couple-isolated-white-studio-wall_16144845.htm#query=sudadera&position=15&from_view=search&track=sph",
    availableQty: 20,
    status: true,
    userId: 3
  },
  {
    name: "Lycra Gym",
    price: 65000,
    productImage:"https://www.freepik.com/free-photo/fit-blond-woman-with-perfect-smile-stylish-sportswear-looking-camera-holding-bottle-water-white-wall-demonstrate-muscles_16638184.htm#query=gym&position=9&from_view=search&track=sph",
    availableQty: 26,
    status: true,
    userId: 2
  },
  {
    name: "Tshirt reflex",
    price: 68000,
    productImage:"https://www.freepik.com/free-photo/portrait-handsome-bearded-athlete-black-t-shirt-posing-dumbbell-studio-isolated-gray-background_25192733.htm#query=tshirt%20gym&position=5&from_view=search&track=sph",
    availableQty: 32,
    status: true,
    userId: 4
  },
  ,
  {
    name: "Rompevientos M",
    price: 8800,
    productImage:"https://www.freepik.com/free-photo/young-fit-woman-sport-wear-jacket-pink_14805576.htm#query=jacket%20gym&position=12&from_view=search&track=sph",
    availableQty: 26,
    status: true,
    userId: 3
  },

];

const orders = [
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  },
  {
    totalPrice: 0,
    userId:3,
    status: true,
  },
];

const carts =[
  {
    totalPrice: 0,
    userId: 1,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 2,
    status: true,
  }, {
    totalPrice: 0,
    userId: 3,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 4,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 4,
    quantity: 1,
    price: 0,
    status: true
  },
  {
    cartId: 2,
    productId: 5,
    quantity: 1,
    price: 0,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 1,
    price: 0,
    status:false
  },
  {
    orderId:2,
    productId:2,
    quantity: 1,
    price:0,
    status:false
  },
  {
    orderId:3,
    productId:3,
    quantity: 1,
    price: 0,
    status:false
  },
  
];

db.sync({ force: true }).then(() => {
  console.log("Sinronizado");
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    products.forEach(
      async (product) => await Products.create(product)
    );
  }, 100);
  setTimeout(() => {
    carts.forEach(
      async (cart) => await Cart.create(cart)
    );
  }, 200);
  setTimeout(() => {
    orders.forEach(async (order) => await Orders.create(order));
  }, 250);
  setTimeout(() => {
    productInCart.forEach(async (pic) => await ProductInCart.create(pic));
  }, 300);
  setTimeout(() => {
    productInOrder.forEach(async (pio) => await ProductInOrder.create(pio));
  }, 350);
});