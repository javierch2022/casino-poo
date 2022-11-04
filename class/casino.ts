import { Juego } from "./juego";
import {Jugador} from "./jugador";

export class Casino{
    private nombre : string;
    private jugador : Jugador;
    private juegos: Juego[];
    private banca : number;
    
    constructor (pNombre : string, pJugador : Jugador, pJuegos : Juego[], pBanca : number ){
        this.nombre = pNombre;
        this.jugador = pJugador;
        this.juegos = pJuegos;
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