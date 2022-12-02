const { ProductInCart, Products, Cart } = require("../models")


class CartServices {
    static async addProductToCart (product, res){
        try {
            const searchProduct = await Products.findOne({where: product.productId});
            const searchCart = await Cart.findOne({where: {userId: product.userId}})
            
            let productData = {}

            if (searchProduct && searchCart) {
                productData.cartId = searchCart.id
                productData.quantity =  product.quantity 
                productData.productId =  product.productId 
                productData.price = searchProduct.price
                productData.name = searchProduct.name
                productData.stock = searchProduct.availableQty
            } else {
                res.status(400).json({error: "product does not exist"})
            }

            //console.log("ESTO ES PRODUCT DATA", productData);
            


            const add = await ProductInCart.create({
                cartId: productData.cartId,
                quantity: product.quantity,
                productId: product.productId,
                price: productData.price
            })

            
            return productData
        } catch (error) {
            throw error
        }
    }

    static async getCart (userId){
        try {
            const cart = await Cart.findOne({
                where: {userId},
            })

            console.log('___cart', cart.dataValues.id)
            const productsInCart = await Cart.findOne({
                where: {userId},
                include: [{
                    model: ProductInCart,
                    where: {
                      cartId: cart.dataValues.id
                    },
                  }]
            })
            console.log(productsInCart);
            return cart
        } catch (error) {
            throw error
            
        }

    }
}

module.exports = CartServices