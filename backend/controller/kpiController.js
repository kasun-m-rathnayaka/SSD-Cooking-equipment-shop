const { default: mongoose } = require("mongoose")
const productModel = require("../models/kpi")

const getKpi = async (req, res) => {
    const response = await productModel.find().sort({ createdAt: 1 })
    res.status(200).json(response)
}

const getSingleKpi = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such kpi' })
    }

    const response = await productModel.findById(id)

    if (!response) {
        return res.status(404).json({ error: 'No such kpi' })
    }

    res.json(response).status(200)
}

const postKpi = async (req, res) => {
    const { profit, revenue, expences, date } = req.body

    try {
        const response = await productModel.create({ profit, revenue, expences, date })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const deleteKpi = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such kpi' })
    }

    const response = await productModel.findByIdAndDelete({ _id: id })
    if (!response) {
        return res.status(404).json({ error: 'No such kpi' })
    }

    res.status(200).json(response)
}

const updatekpi = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such kpi' })
    }

    const response = await productModel.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!response) {
        return res.status(404).json("No such kpi")
    }

    res.status(200).json(response)
}

module.exports = {
    getKpi,
    getSingleKpi,
    postKpi,
    deleteKpi,
    updatekpi,
}