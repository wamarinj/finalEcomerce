const { PurchaseServices, UserServices } = require("../services");
const transporter = require("../utils/mailer");

const purchase = async (req, res, next) =>{
    try {
        const {userId} = req.params
        

        const data = Number(userId)

        const user = await UserServices.getOne(userId)
        const result = await PurchaseServices.createOrder(data)
        console.log("Usuario ––>", user);

        res.status(201).json(result)

        await transporter.sendMail({
            from: "<andresjimenezdeveloper@gmail.com>",
            to: user.email,
            subject: "Thank you, You win 50 usd for your next purchase",
            text: `Hi ${user.username} thanks, see you soon for your next purchase`,
            html: `<p>Hi<h1>${user.username} </h1>thanks, see you soon for your next purchase</p>`
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "failure info"
        })
    }
}

const getAll = async (req, res, next) => {
    try {
        const {userId} = req.params

        const data = Number(userId)
        console.log("Data", data);
        const result = await PurchaseServices.seeOrders(data)
        res.json(result)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "error"
        })
    }
}

module.exports = {
    purchase,
    getAll
}