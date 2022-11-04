"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var readlineSync = require('readline-sync');
//readlineSync.question("Ingrese su nombre por favor : ");
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.nombre = readlineSync.question("Ingrese su nombre por favor : ");
        this.credito = readlineSync.question("Ingrese cantidad de credito a cargar : ");
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
    /////////////////// methodos /////////////////
    Jugador.prototype.nombreJugador = function () {
        var nombre = readlineSync.question("Ingrese su nombre por favor : ");
        return nombre;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var test1 = new Jugador();
console.log("jugador : " + test1.getNombre() + "Usted Cargo : " + test1.getCredito() + "creditos");
console.log("Usted Cargo" + test1.getNombre());
