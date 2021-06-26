// Require mongoose library for MongoDB
const mongoose = require("mongoose");
require('dotenv').config();
// MongoDB cloud url
const MONGOURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.11ltg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoServer!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;