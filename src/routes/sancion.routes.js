const express = require('express')
const router = express.Router()
const sancionController = require('../controller/sancion.controller');

router.get('/', sancionController.findAll);

router.post('/', sancionController.create);

router.get('/:id', sancionController.findById);

router.put('/:id', sancionController.update);

router.delete('/:id', sancionController.delete);

module.exports = router