import {Casino} from './class/casino';
import {Juego} from './class/juego';
import { BlackJack } from './class/juegos/blackjack/blackJack';
import { Ruleta } from './class/juegos/ruleta/ruleta';
import { Jugador } from './class/jugador';

// variables para jugador
/* let testJugador = new Jugador();


console.log(testJugador);


*/
let testBlackJack : Juego = new BlackJack ("El21",5000,2); // sacar pmontoApos
let testRuleta : Juego = new Ruleta ("Ruleta loca",5000,2);
let juegos : Juego [] = [testBlackJack,testRuleta];
let HardRock : Casino = new Casino("HardRock",juegos,1000,2000);



let jugador: Jugador = HardRock.ingresaJugador();
HardRock.pesosACreditos();
HardRock.getJuegos()[1].jugar(jugador);
HardRock.getJuegos()[1].jugar(jugador);
HardRock.getJuegos()[1].jugar(jugador);

