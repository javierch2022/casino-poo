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
var Juego_1 = require("../Juego");
var ApuestaBlackJack = /** @class */ (function () {
    function ApuestaBlackJack(creditoApuesta) {
        this.creditoApuesta = creditoApuesta;
    }
    return ApuestaBlackJack;
}());
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(pNombre, pCredito, pMontoApostado) {
        var _this = _super.call(this, pNombre, pCredito, pMontoApostado) || this;
        _this.totalCartas = 52;
        _this.numeroCartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        /* this.palos = ['C', 'D', 'P', 'T']; // C = CORZARON, D = DIAMANTE, P = PICA, T = TREBOL
         this.cartasEspeciales = ['J', 'Q', 'K', 'A'];*/
        _this.pedirCartas = false;
        _this.noMasCartas = false;
        _this.pagoCasa = 1;
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
    BlackJack.prototype.validarCreditos = function () {
        if (this.credito > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJack.prototype.pagarApuesta = function (pCredito) {
        this.credito += pCredito;
    };
    BlackJack.prototype.cobrarApuesta = function (pCredito) {
        this.credito -= pCredito;
    };
    BlackJack.prototype.entregarCarta = function () {
        return Math.round(Math.random() * (14 - 1) + 1);
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
    BlackJack.prototype.jugar = function () {
        var jugador = 0; // suma de cartas 
        var computadora = 0; // suma de cartas
        if (this.validarCreditos()) {
            while (jugador <= 21 && this.quiereCarta()) {
                jugador += this.entregarCarta(); // falta terminar, falta definir limites de while loop.
                console.log("jugador: " + jugador);
            }
        }
        else {
            console.log("No tiene creditos para jugar");
            console.log("gracias por haber gastado su dinero aqui");
        }
        if (jugador != 0) {
            var carta = 0;
            var jugadorGana = true;
            while (computadora <= 21 && Math.round(Math.random() * (1 - 0) + 0) && jugadorGana) {
                carta++;
                computadora += this.entregarCarta();
                if (jugador > 21) {
                    jugadorGana = false;
                    console.log(jugadorGana);
                }
                console.log("carta: " + carta);
                console.log("computadora: " + computadora);
            }
        }
        if (jugador <= 21 && jugador > computadora) {
            console.log("jugador gana");
            this.pagarApuesta(2);
        }
        else if ((jugador <= 21 && computadora > jugador) || (jugador > 21)) {
            console.log("gana la casa, el jugador pierde");
            this.cobrarApuesta(2);
        }
        else {
            console.log("empate");
            this.cobrarApuesta(1);
        }
    };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
