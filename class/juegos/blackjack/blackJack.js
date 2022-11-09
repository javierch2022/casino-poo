"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BlackJack = void 0;
var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var juego_1 = require("../../juego");
var ApuestaBlackJack = /** @class */ (function () {
    function ApuestaBlackJack(creditoApuesta) {
        this.creditoApuesta = creditoApuesta;
    }
    return ApuestaBlackJack;
}());
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(pNombre, pCredito, pPagoCasa) {
        var _this = _super.call(this, pNombre, pCredito, pPagoCasa) || this;
        _this.totalCartas = 52;
        _this.numeroCartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        _this.pedirCartas = false;
        _this.noMasCartas = false;
        return _this;
    }
    //--------get & set-------//
    BlackJack.prototype.setPedirCartas = function () {
        this.pedirCartas = true;
    };
    BlackJack.prototype.getPedirCartas = function () {
        return this.pedirCartas;
    };
    BlackJack.prototype.setNoMasCartas = function () {
        this.noMasCartas = true;
    };
    BlackJack.prototype.getNoMasCartas = function () {
        return this.noMasCartas;
    };
    //--------metodos---------//
    BlackJack.prototype.entregarCarta = function () {
        return Math.round(Math.random() * (10 - 1) + 1);
    };
    BlackJack.prototype.quiereCarta = function () {
        var otraCarta = readlineSync.question("quiere otra carta? (s/n): ");
        if (otraCarta == "s" || otraCarta == "S") {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJack.prototype.jugar = function (pJugador) {
        var jugador = 0; // suma de cartas 
        var computadora = 0; // suma de cartas
        do {
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("             Bienvenido a " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                   Reglas del Black Jack                   ");
            console.log("");
            console.log("");
            console.log(" El Black Jack es uno de los juegos mas populares del Casino.");
            console.log(" El Objetivo es simple: ganarle al Croupier obteniendo el ");
            console.log(" puntaje mas cercano a 21, las figuras valen 10 y las cartas ");
            console.log(" conservan su valor. El Black Jack se produce cuando las 2(2) ");
            console.log("  primeras cartas son un diez o cualquier figura mas un As.");
            console.log("");
            console.log("");
            console.log("                          El juego            ");
            console.log("");
            console.log("");
            console.log(" Se entrega 1 carta al jugador, entonces el Croupier preguntara");
            console.log(" siquiere otra carta. Si sus cartas totalizan un valor mas ");
            console.log(" cercano a 21que las del Croupier, usted gana y se le paga el ");
            console.log(" valor de la apuesta x 2. ");
            console.log(" El Courpier debera debera plantarce con un total de 17 o mas y");
            console.log(" debera tomar una carta mas si tiene 16 o menos.");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar es: ????%");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                console.log("");
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    jugador += this.entregarCarta();
                    console.log(colors.yellow("________________________________________________________________"));
                    console.log("Valor carta inicial: " + jugador);
                    console.log("");
                    while (jugador <= 21 && this.quiereCarta()) {
                        jugador += this.entregarCarta();
                        console.log(colors.yellow("________________________________________________________________"));
                        console.log("");
                        console.log("Valor de cartas acumuladas del jugador : " + jugador);
                        console.log("");
                    }
                    if (jugador != 0) {
                        var carta = 0;
                        var jugadorGana = true;
                        console.log(colors.yellow("________________________________________________________________"));
                        while (computadora <= 20 && (computadora < 17 || Math.round(Math.random() * (1 - 0) + 0)) && jugadorGana) {
                            carta++;
                            computadora += this.entregarCarta();
                            if (jugador > 21 && carta > 2 && computadora >= 17) {
                                jugadorGana = false;
                            }
                            console.log("");
                            console.log("Valor de cartas acumuladas del Crupier: " + computadora);
                        }
                    }
                    //se paga con creditos
                    if ((jugador <= 21 && jugador > computadora) || (jugador < computadora && computadora > 21)) {
                        console.log("");
                        console.log(colors.green("****************************************************************"));
                        console.log("                         JUGADOR GANA");
                        console.log("");
                        console.log(colors.green("****************************************************************"));
                        this.pagarApuesta(this.montoApostado, pJugador);
                    }
                    else if ((computadora <= 21 && computadora > jugador) || (jugador > computadora && jugador > 21)) {
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        console.log("                 GANA LA CASA, JUGADOR PIERDE ");
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    }
                    else {
                        console.log("");
                        console.log(colors.yellow("****************************************************************"));
                        console.log("                             EMPATE");
                        console.log("");
                        console.log(colors.yellow("****************************************************************"));
                    }
                }
                else {
                    console.log("su apuesta excede los creditos que tiene");
                    console.log("");
                }
            }
            else {
                console.log("No tiene creditos para jugar");
                console.log("");
            }
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log(colors.yellow("________________________________________________________________"));
            console.log("");
            jugador = computadora = 0;
        } while (Number(readlineSync.question("Seleccion >> 1 << para Salir y >> 0 << para volver a jugar: ")) === 0);
    };
    return BlackJack;
}(juego_1.Juego));
exports.BlackJack = BlackJack;
