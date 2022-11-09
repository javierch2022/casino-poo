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
exports.Ruleta = void 0;
var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var juego_1 = require("../../juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(pNombre, pCredito, pPagoCasa) {
        return _super.call(this, pNombre, pCredito, pPagoCasa) || this;
    }
    //-----Metodos-----
    Ruleta.prototype.girarRuleta = function () {
        return Math.round(Math.random() * (36 - 0) + 0);
    };
    Ruleta.prototype.jugar = function (pJugador) {
        do {
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("                  Bienvenido a " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                    Reglas de la Ruleta                  ");
            console.log("");
            console.log("");
            console.log(" En cada partida el crupier lanza una bola sobre la ruleta en");
            console.log(" movimiento. Despues de que la bola gire varias vueltas caera");
            console.log(" sobre una de las casillas numeradas de la ruleta. ");
            console.log(" El objetivo del juego es predecir en que casilla caera la bola.");
            console.log(" El crupier anuncia el inicio de una nueva partida diciendo");
            console.log(" ('hagan juego'), en ese momento las apuestas para la siguiente");
            console.log(" partidaquedan abiertas, los jugadores podran realizar sus ");
            console.log(" apuestas sobre la mesa de juego, hasta que el crupier cierre ");
            console.log(" las apuestas diciendo ('no va mas'). Despues de cerrar las");
            console.log(" apuestas, el crupier lanzara la bola, cuando la bola se detenga");
            console.log(" en alguna de las casillas el crupier anunciara el numero ganador ");
            console.log(" y las apuestas ganadoras, seguidamente procedera a retirar las ");
            console.log(" apuestas perdedoras y a pagar las apuestas ganadoras.");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar por Par/Impar: 48,6%");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                   Croupier: Hagan Juego!");
            console.log(colors.yellow("________________________________________________________________"));
            console.log("");
            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("cuantos creditos desea apostar?: "));
                var parImpar = Number(readlineSync.question("Seleccione 0 para Par o 1 para Impar: "));
                console.log("");
                console.log(colors.yellow("________________________________________________________________"));
                console.log("");
                console.log("                     Croupier: No va mas!");
                console.log(colors.yellow("________________________________________________________________"));
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    var numeroRuleta = this.girarRuleta();
                    console.log("");
                    console.log("         Croupier: El numero ganador es » " + numeroRuleta + " «");
                    console.log(colors.yellow("________________________________________________________________"));
                    var ruletaParImpar = numeroRuleta % 2;
                    if (numeroRuleta === 0) {
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        console.log("       Crupier:     » 0 «  no es par ni impar");
                        console.log(colors.red("****************************************************************"));
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    }
                    else if (ruletaParImpar === parImpar) {
                        console.log(""); //si es par paga 
                        console.log(colors.green("****************************************************************"));
                        console.log("               Croupier:   GANA EL JUGADOR");
                        console.log(colors.green("****************************************************************"));
                        this.pagarApuesta(this.montoApostado, pJugador);
                    }
                    else {
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        console.log("               Croupier:   PIERDE EL JUGADOR");
                        console.log(colors.red("****************************************************************"));
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    }
                }
                else {
                    console.log(colors.yellow("****************************************************************"));
                    console.log("        su apuesta excede los creditos que tiene");
                    console.log(colors.yellow("****************************************************************"));
                }
            }
            else {
                console.log(colors.yellow("****************************************************************"));
                console.log("                   No tiene creditos para jugar");
                console.log(colors.yellow("****************************************************************"));
            }
        } while (Number(readlineSync.question("Seleccion >> 1 << para Salir y >> 0 << para volver a jugar: ")) === 0);
    };
    return Ruleta;
}(juego_1.Juego));
exports.Ruleta = Ruleta;
