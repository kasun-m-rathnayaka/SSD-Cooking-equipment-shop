const express = require('express')
const { getBuyProduct, getBuySingle, postBuyProduct, deleteBuyProduct, updateBuyProduct } = require('../controller/buyProductController')
const router = express.Router()

router.get('/', getBuyProduct)
router.get('/:id', getBuySingle)
router.post('/', postBuyProduct)
router.delete('/:id', deleteBuyProduct)
router.patch('/:id', updateBuyProduct)

module.exports = router
