var readlineSync = require('readline-sync');

import { Tragamonedas } from "../tragamonedas";


class TripleDiamante extends Tragamonedas{

        
        
    











        //////////////////// metodos   Automatico

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