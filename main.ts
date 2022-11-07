import {Casino} from './class/casino';
import {Juego} from './class/juego';
import { BlackJack } from './class/juegos/blackjack/blackJack';
import { Ruleta } from './class/juegos/ruleta/ruleta';
import { Tragamonedas } from './class/juegos/tragamonedas/tragamonedas';
import { TripleDiamante } from './class/juegos/tragamonedas/tripleDiamante/tripleDiamante';
import { Jugador } from './class/jugador';

// variables para jugador
/* let testJugador = new Jugador();


console.log(testJugador);


*/
let testBlackJack : Juego = new BlackJack ("El21",5000,2); // sacar pmontoApos
let testRuleta : Juego = new Ruleta ("Ruleta loca",5000,2);
let testTripleDiamnte : Juego = new TripleDiamante ("Triple Diamante",5000,0.5,3,3);
let juegos : Juego [] = [testBlackJack,testRuleta, testTripleDiamnte];
let HardRock : Casino = new Casino("HardRock",juegos,1000,2000);



let jugador: Jugador = HardRock.ingresaJugador();
HardRock.pesosACreditos();
HardRock.getJuegos()[2].jugar(jugador);

