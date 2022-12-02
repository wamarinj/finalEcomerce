const { Users,Products,Orders,ProductInCart,ProductInOrder,Cart } = require("./index");

const initModels = () => {
    Users.hasOne(Cart);
    Cart.belongsTo(Users);

    Users.hasMany(Products, { foreignKey: "user_id"});
    Products.belongsTo(Users, { foreignKey: "user_id"});

    Users.hasMany(Orders, {as:"order", foreignKey: "user_id"});
    Orders.belongsTo(Users, {as:"purchase", foreignKey: "user_id"});

    Products.belongsToMany(Orders, {through: ProductInOrder});
    Orders.belongsToMany(Products, {through: ProductInOrder });

    Products.hasMany(ProductInOrder);
    ProductInOrder.belongsTo(Products);
    Orders.hasMany(ProductInOrder);
    ProductInOrder.belongsTo(Orders);

    Products.belongsToMany(Cart, {through:ProductInCart});
    Cart.belongsToMany(Products, {through: ProductInCart});

    Products.hasMany(ProductInCart);
    ProductInCart.belongsTo(Products);
    Cart.hasMany(ProductInCart);
    ProductInCart.belongsTo(Cart);

};

module.exports = initModels;