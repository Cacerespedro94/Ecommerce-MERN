const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    stock: { type: Number, required: true },
    price: { type: Number, required: true},
    category: { type: String, required: true},
    imageUrl: { type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);