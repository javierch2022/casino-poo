"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var jugador_1 = require("./jugador");
var Casino = /** @class */ (function () {
    function Casino(pNombre, pJuegos, pBancaDinero, pBancaCredito) {
        this.nombre = pNombre;
        this.juegos = pJuegos;
        this.bancaDinero = pBancaDinero;
        this.bancaCredito = pBancaCredito;
    }
    //---get & set ---//
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Casino.prototype.getBanca = function () {
        return this.bancaDinero;
    };
    Casino.prototype.setBanca = function (banca) {
        this.bancaDinero = banca;
    };
    Casino.prototype.getBancaDinero = function () {
        return this.bancaDinero;
    };
    Casino.prototype.setBancaDinero = function (bancaDinero) {
        this.bancaDinero = bancaDinero;
    };
    Casino.prototype.setJuego = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.getJuegos = function () {
        return this.juegos;
    };
    //---metodos---//
    Casino.prototype.pesosACreditos = function () {
        console.log("");
        console.log("La conversion de la casa es $1 = » 2 « creditos");
        console.log("");
        console.log(this.jugador.getNombre() + " usted tiene $" + this.jugador.getDinero() + " pesos para cambiar por creditos");
        console.log("");
        console.log(colors.green("______________________________________________________"));
        console.log("");
        var dineroAConsultar = Number(readlineSync.question("Ingrese la cantidad de dinero a cambiar por creditos: "));
        if (dineroAConsultar <= this.jugador.getDinero()) {
            this.jugador.setDinero(this.jugador.getDinero() - dineroAConsultar);
            this.jugador.setCredito(this.jugador.getCredito() + dineroAConsultar * 2);
            this.bancaDinero += dineroAConsultar;
            this.bancaCredito -= dineroAConsultar * 2;
        }
        else {
            console.log("usted no posee el dinero suficiente"); // derivar a menu de inicio.
        }
    };
    Casino.prototype.creditosAPesos = function () {
        console.log("");
        console.log("    La conversion de la casa es $1 = » 2 « creditos");
        console.log("");
        console.log(this.jugador.getNombre() + " su credito disponible es de » " + this.jugador.getCredito() + " « para cambiar por dinero");
        console.log("");
        console.log(colors.green("______________________________________________________"));
        console.log("");
        var creditoAConsultar = Number(readlineSync.question("Ingrese la cantidad de creditos a cambiar por dinero: "));
        if (creditoAConsultar <= this.jugador.getCredito()) {
            this.jugador.setDinero(this.jugador.getDinero() + (creditoAConsultar / 2));
            this.jugador.setCredito(this.jugador.getCredito() - (creditoAConsultar));
            this.bancaDinero -= (creditoAConsultar / 2);
            this.bancaCredito += creditoAConsultar;
        }
        else {
            console.log("usted no posee los creditos suficientes"); // derivar a menu de inicio.
        }
    };
    Casino.prototype.ingresaJugador = function () {
        this.jugador = new jugador_1.Jugador();
        return this.jugador;
    };
    return Casino;
}());
exports.Casino = Casino;
