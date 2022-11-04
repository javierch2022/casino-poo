var readlineSync = require('readline-sync');

import { Juego } from "../../juego";


export class Tragamonedas extends Juego {

    protected cantidadRodillo: number;
    protected cantidadFigura: number;
    protected pagoCasa: number;

    constructor(pNombre: string, pCredito: number, pMontoApostado: number, pCantRodillo: number, pCantFigura: number) {
        super(pNombre, pCredito, pMontoApostado)

        this.cantidadRodillo = pCantRodillo;
        this.cantidadFigura = pCantFigura;
        this.pagoCasa = 5;
    }

    // GET AND SET
    public getCantidadRodillo(): number {
        return this.cantidadRodillo;
    }
    public setCantidadRodillo(pCantRodillo: number): void {
        this.cantidadRodillo = pCantRodillo;
    }
    public getCantidadFigura(): number {
        return this.cantidadFigura;
    }
    public setCantidadFigura(pCantFigura: number): void {
        this.cantidadFigura = pCantFigura;
    }

    // methodos 

    public pagarApuesta(pCredito: number): void {
        this.credito += pCredito * this.pagoCasa;
    }
    public cobrarApuesta(pCredito: number): void {
        this.credito -= pCredito;
    }


    public girarRodillo(): number {
        return Math.round(Math.random() * (this.getCantidadFigura() - 1) + 1);
    }

    public validarCreditos() {
        if (this.credito > 0) {
            return true;
        } else {
            return false;
        }
    }


    public Jugar(): void {
        let jugador: number = 0;
        let rodilloGirado: number = 0;
        let ventana: number[] = [];
        let coincidencia: number = 0;

        if (this.validarCreditos()) {
            for (let i: number = 0; i < this.cantidadRodillo; i++) {
                ventana.push(this.girarRodillo());
                console.log(ventana);
            }

            let contador: number[] = new Array(this.cantidadRodillo);
            contador.fill(0);

            for (let i: number = 0; i < ventana.length; i++) {
                contador[ventana[i]-1]++;
            }

            let maximo : number = 0;
            let posicion : number = 0;

            for (let i = 0; i < ventana.length; i++) {
    
                if (contador[i] > maximo) {
                    maximo=contador[i];
                    posicion = i;
                }
            }
            console.log("lista [] maximo : " + maximo );
            console.log("lista [] posicion : " +  posicion);
            console.log("este es el contador : " + contador);


        if (maximo === 3) {
             this.pagarApuesta(this.montoApostado * 3);
             console.log("tuvo 3 coincidencia");
         } else if (maximo === 2) {
             this.pagarApuesta(this.montoApostado * 2);
             console.log("tuvo 2 coincidencia");
         } else {
             this.cobrarApuesta(this.montoApostado);
             console.log("pierde");
         }
         console.log("credito usuario:" + this.credito)
    }

}
}