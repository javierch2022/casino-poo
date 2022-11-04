import { Juego } from "./juego";
import {Jugador} from "./jugador";

export class Casino{
    private nombre : string;
    private jugador: Jugador;
    private juego: Juego;
    private banca : number;
    constructor (pNombre : string, pBanca: number){
        this.nombre = pNombre;
        this.banca = pBanca;
    }
    //---get & set ---//
    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre : string){
        this.nombre = nombre;
    }
    public getBanca(){
        return this.banca;
    }
    public setBanca(banca : number){
        this.banca = banca;
    }
}