const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema

const productSchema = new schema({
    profit: { type: Number, required: false },
    revenue: { type: Number, required: false },
    expences: { type: Number, required: false },
    date: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model('kpi', productSchema)