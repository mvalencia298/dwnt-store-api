const express = require('express')
const router = express.Router()
const cdController = require('../controller/cd.controller');

router.get('/', cdController.findAll);

router.post('/', cdController.create);

router.get('/:id', cdController.findById);

router.put('/:id', cdController.update);

router.delete('/:id', cdController.delete);

module.exports = router