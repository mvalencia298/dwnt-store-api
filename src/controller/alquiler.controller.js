'use strict';
const Alquiler = require('../model/alquiler.model');
exports.findAll = function (req, res) {
    Alquiler.findAll(function (err, alquiler) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', alquiler);
        res.send(alquiler);
    });
};
exports.create = function (req, res) {
    const new_Alquiler = new Alquiler(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Alquiler.create(new_Alquiler, function (err, alquiler) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "alquiler added successfully!", data: alquiler });
        });
    }
};
exports.findById = function (req, res) {
    Alquiler.findById(req.params.id, function (err, alquiler) {
        if (err)
            res.send(err);
        res.json(alquiler);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Alquiler.update(req.params.id, new Alquiler(req.body), function (err, alquiler) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'alquiler successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Alquiler.delete(req.params.id, function (err, alquiler) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'alquiler successfully deleted' });
    });
};