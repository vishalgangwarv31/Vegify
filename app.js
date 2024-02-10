const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/Dbconnect");
const dotenv = require("dotenv").config();
const path = require("path");

connectDb();
const app = express();
const port = process.env.PORT|| 5001;

const static_path =path.join(__dirname,"../backend/front/");
// console.log(path.join(__dirname,"../backend/front"));
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",require("./routes/userRoutes")); 
app.use(errorHandler);

app.listen(port , (req,res)=>{
    console.log(`server started ${port}`);
});