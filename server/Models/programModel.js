const { DataTypes } = require('sequelize');
const { sequelize } = require('../DbConfig/dbConfig');

const Program = sequelize.define('Program', {
  programId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  programType: {
    type: DataTypes.ENUM('FT','PT'),
    allowNull: false,
  },
  registrations: {
    type: DataTypes.ENUM('Yes', 'No'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull : false
  },
  placementAssurance: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  universityName: {
    type: DataTypes.STRING,
    allowNull : false
  },
  facultyProfile: {
    type: DataTypes.STRING, 
  },
  learningHours: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.STRING,
  },
  certificateDiploma: {
    type: DataTypes.ENUM('Certificate', 'Diploma'),
  },
  eligibilityCriteria: {
    type: DataTypes.TEXT,
  },
});

module.exports = Program;
