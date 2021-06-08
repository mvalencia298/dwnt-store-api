'use strict';
var dbConn = require('../config/db.config');

//Employee object create
var Sancion = function (sancion) {
    this.codigo_cliente = sancion.codigo_cliente;
    this.nro_alquiler = sancion.nro_alquiler;
    this.tipo_sancion = sancion.tipo_sancion;
    this.nro_dias_sancion = sancion.nro_dias_sancion;
};
Sancion.create = function (nuevosancion, result) {
    dbConn.query("INSERT INTO sancion set ?", nuevosancion, function (err, res) {
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
Sancion.findById = function (id, result) {
    dbConn.query("Select * from sancion where nro_sancion = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Sancion.findAll = function (result) {
    dbConn.query("Select * from sancion", function (err, res) {
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
Sancion.update = function (id, sancion, result) {
    dbConn.query("UPDATE sancion SET codigo_cliente=?,nro_alquiler=?,tipo_sancion=?,nro_dias_sancion=? WHERE nro_sancion = ?",
        [sancion.codigo_cliente,
            sancion.nro_alquiler,
            sancion.tipo_sancion,
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
Sancion.delete = function (id, result) {
    dbConn.query("DELETE FROM sancion WHERE nro_sancion = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Sancion;