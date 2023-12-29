const { default: mongoose } = require("mongoose")
const productModel = require("../models/buyProductModel")

const getBuyProduct = async (req, res) => {
    const response = await productModel.find().sort({ createdAt: -1 })
    res.status(200).json(response)
}

const getBuySingle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const response = await productModel.findById(id)

    if (!response) {
        return res.status(404).json({ error: 'No such product' })
    }

    res.json(response).status(200)
}

const postBuyProduct = async (req, res) => {
    const { id, title, category, cost, sellingprice, qty } = req.body

    try {
        const response = await productModel.create({ id, title, category, cost, sellingprice, qty })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const deleteBuyProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const response = await productModel.findByIdAndDelete({ _id: id })
    if (!response) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(response)
}

const updateBuyProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const response = await productModel.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!response) {
        return res.status(404).json("No such workout")
    }

    res.status(200).json(response)
}

module.exports = {
    getBuyProduct,
    getBuySingle,
    postBuyProduct,
    updateBuyProduct,
    deleteBuyProduct,
}