const express = require('express')
const { getKpi, getSingleKpi, postKpi, deleteKpi, updatekpi } = require('../controller/kpiController')
const router = express.Router()

router.get('/', getKpi)
router.get('/:id', getSingleKpi)
router.post('/', postKpi)
router.delete('/:id', deleteKpi)
router.patch('/:id', updatekpi)

module.exports = router
