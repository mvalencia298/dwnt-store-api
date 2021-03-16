'use strict';
var dbConn = require('../config/db.config');

//Employee object create
var DetalleAlquiler = function (detalleAlquiler) {
    this.item = detalleAlquiler.item;
    this.codigo_titulo = detalleAlquiler.codigo_titulo;
    this.nro_CD = detalleAlquiler.nro_CD;
    this.dias_prestamo = detalleAlquiler.dias_prestamo;
    this.fecha_devolucion = detalleAlquiler.fecha_devolucion;
};
DetalleAlquiler.create = function (nuevoDetalleAlquiler, result) {
    dbConn.query("INSERT INTO detalle_alquiler set ?", nuevoDetalleAlquiler, function (err, res) {
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
DetalleAlquiler.findById = function (id, result) {
    dbConn.query("Select * from detalle_alquiler where nro_alquiler = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
DetalleAlquiler.findAll = function (result) {
    dbConn.query("Select * from detalle_alquiler", function (err, res) {
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
DetalleAlquiler.update = function (id, detalleAlquiler, result) {
    dbConn.query("UPDATE detalle_alquiler SET item=?,codigo_titulo=?,nro_CD=?,dias_prestamo=?,fecha_devolucion=? WHERE nro_alquiler = ?",
        [detalleAlquiler.item,
            detalleAlquiler.codigo_titulo,
            detalleAlquiler.nro_CD,
            detalleAlquiler.dias_prestamo,
            detalleAlquiler.fecha_devolucion,
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
DetalleAlquiler.delete = function (id, result) {
    dbConn.query("DELETE FROM detalle_alquiler WHERE nro_alquiler = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = DetalleAlquiler;