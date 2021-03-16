'use strict';
var dbConn = require('../config/db.config');

//Employee object create
var Alquiler = function (alquiler) {
    this.codigo_cliente = alquiler.codigo_cliente;
    this.fecha_alquiler = new Date();
    this.valor_alquiler = alquiler.valor_alquiler;
};
Alquiler.create = function (nuevoalquiler, result) {
    dbConn.query("INSERT INTO alquiler set ?", nuevoalquiler, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Alquiler.findById = function (id, result) {
    dbConn.query("Select * from alquiler where nro_alquiler = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Alquiler.findAll = function (result) {
    dbConn.query("Select * from alquiler", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('clientes : ', res);
            result(null, res);
        }
    });
};
Alquiler.update = function (id, alquiler, result) {
    dbConn.query("UPDATE alquiler SET codigo_cliente=?,fecha_alquiler=?,valor_alquiler=? WHERE nro_alquiler = ?",
        [alquiler.codigo_cliente,
            alquiler.fecha_alquiler,
            alquiler.valor_alquiler,
            id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Alquiler.delete = function (id, result) {
    dbConn.query("DELETE FROM alquiler WHERE nro_alquiler = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Alquiler;