var readlineSync = require('readline-sync');

import { Tragamonedas } from "../tragamonedas";
import { Jugador } from "../../../jugador";
import { Casino } from "../../../casino";
import { Juego } from "../../../juego";
export class TripleDiamante extends Tragamonedas {

    //////////////////// metodo   Automatico

    public jugar(pJugador: Jugador): void {
        let ventana: number[] = [];
        let finAutomatico: number = 0;
        let cantidadDeTiros: number = 0;
        do {
            console.clear();
            console.log("___________________________________________________________");
            console.log("       Bienvenido a Tragamonedas " + this.getNombre());            console.log("___________________________________________________________");
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log("");
            
            if (this.validarCreditos(pJugador)) {
                console.log("---------------------------------------------")
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                console.log("---------------------------------------------")
                console.log("");
                cantidadDeTiros = Number(readlineSync.question("Seleccione 1 para modo Automatico(3 tiros) o 0 para Manual: "));
                console.log("");
                console.log("**************************************");
                if (cantidadDeTiros === 1) {
                    cantidadDeTiros = 3;
                }
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    do {
                        if (this.validarCreditos(pJugador)) {
                            for (let i: number = 0; i < this.cantidadRodillo; i++) {
                                ventana.push(this.girarRodillo());                                
                            }
                            console.log("_____________________________________");
                            console.log("=== Tragamonedas Triple Diamante  ===");
                            console.log("_____________________________________");
                            console.log("");
                            console.log(">>>>>>>>>>>>> [ " + ventana + " ] <<<<<<<<<<<<<");
                            
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

                            if (maximo === this.cantidadRodillo) {
                                this.pagarApuesta(this.montoApostado * 1.5, pJugador);
                                console.log("");
                                console.log("Ud. tuvo " +this.cantidadRodillo+" coincidencia/s");
                                
                            } else if (maximo === (this.cantidadRodillo-1)) {
                                this.pagarApuesta(this.montoApostado, pJugador);
                                console.log("");
                                console.log("Ud. tuvo " +(this.cantidadRodillo-1)+" coincidencia/s.");
                               
                            } else {
                                this.cobrarApuesta(this.montoApostado, pJugador);
                                console.log("");
                                console.log("Ud. Pierde");
                            }
                            console.log("");
                            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
                            console.log("_____________________________________");
                            console.log("");
                            finAutomatico++;
                        }
                        ventana = [];

                    } while (finAutomatico < cantidadDeTiros);
                }
            }
        } while(Number(readlineSync.question("Seleccion 1 para Salir y 0 para volver a jugar: ")) === 0);
    }
}
