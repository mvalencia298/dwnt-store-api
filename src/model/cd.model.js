'use strict';
var dbConn = require('./../config/db.config');

//Employee object create
var CD = function (cd) {
    this.nro_CD = cd.nro_CD;
    this.condicion = cd.condicion;
    this.ubicacion = cd.ubicacion;
    this.estado = cd.estado;
};
CD.create = function (nuevoCD, result) {
    dbConn.query("INSERT INTO cd set ?", nuevoCD, function (err, res) {
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
CD.findById = function (id, result) {
    dbConn.query("Select * from cd where codigo_titulo = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
CD.findAll = function (result) {
    dbConn.query("Select * from cd", function (err, res) {
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
CD.update = function (id, cd, result) {
    dbConn.query("UPDATE cd SET nro_CD=?,condicion=?,ubicacion=?,estado=? WHERE codigo_titulo = ?",
        [cd.nro_CD,
            cd.condicion,
            cd.ubicacion,
            cd.estado,
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
CD.delete = function (id, result) {
    dbConn.query("DELETE FROM cd WHERE codigo_titulo = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = CD;