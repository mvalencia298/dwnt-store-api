const express = require('express')
const router = express.Router()
const alquilerController = require('../controller/alquiler.controller');

router.get('/', alquilerController.findAll);

router.post('/', alquilerController.create);

router.get('/:id', alquilerController.findById);

router.put('/:id', alquilerController.update);

router.delete('/:id', alquilerController.delete);

module.exports = router