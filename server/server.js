const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const {connection} = require('./DbConfig/dbConfig');

const port = process.env.PORT || 5000;
connection();
app.use(express.json());
app.use(cors());
app.use('/user/',userRoutes);
app.listen(port,() => {
    console.log('listining on port 5000');
});