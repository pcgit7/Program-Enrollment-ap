const { DataTypes } = require('sequelize');
const { sequelize } = require('../DbConfig/dbConfig');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique : true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});

User.sync({ alter: true }).then(() => {
  console.log("User Model synced");
});

module.exports = User;