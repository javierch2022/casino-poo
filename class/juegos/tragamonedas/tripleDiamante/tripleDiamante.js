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
exports.TripleDiamante = void 0;
var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var fs = require('fs');
var tragamonedas_1 = require("../tragamonedas");
var TripleDiamante = /** @class */ (function (_super) {
    __extends(TripleDiamante, _super);
    function TripleDiamante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //----tragamonedas con metodo manual/Automatico----//
    TripleDiamante.prototype.jugar = function (pJugador) {
        var creditoInicial = pJugador.getCredito();
        var ventana = [];
        var finAutomatico;
        var cantidadDeTiros;
        do {
            cantidadDeTiros = 0;
            finAutomatico = 0;
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("             Bienvenido a " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                   Reglas del Tragamonedas                   ");
            console.log("");
            console.log("");
            console.log(" El jugador coloca los creditos a apostar y oprime el boton ");
            console.log(" 'jugar' .El boton hace girar los rodillos, si las figuras  ");
            console.log(" de los rodillos coinciden, el jugador gana un cierto numero");
            console.log(" de creditos");
            console.log("");
            console.log("                          El juego            ");
            console.log("");
            console.log("");
            console.log(" El tragamonedas Triple Diamante, cuenta con la opcion de  ");
            console.log(" tiros multiples  y automaticos a la vez.  ");
            console.log("");
            console.log(" Ejemplos de jugadas : ");
            console.log("");
            console.log("            combinacion ganadora  [ 3,3,3 ]");
            console.log("                 Premia 3 coincidencias");
            console.log("");
            console.log("            combinacion ganadora  [ 1,2,1 ]");
            console.log("                 Premia 2 coincidencias");
            console.log("");
            console.log("            combinacion perdedora  [ 1,2,3 ]");
            console.log("                 Pierde 0 coincidencias");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar es: 80,76%");
            console.log(colors.green("________________________________________________________________"));
            ;
            if (this.validarCreditos(pJugador)) {
                console.log("");
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                console.log(colors.yellow("________________________________________________________________"));
                console.log("");
                cantidadDeTiros = Number(readlineSync.question("Seleccione >> 1 << para (3 tiros) o >> 0 << para Manual: "));
                console.log("");
                if (cantidadDeTiros === 1) {
                    cantidadDeTiros = 3;
                }
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    do {
                        if (this.validarCreditos(pJugador)) {
                            for (var i = 0; i < this.cantidadRodillo; i++) {
                                ventana.push(this.girarRodillo());
                            }
                            console.log(colors.yellow("************************  RESULTADO  ***************************"));
                            console.log("");
                            console.log("                          [ " + ventana + " ] ");
                            console.log("");
                            console.log(colors.yellow("****************************************************************"));
                            var contador = new Array(this.cantidadRodillo);
                            contador.fill(0);
                            for (var i = 0; i < ventana.length; i++) {
                                contador[ventana[i] - 1]++;
                            }
                            var maximo = 0;
                            var posicion = 0;
                            for (var i = 0; i < ventana.length; i++) {
                                if (contador[i] > maximo) {
                                    maximo = contador[i];
                                    posicion = i;
                                }
                            }
                            if (maximo === this.cantidadRodillo) {
                                this.pagarApuesta((this.montoApostado * 1), pJugador);
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("                 Jugador GANA con " + this.cantidadRodillo + " coincidencia/s");
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("");
                            }
                            else if (maximo === (this.cantidadRodillo - 1)) {
                                this.pagarApuesta((this.montoApostado * 0.5), pJugador);
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("                 Jugador GANA con " + (this.cantidadRodillo - 1) + " coincidencia/s.");
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("");
                            }
                            else {
                                this.cobrarApuesta(this.montoApostado, pJugador);
                                console.log("");
                                console.log(colors.red("****************************************************************"));
                                console.log("                       JUGADOR PIERDE ");
                                console.log("");
                                console.log(colors.red("****************************************************************"));
                                console.log("");
                            }
                            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
                            console.log(colors.yellow("________________________________________________________________"));
                            console.log("");
                            finAutomatico++;
                        }
                        ventana = [];
                    } while (finAutomatico < cantidadDeTiros);
                }
            }
        } while (Number(readlineSync.question("Seleccion >> 1 << para Salir y >> 0 << para volver a jugar: ")) === 0);
        var creditoFinal = pJugador.getCredito();
        fs.appendFileSync('./class/juegos/tragamonedas/tripleDiamante/tripleDiamante-estadistica.txt', pJugador.getNombre() + '; ' + creditoInicial + '; ' + creditoFinal + '.\r\n');
    };
    return TripleDiamante;
}(tragamonedas_1.Tragamonedas));
exports.TripleDiamante = TripleDiamante;
