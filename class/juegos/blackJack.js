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
var Juego_1 = require("../Juego");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(pNombre, pPlata, pCredito, pMontoApostado, pCantCart, pListaCartas, pCantApuesta, pResultado) {
        var _this = _super.call(this, pNombre, pCredito, pMontoApostado) || this;
        _this.cantidadCartas = pCantCart;
        _this.cantidadApuesta = pCantApuesta;
        _this.listaCartas[] = pListaCartas[];
        _this.resultado = pResultado;
        return _this;
    }
    ;
    BlackJack.prototype.getCantCart = function () {
        return this.cantidadCartas;
    };
    BlackJack.prototype.setCantCart = function (pCantCart) {
        this.cantidadCartas = pCantCart;
    };
    BlackJack.prototype.getCantidadApuesta = function () {
        return this.cantidadApuesta;
    };
    BlackJack.prototype.setCantApuesta = function (pCantApuesta) {
        this.cantidadApuesta = pCantApuesta;
    };
    BlackJack.prototype.getResultado = function () {
        return this.resultado;
    };
    BlackJack.prototype.setResultado = function (pResultado) {
        this.resultado = pResultado;
    };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
