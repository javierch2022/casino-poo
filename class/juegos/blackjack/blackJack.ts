var readlineSync = require('readline-sync');
import { Casino } from "../../casino";
import { Juego } from "../../juego";
import { Jugador } from "../../jugador";

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


    constructor(pNombre: string, pCredito: number, pPagoCasa: number) {
        super(pNombre, pCredito, pPagoCasa);

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
        let otraCarta = readlineSync.question("quiere otra carta? (s/n): ");
        if (otraCarta == "s" || otraCarta == "S") {
            return true;
        } else {
            return false;
        }
    }

    public jugar(pJugador: Jugador): void {
        let jugador: number = 0; // suma de cartas 
        let computadora: number = 0; // suma de cartas
        do {
            console.clear();
            console.log("___________________________________________________________");
            console.log("             Bienvenido a " + this.getNombre());
            console.log("___________________________________________________________");
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");

            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("Cuantos creditos desea apostar?: "));
                console.log("");
                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    jugador += this.entregarCarta();
                    console.log("====================================");
                    console.log("Valor carta inicial: " + jugador);
                    console.log("");
                    while (jugador <= 21 && this.quiereCarta()) {
                        jugador += this.entregarCarta();
                        console.log("______________________________________");
                        console.log("");
                        console.log("Valor carta acumulada del jugador : " + jugador);
                        console.log("");
                    }
                    if (jugador != 0) {
                        let carta = 0;
                        let jugadorGana: boolean = true;
                        console.log("=====================================");
                        while (computadora <= 20 && (computadora < 17 || Math.round(Math.random() * (1 - 0) + 0)) && jugadorGana) {
                            carta++;
                            computadora += this.entregarCarta();
                            if (jugador > 21 && carta > 2 && computadora >= 17) {
                                jugadorGana = false;
                            }
                           
                            console.log("");
                            console.log("computadora: " + computadora);
                           
                        }
                    }
                    //se paga con creditos
                    if ((jugador <= 21 && jugador > computadora) || (jugador < computadora && computadora > 21)) {
                        console.log("");
                        console.log("*********************************");
                        console.log("          Jugador Gana");
                        console.log("*********************************");
                        this.pagarApuesta(this.montoApostado, pJugador);
                    } else if ((computadora <= 21 && computadora > jugador) || (jugador > computadora && jugador > 21)) {
                        console.log("");
                        console.log("*********************************");
                        console.log(" Gana la casa, el jugador pierde ");
                        console.log("*********************************");
                        
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    } else {
                        console.log("");
                        console.log("*********************************");
                        console.log("           Empate");
                        console.log("*********************************");
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
            console.log("_____________________________________");
            console.log("");
            
            jugador = computadora = 0;
        } while (Number(readlineSync.question("Seleccion 1 para Salir y 0 para volver a jugar: ")) === 0);
    }
}