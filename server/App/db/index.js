const mongoose = require("mongoose");
const { DB_URL } = require("../../config");

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(
      `Database connected successfully on host: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error while connecting database ${error}`);
  }
};

module.exports = dbConnection;
