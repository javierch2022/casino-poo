import { BlackJack } from "./juegos/blackjack/blackJack";
import { Ruleta } from "./juegos/ruleta/ruleta";
import { Tragamonedas } from "./juegos/tragamonedas/tragamonedas";
import { Casino } from "./casino";


export class Juego {
    protected nombre: string; 
    protected credito: number;
    protected montoApostado: number;

    constructor(pNombre: string,pCredito: number, pMontoApostado: number, ) {
        this.nombre = pNombre;
        this.credito = pCredito;
        this.montoApostado = pMontoApostado;
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

    public pagarApuesta(pCredito: number): void {
        this.credito += pCredito * this.pagoCasa;
    }
    public cobrarApuesta(pCredito: number): void {
        this.credito -= pCredito;
    }

    public validarCreditos() {
        if (this.credito > 0) {
            return true;
        } else {
            return false;
        }
    }
}


