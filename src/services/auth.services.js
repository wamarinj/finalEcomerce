const {Users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices{
    static async authenticate (credentials){
        try {
            const { email, password } = credentials;
            console.log('___email', email)
            console.log('___password',password)
            const result = await Users.findOne({
                where:{email}
            })
            console.log(result);
            if (result){
                const isValid = bcrypt.compareSync( password, result.password);
                return isValid ? { isValid, result} : isValid 
            }else{
                return isValid
            }
            
        } catch (error) {
            throw error
        }
    }
    static getToken (data){
        try {
            const token = jwt.sign( data, process.env.SECRET, {
            algorithm:'HS512',
            expiresIn: '2d'
            } );
            return token
        } catch (error) {
            throw error
            
        }

    }
}

module.exports = AuthServices;