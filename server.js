// Required packages and modueles
const express = require("express");
const InitiateMongoServer = require("./config/db");
const baseRouter = require('./routes')
const cors = require('cors')
// Initiate Mongo Server
InitiateMongoServer();

// Initiate Express App
const app = express();
app.use(cors())
// Define PORT
const PORT = parseInt(process.env.PORT, 10) || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Router Middleware
 * Router - /api/*
 * Method - *
 */
app.use("/api", baseRouter);

// Boot express server
app.listen(PORT, () => {
  console.log(`Server Booted at PORT ${PORT}`);
});