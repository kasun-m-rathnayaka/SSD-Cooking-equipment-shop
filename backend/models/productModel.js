const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema

const productSchema = new schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    cost: { type: Number, required: true },
    sellingprice: { type: Number, required: true },
    stocklevel: { type: Number, required: true },
    minstocklevel: { type: Number, required: true },
    image: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)