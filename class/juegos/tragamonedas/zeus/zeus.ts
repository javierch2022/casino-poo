var readlineSync = require('readline-sync');

import { Tragamonedas } from "../tragamonedas";
import { Jugador } from "../../../jugador";
import { Casino } from "../../../casino";
import { Juego } from "../../../juego";

export class Zeus extends Tragamonedas {



    //////////////////// metodo   Automatico

    public jugar(pJugador: Jugador): void {
        let ventana: number[] = [];
        let finAutomatico: number = 0;
        console.log("creditos del jugador=??" + this.validarCreditos(pJugador));
        let cantidadDeTiros: number = 0;
        do {
            console.clear();
            console.log("___________________________________________________________");
            console.log("               Bienvenido a Tragamonedas " + this.getNombre());
            console.log("___________________________________________________________");
            console.log("");
            console.log("Creditos disponible para jugar : " + pJugador.getCredito());
            console.log("");

            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    if (this.validarCreditos(pJugador)) {
                        for (let i: number = 0; i < this.cantidadRodillo; i++) {
                            ventana.push(this.girarRodillo());

                        }
                        console.log("____________________________________________");
                        console.log("============ Tragamonedas "+this.getNombre()+"  ============");
                        console.log("____________________________________________");
                        console.log("");
                        console.log(">>>>>>>>>>>>>   [ " + ventana + " ]   <<<<<<<<<<<<<");
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
                            console.log("Ud. tuvo " + this.cantidadRodillo + " coincidencia/s");
                        } else if (maximo === (this.cantidadRodillo - 1)) {
                            this.pagarApuesta(this.montoApostado, pJugador);
                            console.log("");
                            console.log("tuvo " + (this.cantidadRodillo - 1) + " coincidencia/s");
                        } else {
                            this.cobrarApuesta(this.montoApostado, pJugador);
                            console.log("");
                            console.log("Ud. Pierde");
                        }
                        console.log("");
                        console.log("Creditos disponible para jugar : " + pJugador.getCredito());
                        console.log("______________________________________________");
                        console.log("");
                        console.log("");
                        finAutomatico++;
                    }
                    ventana = [];

                }
            }
        } while (Number(readlineSync.question("Seleccion 1 para Salir y 0 para volver a jugar: ")) === 0);
    }
}