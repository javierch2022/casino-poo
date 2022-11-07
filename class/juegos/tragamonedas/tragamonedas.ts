var readlineSync = require('readline-sync');

import { Juego } from "../../juego";
import { Jugador } from "../../jugador";
import { Casino } from "../../casino";

export abstract class Tragamonedas extends Juego {

    protected cantidadRodillo: number;
    protected cantidadFigura: number;
    protected pagoCasa: number;

    constructor(pNombre: string, pCredito: number,pPagoCasa : number, pCantRodillo: number, pCantFigura: number) {
        super(pNombre, pCredito, pPagoCasa);
        this.cantidadRodillo = pCantRodillo;
        this.cantidadFigura = pCantFigura;
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

    public girarRodillo(): number {
        return Math.round(Math.random() * (this.getCantidadFigura() - 1) + 1);
    }

    abstract jugar(jugador:Jugador);
}