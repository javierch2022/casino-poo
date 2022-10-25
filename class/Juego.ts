import { BlackJack } from "./juegos/blackJack";
import { Ruleta } from "./juegos/ruleta";
import { Tragamonedas } from "./juegos/tragamonedas";


export class Juego {
    protected nombre: string;
    protected plata: number;
    protected credito: number;
    protected montoApostado: number;

    constructor(pNombre: string, pPlata: number, pCredito: number, pMontoApostado: number) {
        this.nombre = pNombre;
        this.plata = pPlata;
        this.credito = pCredito;
        this.montoApostado = pMontoApostado;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    public getPlata(): number {
        return this.plata;
    }
    public setPlata(pPlata: number): void {
        this.plata = pPlata;
    }
    public getCredito(): number {
        return this.credito;
    }
    public setCredito(pCredito: number): void {
        this.plata = pCredito;
    }
    public getMontoApostado(): number {
        return this.montoApostado;
    }
    public setMontoApostado(pMontoApostado: number): void {
        this.montoApostado = pMontoApostado;
    }
}


