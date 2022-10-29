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
    function Tragamonedas(pNombre, pPlata, pCredito, pMontoApostado, pCantColum, pCantFig, pPalanca, pPagoCasa) {
        var _this = _super.call(this, pNombre, pCredito, pMontoApostado) || this;
        _this.cantidadColumna = pCantColum;
        _this.cantidadFigura = pCantFig;
        _this.palanca = pPalanca;
        _this.pagoCasa = pPagoCasa;
        return _this;
    }
    Tragamonedas.prototype.getCantColum = function () {
        return this.cantidadColumna;
    };
    Tragamonedas.prototype.setCantColum = function (pCantColum) {
        this.cantidadColumna = pCantColum;
    };
    Tragamonedas.prototype.getCantFig = function () {
        return this.cantidadFigura;
    };
    Tragamonedas.prototype.setCantFig = function (pCantFig) {
        this.cantidadFigura = pCantFig;
    };
    Tragamonedas.prototype.getPagoCasa = function () {
        return this.pagoCasa;
    };
    Tragamonedas.prototype.setPagoCasa = function (pPagoCasa) {
        this.pagoCasa = pPagoCasa;
    };
    Tragamonedas.prototype.ejecPalanca = function (palanca) {
        this.palanca = palanca;
        if (palanca == true) {
            /*definir accion - puede jugar? ejecutar juego?*/
        }
        else {
            /*definir accion - no puede jugar por falta de credito*/
        }
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
