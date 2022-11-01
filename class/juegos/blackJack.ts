var readlineSync = require('readline-sync');

import { Juego } from "../Juego";
class ApuestaBlackJack {
    private creditoApuesta: number;
    constructor(creditoApuesta: number) {
        this.creditoApuesta = creditoApuesta;
    }
}

export class BlackJack extends Juego {
    protected totalCartas: number; // todas las cartas
    protected mazoCartas: string[]; // sumar valores de cart
    protected numeroCartas: string[]; // cartas de 1 a 10
    /*protected palos: string[]; //corazon,diamante,etc
    protected cartasEspeciales: string[]; // j,q,k,a */
    protected pedirCartas: boolean;
    protected noMasCartas: boolean;
    protected pagoCasa: number;
    protected cartasJugador: number;
    protected cartasPC: number;


    constructor(pNombre: string, pCredito: number, pMontoApostado: number, ) {
        super(pNombre, pCredito, pMontoApostado);

        this.totalCartas = 52;
        this.numeroCartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        /* this.palos = ['C', 'D', 'P', 'T']; // C = CORZARON, D = DIAMANTE, P = PICA, T = TREBOL
         this.cartasEspeciales = ['J', 'Q', 'K', 'A'];*/
        this.pedirCartas = false;
        this.noMasCartas = false;
        this.pagoCasa = 1;

    }

    //--------get & set-------//
    public setPedirCartas(): void {
        this.pedirCartas = true;
    }
    public getPedirCartas(): boolean {
        return this.pedirCartas;
    }
    public setNoMasCartas(): void {
        this.noMasCartas = true;
    }
    public getNoMasCartas(): boolean {
        return this.noMasCartas;
    }
    //--------metodos---------//
    public validarCreditos() {
        if (this.credito > 0) {
            return true;
        } else {
            return false;
        }
    }
    public pagarApuesta(pCredito: number): void {
        this.credito += pCredito;
    }
    public cobrarApuesta(pCredito: number): void {
        this.credito -= pCredito;
    }
    public entregarCarta(): number {
        return Math.round(Math.random() * (10 - 1) + 1);
    }
    public quiereCarta(): boolean {
        let otraCarta =  readlineSync.question("¿quiere otra carta? (s/n): ");
        if (otraCarta == "s" || otraCarta == "S") {
            return true;
        } else {
            return false;
        }
    }
    public jugar(): void {
        let jugador: number = 0; // suma de cartas 
        let computadora: number = 0; // suma de cartas
        if (this.validarCreditos()) {
            while (jugador <= 21 && this.quiereCarta()) {
                jugador += this.entregarCarta(); // falta terminar, falta definir limites de while loop.
                console.log("jugador: " +jugador);
            }
        } else {
            console.log("No tiene creditos para jugar");
            console.log("gracias por haber gastado su dinero aqui");
        }
        if (jugador != 0) {
            let carta = 0;
            let jugadorGana : boolean = true;
            while (computadora <= 20 && (computadora <17 ||Math.round(Math.random() * (1 - 0) + 0)) && jugadorGana) {
                carta++; 
                computadora += this.entregarCarta();
                if(jugador > 21 && carta > 2 && computadora >=17){
                    jugadorGana = false;
                    console.log(jugadorGana);// estado true false 
                }
                    console.log("carta: " + carta);
                console.log("computadora: " +computadora);
            }
        }

        if((jugador <= 21 && jugador > computadora)||(jugador < computadora && computadora > 21)){
            console.log("jugador gana");
            this.pagarApuesta(2);
        } else if((computadora <= 21 && computadora > jugador)||(jugador > computadora && jugador >21)){
            console.log("gana la casa, el jugador pierde");
            this.cobrarApuesta(2);
        }else{
            console.log("empate");
            this.cobrarApuesta(1);
        }
    }
}