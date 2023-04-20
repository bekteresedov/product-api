const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  createdAt: {  
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", ProductSchema);
