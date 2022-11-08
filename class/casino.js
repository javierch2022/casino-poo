"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readlineSync = require('readline-sync');
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
        /*console.log("dinero inicial jugador: " + this.jugador.getDinero());
        console.log("credito inicial jugador: " + this.jugador.getCredito());
        console.log("dinero inicial casino: " + this.bancaDinero);
        console.log("credito inicial casino: " + this.bancaCredito);*/
        var dineroAConsultar = Number(readlineSync.question("Ingrese la cantidad de dinero a cambiar por creditos: "));
        if (dineroAConsultar <= this.jugador.getDinero()) {
            this.jugador.setDinero(this.jugador.getDinero() - dineroAConsultar);
            this.jugador.setCredito(dineroAConsultar * 2);
            this.bancaDinero += dineroAConsultar;
            this.bancaCredito -= dineroAConsultar * 2;
            /*console.log("dinero jugador: " + this.jugador.getDinero());
            console.log("credito jugador: " + this.jugador.getCredito());
            console.log("dinero casino: " + this.bancaDinero);
            console.log("credito casino: " + this.bancaCredito);*/
        }
        else {
            console.log("usted no posee el dinero suficiente"); // derivar a menu de inicio.
        }
    };
    Casino.prototype.creditosAPesos = function () {
        /*console.log("dinero inicial jugador: " + this.jugador.getDinero());
        console.log("credito inicial jugador: " + this.jugador.getCredito());
        console.log("dinero inicial casino: " + this.bancaDinero);
        console.log("credito inicial casino: " + this.bancaCredito);*/
        var creditoAConsultar = Number(readlineSync.question("Ingrese la cantidad de creditos a cambiar por dinero: "));
        if (creditoAConsultar <= this.jugador.getCredito()) {
            this.jugador.setDinero(this.jugador.getDinero() + (creditoAConsultar / 2));
            this.jugador.setCredito(this.jugador.getCredito() - (creditoAConsultar));
            this.bancaDinero -= (creditoAConsultar / 2);
            this.bancaCredito += creditoAConsultar;
            /* console.log("dinero jugador: " + this.jugador.getDinero());
             console.log("credito jugador: " + this.jugador.getCredito());
             console.log("dinero casino: " + this.bancaDinero);
             console.log("credito casino: " + this.bancaCredito);*/
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
