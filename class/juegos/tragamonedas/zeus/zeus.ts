var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var fs = require('fs');

import { Tragamonedas } from "../tragamonedas";
import { Jugador } from "../../../jugador";

export class Zeus extends Tragamonedas {



 //----tragamonedas con metodo manual----//

    public jugar(pJugador: Jugador): void {
        let creditoInicial : number = pJugador.getCredito();
        let ventana: number[] = [];
        let finAutomatico: number = 0;
        console.log("creditos del jugador=??" + this.validarCreditos(pJugador));
        let cantidadDeTiros: number = 0;
        do {
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("               Bienvenido a Tragamonedas " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                   Reglas del Tragamonedas                   ");
            console.log("");
            console.log("");
            console.log(" El jugador coloca los creditos a apostar y tira de la palanca");
            console.log(" La palanca hace girar los 5 rodillos, si las figuras  ");
            console.log(" de los rodillos coinciden, el jugador gana un cierto numero");
            console.log(" de creditos");
            console.log("");
            console.log("                          El juego            ");
            console.log("");
            console.log("");
            console.log(" El tragamonedas Zeus, cuenta con la opcion de  ");
            console.log(" tiros manuales .  ");
            console.log("");
            console.log(" Ejemplos de jugadas : ");
            console.log("");
            console.log("            combinacion ganadora  [ 3,3,3,3,3 ]");
            console.log("                 Premia 5 coincidencias");
            console.log("");
            console.log("            combinacion ganadora  [ 4,4,4,4,3 ]");
            console.log("                 Premia 4 coincidencias");
            console.log("");
            console.log("            combinacion perdedora [ 1,2,2,3,0 ]");
            console.log("                 Pierde 0, 1, 2 coincidencias");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar es: HARDCORE");
            console.log(colors.green("________________________________________________________________"));


            if (this.validarCreditos(pJugador)) {
                console.log("");
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    if (this.validarCreditos(pJugador)) {
                        for (let i: number = 0; i < this.cantidadRodillo; i++) {
                            ventana.push(this.girarRodillo());

                        }
                            console.log("");
                            console.log(colors.yellow("************************  RESULTADO  ***************************"));
                            console.log("");
                            console.log("                       [ " + ventana + " ] ");
                            console.log("");
                            console.log(colors.yellow("****************************************************************"));

                        let contador: number[] = new Array(this.cantidadRodillo);
                        contador.fill(0);

                        for (let i: number = 0; i < ventana.length; i++) {
                            contador[ventana[i] - 1]++;
                        }

                        let maximo: number = 0;
                        let posicion: number = 0;
                        
                        /* ventana por contador */
                        for (let i = 0; i < contador.length; i++) {

                            if (contador[i] > maximo) {
                                maximo = contador[i];
                                posicion = i;
                            }
                        }

                        if (maximo === this.cantidadRodillo) {
                            this.pagarApuesta(this.montoApostado * 1.5, pJugador);
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("                 Jugador GANA con " +this.cantidadRodillo+" coincidencia/s");
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("");
                        } else if (maximo === (this.cantidadRodillo - 1)) {
                            this.pagarApuesta(this.montoApostado, pJugador);
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("                 Jugador GANA con "+(this.cantidadRodillo-1)+" coincidencia/s.");
                                console.log("");
                                console.log(colors.green("****************************************************************"));
                                console.log("");
                        } else {
                            this.cobrarApuesta(this.montoApostado, pJugador);
                            console.log("");
                            console.log(colors.red("****************************************************************"));
                            console.log("                       JUGADOR PIERDE ");
                            console.log("");
                            console.log(colors.red("****************************************************************"));
                            console.log("");
                        }
                        console.log("Creditos disponible para jugar : " + pJugador.getCredito());
                        console.log(colors.yellow("________________________________________________________________"));
                        console.log("");
                        console.log("");
                        finAutomatico++;
                    }
                    ventana = [];
                }
            }
        } while (Number(readlineSync.question("Seleccion >> 1 << para Salir y >> 0 << para volver a jugar: ")) === 0);
        
        let creditoFinal : number = pJugador.getCredito();

        fs.appendFileSync('./class/juegos/tragamonedas/zeus/zeus-estadistica.txt',pJugador.getNombre() + '; ' + creditoInicial + '; ' + creditoFinal + '.\r\n');
    }
}