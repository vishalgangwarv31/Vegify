const asyncHandler = require("express-async-handler");
const Cart3 = require('../schema/cartModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User  = require("../schema/userModel");

const registerUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    if( !email || !password)
    {
        res.status(400);
        throw new Error("data is insufficient");
    }
    const userAvailable = await User.findOne({email}); 
    if(userAvailable)
    {
        res.status(400);
        throw new Error("user already available"); 
    }

    const hashPassword = await bcrypt.hash(password,10);
    console.log("hashed pass :" ,hashPassword);

    const user = await User.create({
        email,
        password: hashPassword,
    });
    console.log(`user created ${user}`);
    console.log("sdjhfvskdvhfksvdkfs");
    if(user)
    {
        // res.redirect("/");
        res.status(201).json({_id : user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("data not valid");
    }

    res.json({message : "register user"});
});

const loginUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    console.log(req.body);
    if(!email || !password)
    {
        res.status(400);
        throw new Error("all firel are mand");
    }
    const user  = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password)))
    {
        const accessToken = jwt.sign({
            user:{
                email : user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1d"}
        );
        // res.redirect("/");
        console.log(user);
        res.status(200).json({accessToken});
    }else {
        res.status(401);
        throw new Error("incorrect pass"); 
    }
});

const createUser = asyncHandler(async (req,res) =>{
    res.json(req.user);
});

const getorder = asyncHandler(async (req,res) =>{
    const order = await Cart3.find({ _id: req.user.id});
    res.status(200).json(order);
});

const checkout = asyncHandler(async (req,res) =>{
        const cartItems = req.body; 
        const filteredData = cartItems.filter(item => item !== null);
        // console.log(filteredData);


        const savedItems = await Cart3.insertMany(filteredData);
        // console.log(savedItems);
        res.status(201).json(savedItems);
        console.log("success");
});

module.exports = {registerUser , loginUser,createUser,getorder,checkout};
