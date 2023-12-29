const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema

const productSchema = new schema({
    id: { type: Number, required: false },
    title: { type: String, required: false },
    category: { type: String, required: false },
    cost: { type: Number, required: false },
    sellingprice: { type: Number, required: false },
    qty: { type: Number, required: false },
}, { timestamps: true })

module.exports = mongoose.model('sellproduct', productSchema)