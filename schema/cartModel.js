const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: false },
    price: { type: Number, required: false },
    image: {type: String, required: false},
    quantity: { type: Number, required: false },
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("Cart3",cartSchema);