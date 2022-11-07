"use strict";
exports.__esModule = true;
var casino_1 = require("./class/casino");
var blackJack_1 = require("./class/juegos/blackjack/blackJack");
var ruleta_1 = require("./class/juegos/ruleta/ruleta");
var tripleDiamante_1 = require("./class/juegos/tragamonedas/tripleDiamante/tripleDiamante");
var zeus_1 = require("./class/juegos/tragamonedas/zeus/zeus");
// variables para jugador
/* let testJugador = new Jugador();


console.log(testJugador);


*/
var testBlackJack = new blackJack_1.BlackJack("El21", 5000, 2); // sacar pmontoApos
var testRuleta = new ruleta_1.Ruleta("Ruleta loca", 5000, 2);
var testTripleDiamnte = new tripleDiamante_1.TripleDiamante("Triple Diamante", 5000, 1, 3, 3);
var testZeus = new zeus_1.Zeus("Zeus", 5000, 5, 3, 3);
var juegos = [testBlackJack, testRuleta, testTripleDiamnte, testZeus];
var HardRock = new casino_1.Casino("HardRock", juegos, 1000, 2000);
var jugador = HardRock.ingresaJugador();
HardRock.pesosACreditos();
HardRock.getJuegos()[3].jugar(jugador);
HardRock.getJuegos()[3].jugar(jugador);
HardRock.getJuegos()[3].jugar(jugador);
HardRock.getJuegos()[3].jugar(jugador);
HardRock.getJuegos()[3].jugar(jugador);
