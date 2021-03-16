'use strict';
const CD = require('../model/cd.model');
exports.findAll = function (req, res) {
    CD.findAll(function (err, CD) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', CD);
        res.send(CD);
    });
};
exports.create = function (req, res) {
    const new_cd = new CD(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        CD.create(new_cd, function (err, cd) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "CD added successfully!", data: cd });
        });
    }
};
exports.findById = function (req, res) {
    CD.findById(req.params.id, function (err, cd) {
        if (err)
            res.send(err);
        res.json(cd);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        CD.update(req.params.id, new CD(req.body), function (err, cd) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'CD successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    CD.delete(req.params.id, function (err, cd) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'CD successfully deleted' });
    });
};