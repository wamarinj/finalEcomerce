
const {Router} = require('express');
const { userRegister, getAllUsers } = require('../controllers');
const authenticate = require ('../middlewares/auth.middleware');

const router = Router();


router.post('/user/register', userRegister);
router.get('/users', authenticate, getAllUsers);


module.exports = router;