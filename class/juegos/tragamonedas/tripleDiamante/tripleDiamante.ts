var readlineSync = require('readline-sync');

import { Tragamonedas } from "../tragamonedas";
import { Jugador } from "../../../jugador";
import { Casino } from "../../../casino";
import { Juego } from "../../../juego";

export class TripleDiamante extends Tragamonedas {



    //////////////////// metodo   Automatico

    public jugar(pJugador: Jugador): void {
        /*let jugador: number = 0;
        let rodilloGirado: number = 0;*/
        let ventana: number[] = [];
        /*let coincidencia: number = 0;*/
        let finAutomatico: number = 0;
        console.log("creditos del jugador=??" + this.validarCreditos(pJugador));
        let cantidadDeTiros: number = 0;
        
        if (this.validarCreditos(pJugador)) {
            this.montoApostado = Number(readlineSync.question("¿cuantos creditos desea apostar?: "));
            cantidadDeTiros = Number(readlineSync.question("seleccione 1 para modo Automatico(3 tiros) o 0  para manual"));
            console.log("cantidad  de tiro " + cantidadDeTiros);
            if (cantidadDeTiros === 1) {
                cantidadDeTiros = 3;
                console.log("cantidad  de tiro " + cantidadDeTiros);
            }
            if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                do {
                    if (this.validarCreditos(pJugador)) {
                        for (let i: number = 0; i < this.cantidadRodillo; i++) {
                            ventana.push(this.girarRodillo());
                            console.log(ventana);
                        }

                        let contador: number[] = new Array(this.cantidadRodillo);
                        contador.fill(0);

                        for (let i: number = 0; i < ventana.length; i++) {
                            contador[ventana[i] - 1]++;
                        }

                        let maximo: number = 0;
                        let posicion: number = 0;

                        for (let i = 0; i < ventana.length; i++) {

                            if (contador[i] > maximo) {
                                maximo = contador[i];
                                posicion = i;
                            }
                        }
                        console.log("lista [] maximo : " + maximo);
                        console.log("lista [] posicion : " + posicion);
                        console.log("este es el contador : " + contador);


                        if (maximo === 3) {
                            this.pagarApuesta(this.montoApostado * 1.5, pJugador);
                            console.log("tuvo 3 coincidencia");
                        } else if (maximo === 2) {
                            this.pagarApuesta(this.montoApostado, pJugador);
                            console.log("tuvo 2 coincidencia");
                        } else {
                            this.cobrarApuesta(this.montoApostado, pJugador);
                            console.log("pierde");
                        }
                        console.log("credito usuario:" + pJugador.getCredito());
                        finAutomatico++;
                    }
                    ventana = [];

                } while (finAutomatico < cantidadDeTiros);
                
            }
        }
    }
}
