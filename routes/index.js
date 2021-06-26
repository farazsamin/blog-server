// Require express
const express = require('express');

// Initiate express router
const router = express.Router();

// User routes module
const userRouter = require('./users');

/**
 * @method - GET
 * @param - /
 * @description - Root route
 */
router.get("/", (req, res) => {
    res.json({ message: "Welcome to REST API" });
});

/**
 * Router Middleware
 * Router - /users/*
 * Method - *
 */
router.use("/users", userRouter);

module.exports = router;
