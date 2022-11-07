var readlineSync = require('readline-sync');
import { Juego } from "./juego";
import {Jugador} from "./jugador";

export class Casino{
    private nombre : string;
    private jugador : Jugador;
    private juegos: Juego[];
    private bancaDinero : number;
    private bancaCredito : number; 

    
    constructor (pNombre : string, pJuegos : Juego[], pBancaDinero : number,pBancaCredito : number){
        this.nombre = pNombre;
        this.juegos = pJuegos;
        this.bancaDinero = pBancaDinero;
        this.bancaCredito = pBancaCredito;
            }

    //---get & set ---//
    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre : string){
        this.nombre = nombre;
    }
    public getBanca(){
        return this.bancaDinero;
    }
    public setBanca(banca : number){
        this.bancaDinero = banca;
    }
    public getBancaDinero(){
        return this.bancaDinero;
    }
    public setBancaDinero(bancaDinero : number){
        this.bancaDinero = bancaDinero;
    }
    public setJuego(juego : Juego){
        this.juegos.push(juego);
    }
    public getJuegos(){
        return this.juegos;
    }
    //---metodos---//
    public pesosACreditos(){
            console.log("dinero inicial jugador: " + this.jugador.getDinero());
            console.log("credito inicial jugador: " + this.jugador.getCredito());
            console.log("dinero inicial casino: " + this.bancaDinero);
            console.log("credito inicial casino: " + this.bancaCredito);
        let dineroAConsultar = Number(readlineSync.question("Ingrese la cantidad de dinero a cambiar por creditos: "));
        if(dineroAConsultar <= this.jugador.getDinero()){
            this.jugador.setDinero(this.jugador.getDinero() - dineroAConsultar);
            this.jugador.setCredito(dineroAConsultar *2);
            this.bancaDinero += dineroAConsultar;
            this.bancaCredito -= dineroAConsultar *2;
            console.log("dinero jugador: " + this.jugador.getDinero());
            console.log("credito jugador: " + this.jugador.getCredito());
            console.log("dinero casino: " + this.bancaDinero);
            console.log("credito casino: " + this.bancaCredito);
        }else{
            console.log("usted no posee el dinero suficiente"); // derivar a menu de inicio.
        }
    }
    public creditosAPesos(){
        console.log("dinero inicial jugador: " + this.jugador.getDinero());
        console.log("credito inicial jugador: " + this.jugador.getCredito());
        console.log("dinero inicial casino: " + this.bancaDinero);
        console.log("credito inicial casino: " + this.bancaCredito);
    let creditoAConsultar = Number(readlineSync.question("Ingrese la cantidad de creditos a cambiar por dinero: "));
    if(creditoAConsultar <= this.jugador.getCredito()){
        this.jugador.setDinero(this.jugador.getDinero() + (creditoAConsultar / 2));
        this.jugador.setCredito(this.jugador.getCredito() - (creditoAConsultar));
        this.bancaDinero -= (creditoAConsultar / 2);
        this.bancaCredito += creditoAConsultar;
        console.log("dinero jugador: " + this.jugador.getDinero());
        console.log("credito jugador: " + this.jugador.getCredito());
        console.log("dinero casino: " + this.bancaDinero);
        console.log("credito casino: " + this.bancaCredito);
    }else{
        console.log("usted no posee los creditos suficientes"); // derivar a menu de inicio.
    }
    }
    public ingresaJugador():Jugador{
        this.jugador = new Jugador()
        return this.jugador;
    }
}