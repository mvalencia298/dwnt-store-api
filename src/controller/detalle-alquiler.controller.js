'use strict';
const DetalleAlquiler = require('../model/detalle-alquiler.model');
exports.findAll = function (req, res) {
    DetalleAlquiler.findAll(function (err, detalleAlquiler) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', detalleAlquiler);
        res.send(detalleAlquiler);
    });
};
exports.create = function (req, res) {
    const new_detalleAlquiler = new DetalleAlquiler(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        DetalleAlquiler.create(new_detalleAlquiler, function (err, detalleAlquiler) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "detalleAlquiler added successfully!", data: detalleAlquiler });
        });
    }
};
exports.findById = function (req, res) {
    DetalleAlquiler.findById(req.params.id, function (err, detalleAlquiler) {
        if (err)
            res.send(err);
        res.json(detalleAlquiler);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        DetalleAlquiler.update(req.params.id, new DetalleAlquiler(req.body), function (err, detalleAlquiler) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'detalleAlquiler successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    DetalleAlquiler.delete(req.params.id, function (err, detalleAlquiler) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'detalleAlquiler successfully deleted' });
    });
};