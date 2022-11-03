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
exports.Tragamonedas = void 0;
var Juego_1 = require("../Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(pNombre, pCredito, pMontoApostado, pCantRodillo, pCantFigura) {
        var _this = _super.call(this, pNombre, pCredito, pMontoApostado) || this;
        _this.cantidadRodillo = pCantRodillo;
        _this.cantidadFigura = pCantFigura;
        _this.pagoCasa = 5;
        return _this;
    }
    // GET AND SET
    Tragamonedas.prototype.getCantidadRodillo = function () {
        return this.cantidadRodillo;
    };
    Tragamonedas.prototype.setCantidadRodillo = function (pCantRodillo) {
        this.cantidadRodillo = pCantRodillo;
    };
    Tragamonedas.prototype.getCantidadFigura = function () {
        return this.cantidadFigura;
    };
    Tragamonedas.prototype.setCantidadFigura = function (pCantFigura) {
        this.cantidadFigura = pCantFigura;
    };
    // methodos 
    Tragamonedas.prototype.pagarApuesta = function (pCredito) {
        this.credito += pCredito * this.pagoCasa;
    };
    Tragamonedas.prototype.cobrarApuesta = function (pCredito) {
        this.credito -= pCredito;
    };
    Tragamonedas.prototype.girarRodillo = function () {
        return Math.round(Math.random() * (this.getCantidadFigura() - 1) + 1);
    };
    Tragamonedas.prototype.validarCreditos = function () {
        if (this.credito > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamonedas.prototype.Jugar = function () {
        var jugador = 0;
        var rodilloGirado = 0;
        var ventana = [];
        var coincidencia = 0;
        if (this.validarCreditos()) {
            for (var i = 0; i < this.cantidadRodillo; i++) {
                ventana.push(this.girarRodillo());
                console.log(ventana);
            }
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
            console.log("lista [] maximo : " + maximo);
            console.log("lista [] posicion : " + posicion);
            console.log("este es el contador : " + contador);
            if (maximo === 3) {
                //this.pagarApuesta(this.montoApostado*3);
                this.pagarApuesta(this.montoApostado * 3);
                console.log("tuvo 3 coincidencia");
            }
            else if (maximo === 2) {
                this.pagarApuesta(this.montoApostado * 2);
                console.log("tuvo 2 coincidencia");
            }
            else {
                this.cobrarApuesta(this.montoApostado);
                console.log("pierde");
            }
            console.log("credito usuario:" + this.credito);
        }
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
