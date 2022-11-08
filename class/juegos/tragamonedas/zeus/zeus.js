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
exports.Zeus = void 0;
var readlineSync = require('readline-sync');
var tragamonedas_1 = require("../tragamonedas");
var Zeus = /** @class */ (function (_super) {
    __extends(Zeus, _super);
    function Zeus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //////////////////// metodo   Automatico
    Zeus.prototype.jugar = function (pJugador) {
        var ventana = [];
        var finAutomatico = 0;
        console.log("creditos del jugador=??" + this.validarCreditos(pJugador));
        var cantidadDeTiros = 0;
        do {
            console.clear();
            console.log("___________________________________________________________");
            console.log("               Bienvenido a Tragamonedas " + this.getNombre());
            console.log("___________________________________________________________");
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log("");
            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    if (this.validarCreditos(pJugador)) {
                        for (var i = 0; i < this.cantidadRodillo; i++) {
                            ventana.push(this.girarRodillo());
                        }
                        console.log("____________________________________________");
                        console.log("============ Tragamonedas " + this.getNombre() + "  ============");
                        console.log("____________________________________________");
                        console.log("");
                        console.log(">>>>>>>>>>>>>   [ " + ventana + " ]   <<<<<<<<<<<<<");
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
                            this.pagarApuesta(this.montoApostado * 1.5, pJugador);
                            console.log("");
                            console.log("Ud. tuvo " + this.cantidadRodillo + " coincidencia/s");
                        }
                        else if (maximo === (this.cantidadRodillo - 1)) {
                            this.pagarApuesta(this.montoApostado, pJugador);
                            console.log("");
                            console.log("tuvo " + (this.cantidadRodillo - 1) + " coincidencia/s");
                        }
                        else {
                            this.cobrarApuesta(this.montoApostado, pJugador);
                            console.log("");
                            console.log("Ud. Pierde");
                        }
                        console.log("");
                        console.log("Creditos disponible para jugar : " + pJugador.getCredito());
                        console.log("______________________________________________");
                        console.log("");
                        console.log("");
                        finAutomatico++;
                    }
                    ventana = [];
                }
            }
        } while (Number(readlineSync.question("Seleccion 1 para Salir y 0 para volver a jugar: ")) === 0);
    };
    return Zeus;
}(tragamonedas_1.Tragamonedas));
exports.Zeus = Zeus;
