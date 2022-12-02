const { Users, Cart } = require ('../models');

class UserServices{
    static async create(newUser){
        try {
            const result = await Users.create(newUser);
            console.log(result.id)
            const createCart = await Cart.create( {
                totalPrice: 0,
                userId: result.id,
              })
            return result;
            
        } catch (error) {
            throw error;
        }
    }

    static async getOne(userId){
        try {
            const userData = await Users.findOne({where: {id: userId}})
            return userData
        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;