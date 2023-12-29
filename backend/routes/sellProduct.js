const express = require('express')
const { getSellProduct, getSellSingle, postSellProduct, deleteSellProduct, updateSellProduct } = require('../controller/sellProductController')
const router = express.Router()

router.get('/', getSellProduct)
router.get('/:id', getSellSingle)
router.post('/', postSellProduct)
router.delete('/:id', deleteSellProduct)
router.patch('/:id', updateSellProduct)

module.exports = router
