const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("program-registration", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models synced with the database");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
};

module.exports = { sequelize, connection, syncModels };
