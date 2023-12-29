const { default: mongoose } = require("mongoose")
const productModel = require("../models/sellProductModel")

const getSellProduct = async (req, res) => {
    const response = await productModel.find().sort({ createdAt: -1 })
    res.status(200).json(response)
}

const getSellSingle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const response = await productModel.findById(id)

    if (!response) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.json(response).status(200)
}

const postSellProduct = async (req, res) => {
    const { id, title, category, cost, sellingprice, qty } = req.body

    try {
        const response = await productModel.create({ id, title, category, cost, sellingprice, qty })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const deleteSellProduct = async (req, res) => {
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

const updateSellProduct = async (req, res) => {
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
    getSellProduct,
    getSellSingle,
    postSellProduct,
    deleteSellProduct,
    updateSellProduct,
}