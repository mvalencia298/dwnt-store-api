'use strict';
var dbConn = require('./../config/db.config');

//Employee object create
var Cliente = function (cliente) {
    this.telefono = cliente.telefono;
    this.nombre_cliente = cliente.nombre_cliente;
    this.email = cliente.email;
    this.nro_DNI = cliente.nro_DNI;
    this.fecha_nacimiento = cliente.fecha_nacimiento;
    this.fecha_inscripcion = new Date();
    this.tema_interes = cliente.tema_interes;
    this.estado = cliente.estado;
};
Cliente.create = function (nuevoCliente, result) {
    dbConn.query("INSERT INTO cliente set ?", nuevoCliente, function (err, res) {
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
Cliente.findById = function (id, result) {
    dbConn.query("Select * from cliente where codigo_cliente = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Cliente.findAll = function (result) {
    dbConn.query("Select * from cliente", function (err, res) {
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
Cliente.update = function (id, cliente, result) {
    dbConn.query("UPDATE cliente SET telefono=?,nombre_cliente=?,email=?,nro_DNI=?,fecha_nacimiento=?,tema_interes=?,estado=? WHERE codigo_cliente = ?",
        [cliente.telefono,
        cliente.nombre_cliente,
        cliente.email,
        cliente.nro_DNI,
        cliente.fecha_nacimiento,
        cliente.tema_interes,
        cliente.estado,
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
Cliente.delete = function (id, result) {
    dbConn.query("DELETE FROM cliente WHERE codigo_cliente = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Cliente;