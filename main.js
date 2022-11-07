"use strict";
exports.__esModule = true;
var casino_1 = require("./class/casino");
var blackJack_1 = require("./class/juegos/blackjack/blackJack");
var ruleta_1 = require("./class/juegos/ruleta/ruleta");
// variables para jugador
/* let testJugador = new Jugador();


console.log(testJugador);


*/
var testBlackJack = new blackJack_1.BlackJack("El21", 5000, 2); // sacar pmontoApos
var testRuleta = new ruleta_1.Ruleta("Ruleta loca", 5000, 2);
var juegos = [testBlackJack, testRuleta];
var HardRock = new casino_1.Casino("HardRock", juegos, 1000, 2000);
var jugador = HardRock.ingresaJugador();
HardRock.pesosACreditos();
HardRock.getJuegos()[1].jugar(jugador);
HardRock.getJuegos()[1].jugar(jugador);
HardRock.getJuegos()[1].jugar(jugador);
