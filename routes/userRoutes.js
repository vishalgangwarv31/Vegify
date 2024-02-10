const express = require('express');
const { registerUser, loginUser, createUser ,getorder,checkout} = require('../controller/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post("/register" ,registerUser);

router.post("/login" ,loginUser);

router.get("/current" ,validateToken, createUser);

router.get("/getorder",validateToken,getorder);

router.post("/cart/checkout.html",checkout);

module.exports = router;
