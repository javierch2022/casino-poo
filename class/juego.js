"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(pNombre, pCredito, pPagoCasa) {
        this.nombre = pNombre;
        this.credito = pCredito;
        this.montoApostado = 0;
        this.pagoCasa = pPagoCasa;
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
    /*---------------metodos---------------*/
    Juego.prototype.pagarApuesta = function (pCredito, pJugador) {
        pJugador.setCredito(pJugador.getCredito() + (pCredito * this.pagoCasa));
        this.credito += pCredito * this.pagoCasa;
    };
    Juego.prototype.cobrarApuesta = function (pCredito, pJugador) {
        pJugador.setCredito(pJugador.getCredito() - (pCredito));
        this.credito -= pCredito;
    };
    Juego.prototype.validarCreditos = function (jugador) {
        if (jugador.getCredito() > 0) {
            return true;
        }
        else {
            return false; // devuelve al menu inicial o cargar credito
        }
    };
    return Juego;
}());
exports.Juego = Juego;
