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
exports.Ruleta = exports.ApuestaRuleta = void 0;
var Juego_1 = require("../Juego");
var ApuestaRuleta = /** @class */ (function () {
    function ApuestaRuleta(ubicacion, pCreditoApuesta, pNumeroApostado) {
        this.ubicacion = ubicacion;
        this.creditoApuesta = pCreditoApuesta;
        this.numeroApostado = pNumeroApostado;
    }
    ApuestaRuleta.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    ApuestaRuleta.prototype.setUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    ApuestaRuleta.prototype.getCreditoApuesta = function () {
        return this.creditoApuesta;
    };
    ApuestaRuleta.prototype.setCreditoApuesta = function (pCreditoApuesta) {
        this.creditoApuesta = pCreditoApuesta;
    };
    ApuestaRuleta.prototype.getNumeroApostado = function () {
        return this.numeroApostado;
    };
    ApuestaRuleta.prototype.setNumeroApostado = function (pNumeroApostado) {
        this.numeroApostado = pNumeroApostado;
    };
    return ApuestaRuleta;
}());
exports.ApuestaRuleta = ApuestaRuleta;
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(pNombre, pCredito, pMontoApostado, pUbicacionApuesta, pPagoCasa) {
        var _this = _super.call(this, pNombre, pCredito, pMontoApostado) || this;
        _this.numeroTablero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        _this.listaNumerosRojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        _this.listaNumerosNegros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        _this.listaPrimeraDocena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        _this.listaSegundaDocena = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        _this.listaTerceraDocena = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        _this.listaPrimeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 32, 34];
        _this.listaSegundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        _this.listaTercerColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        _this.lista1a18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        _this.lista19a36 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        _this.listaPar = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
        _this.listaImpar = [1, 3, 5, 7, 9, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
        _this.ubicacionApuesta = pUbicacionApuesta;
        _this.pagoCasa = pPagoCasa;
        _this.jugar = false;
        return _this;
    }
    ;
    Ruleta.prototype.getNumeroTablero = function () {
        return this.numeroTablero;
    };
    Ruleta.prototype.setNumeroTablero = function (pNumeroTablero) {
        this.numeroTablero = pNumeroTablero;
    };
    Ruleta.prototype.getListaNumerosRojos = function () {
        return this.listaNumerosRojos;
    };
    Ruleta.prototype.setListaNumerosRojos = function (pListaNumerosRojos) {
        this.listaNumerosRojos = pListaNumerosRojos;
    };
    Ruleta.prototype.getListaNumerosNegros = function () {
        return this.listaNumerosNegros;
    };
    Ruleta.prototype.setListaNumerosNegros = function (pListaNumerosNegros) {
        this.listaNumerosNegros = pListaNumerosNegros;
    };
    Ruleta.prototype.getListaPrimeraDocena = function () {
        return this.listaPrimeraDocena;
    };
    Ruleta.prototype.setListaPrimeraDocena = function (pListaPrimeraDecena) {
        this.listaPrimeraDocena = pListaPrimeraDecena;
    };
    Ruleta.prototype.getListaSegundaDocena = function () {
        return this.listaSegundaDocena;
    };
    Ruleta.prototype.setListaSegundaDocena = function (pListaSegundaDecena) {
        this.listaSegundaDocena = pListaSegundaDecena;
    };
    Ruleta.prototype.getListaTerceraDocena = function () {
        return this.listaTerceraDocena;
    };
    Ruleta.prototype.setListaTerceraDocena = function (pListaTerceraDecena) {
        this.listaTerceraDocena = pListaTerceraDecena;
    };
    Ruleta.prototype.getListaPrimeraColumna = function () {
        return this.listaPrimeraColumna;
    };
    Ruleta.prototype.setListaPrimeraColumna = function (pListaPrimeraColumna) {
        this.listaPrimeraColumna = pListaPrimeraColumna;
    };
    Ruleta.prototype.getListaSegundaColumna = function () {
        return this.listaSegundaColumna;
    };
    Ruleta.prototype.setListaSegundaColumna = function (pListaSegundaColumna) {
        this.listaSegundaColumna = pListaSegundaColumna;
    };
    Ruleta.prototype.getListaTercerColumna = function () {
        return this.listaTercerColumna;
    };
    Ruleta.prototype.setListaTercerColumna = function (pListaTercerColumna) {
        this.listaTercerColumna = pListaTercerColumna;
    };
    Ruleta.prototype.getLista1a18 = function () {
        return this.lista1a18;
    };
    Ruleta.prototype.setLista1a18 = function (pLista1a18) {
        this.lista1a18 = pLista1a18;
    };
    Ruleta.prototype.getLista19a36 = function () {
        return this.lista19a36;
    };
    Ruleta.prototype.setLista19a36 = function (pLista19a36) {
        this.lista19a36 = pLista19a36;
    };
    Ruleta.prototype.getUbicacionApuesta = function () {
        return this.ubicacionApuesta;
    };
    Ruleta.prototype.setUbicacionApuesta = function (pUbicacionApuesta) {
        this.ubicacionApuesta = pUbicacionApuesta;
    };
    Ruleta.prototype.getListaPar = function () {
        return this.listaPar;
    };
    Ruleta.prototype.setListaPar = function (pListaPar) {
        this.listaPar = pListaPar;
    };
    Ruleta.prototype.getListaImpar = function () {
        return this.listaImpar;
    };
    Ruleta.prototype.setListaImpar = function (pListaImpar) {
        this.listaImpar = pListaImpar;
    };
    /*-------------------------------Metodos---------------------------------- */
    Ruleta.prototype.apostar = function (pApuesta) {
        this.ubicacionApuesta.push(pApuesta);
    };
    Ruleta.prototype.validarCreditos = function () {
        if (this.credito > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Ruleta.prototype.pagarApuesta = function (pCredito) {
        this.credito += pCredito;
    };
    Ruleta.prototype.cobrarApuesta = function (pCredito) {
        this.credito -= pCredito;
    };
    Ruleta.prototype.girarRuleta = function () {
        return Math.round(Math.random() * (36 - 0) + 0);
    };
    Ruleta.prototype.validarApuestas = function (pGirarRuleta) {
        if (this.ubicacionApuesta.length > 0) {
            for (var i = 0; i < this.ubicacionApuesta.length; i++) {
                var numeroApostado = this.ubicacionApuesta[i].getNumeroApostado();
                var creditoApostado = this.ubicacionApuesta[i].getCreditoApuesta();
                if (numeroApostado == pGirarRuleta) {
                    //verifico si numeroApostado pertenece a listaNumerosRojos*/
                    if (this.getListaNumerosRojos().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a listaNumerosNegros*/
                    if (this.getListaNumerosNegros().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a primeraDocena*/
                    if (this.getListaPrimeraDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a segundaDocena*/
                    if (this.getListaSegundaDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a terceraDocena*/
                    if (this.getListaTerceraDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a primeraColumna*/
                    if (this.getListaPrimeraColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a segundaColumna*/
                    if (this.getListaSegundaColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a tercerColumna*/
                    if (this.getListaTercerColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a lista1a18*/
                    if (this.getLista1a18().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a lista19a36*/
                    if (this.getLista19a36().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a listaPar*/
                    if (this.getListaPar().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                    //verifico si numeroApostado pertenece a listaImpar*/
                    if (this.getListaImpar().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2);
                    }
                    ;
                }
                else {
                    this.cobrarApuesta(creditoApostado);
                }
            }
        }
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
