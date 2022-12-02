const { UserServices } = require('../services')
const transporter  = require("../utils/mailer");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser)
    const result = await UserServices.create(newUser)
    res.status(201).json(result);

    await transporter.sendMail({
      from: "<andresjimenezdeveloper@gmail.com>",
      to: result.email,
      subject: "¡Black Friday! 50% Discount ",
      text: `Welcome ${result.username} thanks for  your shopping`,
      html: `<p>Hi<h1>${result.username} </h1>thanks for  your shopping</p>`
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Error info",
    });
  }
};

const getAllUsers = async (req, res, next) =>{
  try {
    const users = await UserServices.getAll();
    res.json({users})
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "somenthig is wrong",
    });
    
  }

}
module.exports = {
  userRegister,
  getAllUsers
};