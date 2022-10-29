"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(pNombre, pCredito, pMontoApostado) {
        this.nombre = pNombre;
        this.credito = pCredito;
        this.montoApostado = pMontoApostado;
    }
    Juego.prototype.getNombre = function () {
        return this.nombre;
    };
    Juego.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Juego.prototype.getCredito = function () {
        return this.credito;
    };
    Juego.prototype.setCredito = function (pCredito) {
        this.credito = pCredito;
    };
    Juego.prototype.getMontoApostado = function () {
        return this.montoApostado;
    };
    Juego.prototype.setMontoApostado = function (pMontoApostado) {
        this.montoApostado = pMontoApostado;
    };
    return Juego;
}());
exports.Juego = Juego;
