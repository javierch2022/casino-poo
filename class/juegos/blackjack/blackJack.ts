var readlineSync = require('readline-sync');
var colors = require('colors/safe');
var fs = require('fs');

import { Juego } from "../../juego";
import { Jugador } from "../../jugador";



export class BlackJack extends Juego {
    
    constructor(pNombre: string, pCredito: number, pPagoCasa: number) {
        super(pNombre, pCredito, pPagoCasa);
    }
    //--------metodos---------//

    public entregarCarta(): number {
        return Math.round(Math.random() * (10 - 1) + 1);
    }

    public quiereCarta(): boolean {
        let otraCarta = readlineSync.question("quiere otra carta? (s/n): ");
        if (otraCarta == "s" || otraCarta == "S") {
            return true;
        } else {
            return false;
        }
    }

    public jugar(pJugador: Jugador): void {
        let creditoInicial : number = pJugador.getCredito();
        let jugador: number = 0; // suma de cartas 
        let computadora: number = 0; // suma de cartas
        do {
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("             Bienvenido a " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                   Reglas del Black Jack                   ");
            console.log("");
            console.log("");
            console.log(" El Black Jack es uno de los juegos mas populares del Casino.");
            console.log(" El Objetivo es simple: ganarle al Croupier obteniendo el ");
            console.log(" puntaje mas cercano a 21, las figuras valen 10 y las cartas ");
            console.log(" conservan su valor. El Black Jack se produce cuando las 2(2) ");
            console.log("  primeras cartas son un diez o cualquier figura mas un As.");
            console.log("");
            console.log("");
            console.log("                          El juego            ");
            console.log("");
            console.log("");
            console.log(" Se entrega 1 carta al jugador, entonces el Croupier preguntara");
            console.log(" siquiere otra carta. Si sus cartas totalizan un valor mas ");
            console.log(" cercano a 21que las del Croupier, usted gana y se le paga el ");
            console.log(" valor de la apuesta x 2. ");
            console.log(" El Courpier debera debera plantarce con un total de 17 o mas y");
            console.log(" debera tomar una carta mas si tiene 16 o menos.");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar es: 2% ");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");



            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                console.log("");
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    jugador += this.entregarCarta();
                    console.log(colors.yellow("________________________________________________________________"));
                    console.log("Valor carta inicial: " + jugador);
                    console.log("");
                    while (jugador <= 21 && this.quiereCarta()) {
                        jugador += this.entregarCarta();
                        console.log(colors.yellow("________________________________________________________________"));
                        console.log("");
                        console.log("Valor de cartas acumuladas del jugador : " + jugador);
                        console.log("");
                    }
                    if (jugador != 0) {
                        let carta = 0;
                        let jugadorGana: boolean = true;
                        console.log(colors.yellow("________________________________________________________________"));
                        while (computadora <= 20 && (computadora < 17 || Math.round(Math.random() * (1 - 0) + 0)) && jugadorGana) {
                            carta++;
                            computadora += this.entregarCarta();
                            if (jugador > 21 && carta > 2 && computadora >= 17) {
                                jugadorGana = false;
                            }
                           
                            console.log("");
                            console.log("Valor de cartas acumuladas del Crupier: " + computadora);
                           
                        }
                    }
                    //se paga con creditos
                    if ((jugador <= 21 && jugador > computadora) || (jugador < computadora && computadora > 21)) {
                        console.log("");
                        console.log(colors.green("****************************************************************"));
                        console.log("                         JUGADOR GANA");
                        console.log("");
                        console.log(colors.green("****************************************************************"));
                        this.pagarApuesta(this.montoApostado, pJugador);
                    } else if ((computadora <= 21 && computadora > jugador) || (jugador > computadora && jugador > 21)) {
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        console.log("                 GANA LA CASA, JUGADOR PIERDE ");
                        console.log("");
                        console.log(colors.red("****************************************************************"));
                        
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    } else {
                        console.log("");
                        console.log(colors.yellow("****************************************************************"));
                        console.log("                             EMPATE");
                        console.log("");
                        console.log(colors.yellow("****************************************************************"));
                    }
                } else {
                    console.log("su apuesta excede los creditos que tiene");
                    console.log("");
                }
            } else {
                console.log("No tiene creditos para jugar");
                console.log("");
            }
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log(colors.yellow("________________________________________________________________"));
            console.log("");
            
            jugador = computadora = 0;
        } while (Number(readlineSync.question("Seleccion >> 1 << para Salir y >> 0 << para volver a jugar: ")) === 0);

        let creditoFinal : number = pJugador.getCredito();

        fs.appendFileSync('./class/juegos/blackjack/blackjack-estadistica.txt',pJugador.getNombre() + '; ' + creditoInicial + '; ' + creditoFinal + '.\r\n');
    }
}
