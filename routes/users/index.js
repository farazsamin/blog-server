// Require express
const express = require('express');
const User = require('../../models/User.js')

// Initiate express router
const router = express.Router();

/**
 * @method - GET
 * @param - /users/*
 * @description - Show all users
 */
router.get('/', (req, res) => {
    res.json({ message: "Show all users" });
});

router.post('/login', async (req, res) => {
    
    try {
        console.log("working")
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredetials(email, password);
        const token = await user.getAuthToken();
        res.status(200).send({ user, token });

    } catch (err) {
        console.log(err.message);
        res.status(400).send({ err: err.message });
    }
})

module.exports = router;
