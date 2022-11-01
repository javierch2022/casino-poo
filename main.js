"use strict";
exports.__esModule = true;
<<<<<<< HEAD
var ruleta_1 = require("./class/juegos/ruleta");
// console log
var apostado = new ruleta_1.ApuestaRuleta('18', 10, 18);
var apuesta1 = [];
apuesta1.push(apostado);
var ruleta1 = new ruleta_1.Ruleta("RuletaUSH", 5000, 10, apuesta1, 2);
console.log(ruleta1);
console.log(apuesta1);
ruleta1.validarApuestas(ruleta1.girarRuleta());
console.log(ruleta1);
console.log(apuesta1);
=======
var blackJack_1 = require("./class/juegos/blackJack");
var el21 = new blackJack_1.BlackJack("el 21", 1000, 10);
el21.jugar();
el21.jugar();
el21.jugar();
el21.jugar();
el21.jugar();
>>>>>>> RamaEmiliano
