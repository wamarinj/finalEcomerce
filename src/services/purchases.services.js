
const { Cart, ProductInCart, ProductInOrder, Order } = require("../models");

class PurchaseServices {
  static async createOrder(data) {
    try {
      const createOrder = await Order.create({
        userId: data,
        totalPrice: 0,
        status: true,
      });

      const orderId = createOrder.id;

      const getCartData = await Cart.findOne({
        where: { userId: data },
        include: {
          model: ProductInCart,
        },
      });

      //console.log("GET CARTDATA", getCartData);
      const productList = getCartData.productInCarts;

      const newList = productList.map((product) => {
        return {
          orderId,
          productId: product.productId,
          quantity: product.quantity,
          price: product.price,
          status: true,
        };
      });

      console.log("NEW LIST", newList);

      //const addProducts = newList.map(product => ProductInOrder.create(product))

      await forEach(newList, async element => await ProductInOrder.create(element));

      const getOrderData = await Order.findOne({
        where: { id: orderId },
        include: {
          model: ProductInOrder,
        },
      });

      const emptyCart = await ProductInCart.destroy({where: {cartId: getCartData.id}})

      return getOrderData;
    } catch (error) {
      throw error;
    }
  }

  static async seeOrders (data){
    try {
        const getOrders = await Order.findAll({
            where: { userId: data },
            include: {
                model: ProductInOrder,
              },
        })

        return getOrders
    } catch (error) {
        throw error
    }
  }
}

module.exports = PurchaseServices;