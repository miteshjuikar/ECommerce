const express =  require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const authRouter = require('./router/auth/authRoutes');
const adminProductsRouter = require('./router/admin/product-routes');

const { connectToMongoDB } = require('./connection');

require('dotenv').config();
const userId = process.env.userId;
const userPassword = process.env.userPassword;

const app = express();
const PORT = process.env.PORT.address || 5000;

//MongoDB Connection
connectToMongoDB(`mongodb+srv://${userId}:${userPassword}@mycluster.krravcy.mongodb.net/eShop`)
                    .then(console.log("MongoDB connected successfully"))
                    .catch((err)=>console.log(`Error: ${err}`)
                );

app.use(cors({
    origin: process.env.productionURL || 'https://eshop-frontend-ic5v.onrender.com',
    methods: [ 'GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials: true
}));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);


app.listen(PORT, () => console.log(`Server is started on port: ${PORT} 
Requirest will accept through URL: ${process.env.productionURL}`));

