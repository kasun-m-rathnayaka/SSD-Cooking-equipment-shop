const express = require('express')
const { getProduct, postProduct, getSingle, deleteProduct, updateProduct } = require('../controller/productController')
const router = express.Router()

router.get('/', getProduct)
router.get('/:id', getSingle)
router.post('/', postProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

module.exports = router
