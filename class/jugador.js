"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var readlineSync = require('readline-sync');
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.nombre = readlineSync.question("Ingrese su nombre por favor : ");
        this.dinero = Number(readlineSync.question("Ingrese el dinero del jugador: "));
        this.credito = 0;
    }
    /////////////// get and set //////////////
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Jugador.prototype.getCredito = function () {
        return this.credito;
    };
    Jugador.prototype.setCredito = function (pCredito) {
        this.credito = pCredito;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (pDinero) {
        {
            this.dinero = pDinero;
        }
    };
    return Jugador;
}());
exports.Jugador = Jugador;
