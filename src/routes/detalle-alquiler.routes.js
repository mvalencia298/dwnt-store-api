const express = require('express')
const router = express.Router()
const detallleAlquilerController = require('../controller/detalle-alquiler.controller');

router.get('/', detallleAlquilerController.findAll);

router.post('/', detallleAlquilerController.create);

router.get('/:id', detallleAlquilerController.findById);

router.put('/:id', detallleAlquilerController.update);

router.delete('/:id', detallleAlquilerController.delete);

module.exports = router