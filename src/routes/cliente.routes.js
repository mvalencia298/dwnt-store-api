const express = require('express')
const router = express.Router()
const clienteController = require('../controller/cliente.controller');

router.get('/', clienteController.findAll);

router.post('/', clienteController.create);

router.get('/:id', clienteController.findById);

router.put('/:id', clienteController.update);

router.delete('/:id', clienteController.delete);

module.exports = router