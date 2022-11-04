var readlineSync = require('readline-sync');
import { Casino } from "../../casino";
import { Juego } from "../../juego";

class ApuestaBlackJack {
    private creditoApuesta: number;
    constructor(creditoApuesta: number) {
        this.creditoApuesta = creditoApuesta;
    }
}

export class BlackJack extends Juego {
    protected totalCartas: number; // todas las cartas
    protected mazoCartas: string[]; // sumar valores de cart
    protected numeroCartas: string[]; // cartas de 1 a 1
    protected pedirCartas: boolean;
    protected noMasCartas: boolean;
    protected cartasJugador: number;
    protected cartasPC: number;


    constructor(pNombre: string, pCredito: number, pMontoApostado: number) {
        super(pNombre, pCredito, pMontoApostado);

        this.totalCartas = 52;
        this.numeroCartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.pedirCartas = false;
        this.noMasCartas = false;
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
                jugador += this.entregarCarta(); 
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
                }
                    console.log("carta: " + carta);
                console.log("computadora: " +computadora);
            }
        }

        if((jugador <= 21 && jugador > computadora)||(jugador < computadora && computadora > 21)){
            console.log("jugador gana");
            this.pagarApuesta(this.montoApostado);
        } else if((computadora <= 21 && computadora > jugador)||(jugador > computadora && jugador >21)){
            console.log("gana la casa, el jugador pierde");
            this.cobrarApuesta(this.montoApostado);
        }else{
            console.log("empate");
        }
        console.log("credito usuario:" + this.credito)
    }
}