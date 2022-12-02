const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { Users,Products,Orders,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
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

const product = [
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

const order = [
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

const cart =[
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

async function seeding(){
  await db.sync({force: true})
  console.log("sync ok");

  
  await forEach(user, (user)=> Users.create(user))
  await forEach(product, (product)=> Products.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Orders.create(order))
  await forEach(productInCart, (pri) => ProductInCart.create(pri))
  await forEach(productInOrder, (pro)=> ProductInOrder.create(pro)) 
  
};
seeding();