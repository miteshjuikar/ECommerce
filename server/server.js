const express =  require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const { connectToMongoDB } = require('./connection');

const app = express();
const PORT = process.env.PORT || 8100;

//MongoDB Connection
connectToMongoDB("mongodb+srv://miteshjuikar:MyMongoDB@mycluster.krravcy.mongodb.net/ecommerce")
                    .then(console.log("MongoDB connected successfully"))
                    .catch((err)=>console.log(`Error: ${err}`)
                );


app.use(cors({
    origin: 'http://localhost:5173/',
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

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`));