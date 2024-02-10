const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email :{
        type : String,
        required :[true,"add email"],
        unique :[true,"email address is already taken"],
    },
    password:{
        type:String,
        required :[true, "enter pass"],
    }
},
{
    timestamps :true,
});
module.exports = mongoose.model("User",userSchema);