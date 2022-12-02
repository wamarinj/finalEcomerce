const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error.middleware");
const {usersRoutes, authRoutes,productRoutes, cartRoutes, purchaseRoutes} = require('./routes')
const transporter = require("./utils/mailer");
const initModels = require("./models/initModels");


require('dotenv').config();

const app = express();

//initModels();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
.then(() => console.log('Autenticacion ok'))
.catch((error) => console.log(error));

 db.sync({force: false})
.then(() => console.log('base de datos sincronizada'))
.catch((error) => console.log(error));

transporter.verify()
.then(() => console.log("Correos listos"));


app.get("/", (req, res) => {
    console.log('Bienvenido al server');
});

app.use("/api/v1/", usersRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", productRoutes);
app.use("/api/v1/", cartRoutes);
app.use("/api/v1/", purchaseRoutes);
app.use(handleError);

module.exports = app;

