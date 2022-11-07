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
        var otraCarta = readlineSync.question("¿quiere otra carta? (s/n): ");
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
        console.log("creditos del jugador=??" + this.validarCreditos(pJugador));
        if (this.validarCreditos(pJugador)) {
            this.montoApostado = Number(readlineSync.question("¿cuantos creditos desea apostar?: "));
            if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                jugador += this.entregarCarta();
                console.log("jugador: " + jugador);
                while (jugador <= 21 && this.quiereCarta()) {
                    jugador += this.entregarCarta();
                    console.log("jugador: " + jugador);
                }
                if (jugador != 0) {
                    var carta = 0;
                    var jugadorGana = true;
                    while (computadora <= 20 && (computadora < 17 || Math.round(Math.random() * (1 - 0) + 0)) && jugadorGana) {
                        carta++;
                        computadora += this.entregarCarta();
                        if (jugador > 21 && carta > 2 && computadora >= 17) {
                            jugadorGana = false;
                        }
                        console.log("carta: " + carta);
                        console.log("computadora: " + computadora);
                    }
                }
                //se paga con creditos
                if ((jugador <= 21 && jugador > computadora) || (jugador < computadora && computadora > 21)) {
                    console.log("jugador gana");
                    console.log("monto apostado" + this.montoApostado);
                    this.pagarApuesta(this.montoApostado, pJugador);
                }
                else if ((computadora <= 21 && computadora > jugador) || (jugador > computadora && jugador > 21)) {
                    console.log("gana la casa, el jugador pierde");
                    console.log("monto apostado" + this.montoApostado);
                    this.cobrarApuesta(this.montoApostado, pJugador);
                }
                else {
                    console.log("empate");
                }
            }
            else {
                console.log("su apuesta excede los creditos que tiene");
            }
        }
        else {
            console.log("No tiene creditos para jugar");
        }
        console.log("credito usuario:" + pJugador.getCredito());
    };
    return BlackJack;
}(juego_1.Juego));
exports.BlackJack = BlackJack;
