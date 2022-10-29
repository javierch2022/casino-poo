import {Casino} from './class/casino';
import { Juego } from './class/Juego';
import { ApuestaRuleta, Ruleta } from './class/juegos/ruleta';

// console log
let apostado : ApuestaRuleta = new ApuestaRuleta('18', 10, 18);
let apuesta1 : ApuestaRuleta[] = [];
apuesta1.push(apostado);
let ruleta1 : Ruleta = new Ruleta("RuletaUSH", 5000, 10, apuesta1, 2);
console.log(ruleta1);
console.log(apuesta1);
let tiro : number = ruleta1.girarRuleta();
console.log('TIRO: ' + tiro);
ruleta1.validarApuestas(tiro);
console.log(ruleta1);
console.log(apuesta1);