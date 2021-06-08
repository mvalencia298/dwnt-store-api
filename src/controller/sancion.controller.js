'use strict';
const Sancion = require('../model/sancion.model');
exports.findAll = function (req, res) {
    Sancion.findAll(function (err, sancion) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', sancion);
        res.send(sancion);
    });
};
exports.create = function (req, res) {
    console.log(req.body);
    const new_Sancion = new Sancion(req.body);
    console.log(new_Sancion);
    new_Sancion.tipo_sancion = 'media';
    new_Sancion.nro_dias_sancion = 10;
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Sancion.create(new_Sancion, function (err, sancion) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "sancion added successfully!", data: sancion });
        });
    }
};
exports.findById = function (req, res) {
    Sancion.findById(req.params.id, function (err, sancion) {
        if (err)
            res.send(err);
        res.json(sancion);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Sancion.update(req.params.id, new Sancion(req.body), function (err, sancion) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'sancion successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Sancion.delete(req.params.id, function (err, sancion) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'sancion successfully deleted' });
    });
};