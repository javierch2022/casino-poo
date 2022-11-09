"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var casino_1 = require("./class/casino");
var blackJack_1 = require("./class/juegos/blackjack/blackJack");
var ruleta_1 = require("./class/juegos/ruleta/ruleta");
var tripleDiamante_1 = require("./class/juegos/tragamonedas/tripleDiamante/tripleDiamante");
var zeus_1 = require("./class/juegos/tragamonedas/zeus/zeus");
var blackJackRock = new blackJack_1.BlackJack("BlackJack Rock", 50000, 2);
var ruletaRock = new ruleta_1.Ruleta("Ruleta Rock", 50000, 2);
var tripleDiamnte = new tripleDiamante_1.TripleDiamante("Triple Diamante", 5000, 1, 3, 3);
var zeus = new zeus_1.Zeus("Zeus", 50000, 10, 5, 5);
var juegos = [blackJackRock, ruletaRock, zeus, tripleDiamnte];
var HardRock = new casino_1.Casino("HardRock", juegos, 1000, 2000);
function imprimePortada() {
    console.clear();
    console.log(colors.red("========================================================"));
    console.log("                      Casino " + HardRock.getNombre());
    console.log(colors.red("========================================================"));
}
imprimePortada();
var jugador = HardRock.ingresaJugador();
imprimePortada();
HardRock.pesosACreditos();
console.log("");
console.log(colors.red("_____________________________________________________"));
console.log("");
console.log("Bienvenido " + jugador.getNombre() + ", su credito es » " + jugador.getCredito() + "  «");
console.log("");
do {
    console.clear();
    console.log(colors.red("========================================================"));
    console.log("  " + jugador.getNombre() + " por favor seleccione una opcion de la lista");
    console.log(colors.red("========================================================"));
    console.log(" Dinero disponible $" + jugador.getDinero() + "          Su credito es » " + jugador.getCredito() + " «");
    console.log("");
    console.log("");
    console.log(" 1 - Jugar " + HardRock.getJuegos()[0].getNombre()); // agregar la clase.parametro para todes
    console.log(" 2 - Jugar " + HardRock.getJuegos()[1].getNombre());
    console.log(" 3 - Jugar Tragamonedas " + HardRock.getJuegos()[2].getNombre());
    console.log(" 4 - Jugar Tragamonedas " + HardRock.getJuegos()[3].getNombre());
    console.log(" 5 - Cargar mas credito");
    console.log(" 6 - Cambiar mis creditos en casino");
    console.log(" 7 - Salir");
    console.log("");
    console.log(colors.red("________________________________________________________"));
    console.log("");
    var lista = Number(readlineSync.question("Ingrese un numero de la lista: "));
    console.log(colors.red("________________________________________________________"));
    console.log("");
    switch (lista) {
        case 1:
            /* BlackJack */
            lista = HardRock.getJuegos()[0].jugar(jugador);
            console.log("");
            break;
        case 2:
            /* Ruleta */
            lista = HardRock.getJuegos()[1].jugar(jugador);
            console.log("");
            break;
        case 3:
            /* Tragamonedas Zeus */
            lista = HardRock.getJuegos()[2].jugar(jugador);
            console.log("");
            break;
        case 4:
            /* Tragamonedas Triple Diamante */
            lista = HardRock.getJuegos()[3].jugar(jugador);
            console.log("");
            break;
        case 5:
            console.clear();
            console.log("________________________________________________________");
            console.log("                RECARGA DE CREDITOS                     ");
            console.log("________________________________________________________");
            HardRock.pesosACreditos();
            console.log("");
            break;
        case 6:
            console.clear();
            console.log("________________________________________________________");
            console.log("            CAMBIAR CREDITOS EN CASINO                  ");
            console.log("________________________________________________________");
            HardRock.creditosAPesos();
            console.log("");
            break;
        case 7:
            console.clear();
            console.log(colors.red("========================================================"));
            console.log("  Gracias por jugar en Casino HardRock Vuelva Pronto     ");
            console.log(colors.red("========================================================"));
            break;
        default:
    }
} while (lista != 7);
