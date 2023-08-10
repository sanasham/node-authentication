const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

async function connectToDatabase() {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      conn.connection.host,
      conn.connection.port,
      conn.connection.openUri
    );
  } catch (error) {
    console.log('error occurred while connecting to database', error);
  }
}

module.exports = { connectToDatabase };
