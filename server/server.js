const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const {connection , syncModels} = require('./DbConfig/dbConfig');
const User = require('./Models/userModel');
const Program = require('./Models/programModel');

const port = process.env.PORT || 5000;
connection();

User.hasMany(Program, { foreignKey: "userId" });
Program.belongsTo(User, { foreignKey: "userId" });

syncModels();

app.use(express.json());
app.use(cors());
app.use('/api/user/',userRoutes);
app.listen(port,() => {
    console.log('listining on port 5000');
});