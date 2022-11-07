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
var readlineSync = require('readline-sync');
var juego_1 = require("../../juego");
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
    Tragamonedas.prototype.girarRodillo = function () {
        return Math.round(Math.random() * (this.getCantidadFigura() - 1) + 1);
    };
    return Tragamonedas;
}(juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
