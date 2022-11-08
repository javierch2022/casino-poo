"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var casino_1 = require("./class/casino");
var blackJack_1 = require("./class/juegos/blackjack/blackJack");
var ruleta_1 = require("./class/juegos/ruleta/ruleta");
var tripleDiamante_1 = require("./class/juegos/tragamonedas/tripleDiamante/tripleDiamante");
var zeus_1 = require("./class/juegos/tragamonedas/zeus/zeus");
var blackJackRock = new blackJack_1.BlackJack("BlackJack Rock", 50000, 2);
var ruletaRock = new ruleta_1.Ruleta("Ruleta Rock", 50000, 2);
var tripleDiamnte = new tripleDiamante_1.TripleDiamante("Triple Diamante", 5000, 4, 3, 5);
var zeus = new zeus_1.Zeus("Zeus", 50000, 10, 5, 5);
var juegos = [blackJackRock, ruletaRock, zeus, tripleDiamnte];
var HardRock = new casino_1.Casino("HardRock", juegos, 1000, 2000);
console.clear();
console.log("========================================================");
console.log("                      Casino " + HardRock.getNombre());
console.log("========================================================");
console.log("");
var jugador = HardRock.ingresaJugador();
console.log("");
HardRock.pesosACreditos();
console.log("____________________________________________________");
console.log("");
console.log("Bienvenido " + jugador.getNombre() + ", su credito es : " + jugador.getCredito());
console.log("");
do {
    console.clear();
    console.log(" =========================================================");
    console.log("  " + jugador.getNombre() + " por favor seleccione una opcion de la lista");
    console.log(" =========================================================");
    console.log("                                   Su credito es : " + jugador.getCredito());
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
    console.log("___________________________________________________________");
    var lista = Number(readlineSync.question("Ingrese un numero de la lista: "));
    console.log("___________________________________________________________");
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
        case 4:
            console.clear();
            console.log("___________________________________________________________");
            console.log("                   RECARGA DE CREDITOS                     ");
            console.log("___________________________________________________________");
            console.log("");
            break;
        case 5:
            console.clear();
            console.log("___________________________________________________________");
            console.log("               CAMBIAR CREDITOS EN CASINO                  ");
            console.log("___________________________________________________________");
            console.log("");
            break;
        case 6:
            console.clear();
            console.log("============================================================");
            console.log("     Gracias por jugar en Casino HardRock Vuelva Pronto     ");
            console.log("============================================================");
            break;
        default:
    }
} while (lista != 7);
//HardRock.getJuegos()[3].jugar(jugador);
//HardRock.getJuegos()[3].jugar(jugador);
//HardRock.getJuegos()[3].jugar(jugador);
//HardRock.getJuegos()[3].jugar(jugador);
//HardRock.getJuegos()[3].jugar(jugador);
