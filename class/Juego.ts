import { BlackJack } from "./juegos/blackjack/blackJack";
import { Ruleta } from "./juegos/ruleta/ruleta";
import { Tragamonedas } from "./juegos/tragamonedas/tragamonedas";
import { Casino } from "./casino";
import { Jugador } from "./jugador";



export abstract class Juego {
    protected nombre: string; 
    protected credito: number;
    protected montoApostado: number;
    protected pagoCasa: number;

    constructor(pNombre: string,pCredito: number, pPagoCasa: number) {
        this.nombre = pNombre;
        this.credito = pCredito;
        this.montoApostado = 0;
        this.pagoCasa = pPagoCasa;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    public getCredito(): number {
        return this.credito;
    }
    public setCredito(pCredito: number): void {
        this.credito = pCredito;
    }
    public getMontoApostado(): number {
        return this.montoApostado;
    }
    public setMontoApostado(pMontoApostado: number): void {
        this.montoApostado = pMontoApostado;
    }
    /*---------------metodos---------------*/

    public pagarApuesta(pCredito: number,pJugador:Jugador): void { /* Visto desde el CASINO */
        pJugador.setCredito(pJugador.getCredito() + (pCredito * this.pagoCasa));
        this.credito += pCredito * this.pagoCasa;
    }
    public cobrarApuesta(pCredito: number,pJugador:Jugador): void {
        pJugador.setCredito(pJugador.getCredito() - (pCredito/* * this.pagoCasa*/));
        this.credito -= pCredito;
    }

    public validarCreditos(jugador : Jugador) {
        if (jugador.getCredito() > 0) {
            return true;
        } else {
            return false; // devuelve al menu inicial o cargar credito
        }
    }
    abstract jugar(jugador:Jugador);
}


