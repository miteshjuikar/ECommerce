const express =  require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const authRouter = require('./router/auth/authRoutes');
const adminProductsRouter = require('./router/admin/product-routes');

const shopProductsRouter = require('./router/shop/product-routes')

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

const originURL = process.env.productionURL || 'https://eshop-frontend-ic5v.onrender.com';

app.use(cors({
    origin: originURL,
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

app.use('/api/shop/products', shopProductsRouter);


app.listen(PORT, () => console.log(`Server is started on port: ${PORT} 
Requirest will accept through URL: ${originURL}`));

