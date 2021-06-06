'use strict';
const DetalleAlquiler = require('../model/detalle-alquiler.model');
const Alquiler = require('../model/alquiler.model');
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
    new_detalleAlquiler.nro_CD = new_detalleAlquiler.codigo_titulo;

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Alquiler.findById(new_detalleAlquiler.nro_alquiler, function (err, alquiler) {
            if (err)
                res.send(err);

            let Difference_In_Time =  new Date(new_detalleAlquiler.fecha_devolucion) - new Date(alquiler[0].fecha_alquiler);
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            new_detalleAlquiler.dias_prestamo = Difference_In_Days;
            DetalleAlquiler.create(new_detalleAlquiler, function (err, detalleAlquiler) {
                if (err)
                    res.send(err);
                res.json({ error: false, message: "detalleAlquiler added successfully!", data: detalleAlquiler });
            });
        })

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