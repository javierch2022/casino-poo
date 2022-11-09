var readlineSync = require('readline-sync');
var colors = require('colors/safe');


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
        console.log("");
        console.log("La conversion de la casa es $1 = » 2 « creditos");
        console.log("");
        console.log(this.jugador.getNombre() + " usted tiene $"+ this.jugador.getDinero() +" pesos para cambiar por creditos");
        console.log("");
        console.log(colors.green("______________________________________________________"));
        console.log("");
        let dineroAConsultar = Number(readlineSync.question("Ingrese la cantidad de dinero a cambiar por creditos: "));
        if(dineroAConsultar <= this.jugador.getDinero()){
            this.jugador.setDinero(this.jugador.getDinero() - dineroAConsultar);
            this.jugador.setCredito(this.jugador.getCredito() + dineroAConsultar * 2);
            this.bancaDinero += dineroAConsultar;
            this.bancaCredito -= dineroAConsultar *2;
        }else{
            console.log("usted no posee el dinero suficiente"); // derivar a menu de inicio.
        }
    }
    public creditosAPesos(){
        console.log("");
        console.log("    La conversion de la casa es $1 = » 2 « creditos");
        console.log("");
        console.log(this.jugador.getNombre() + " su credito disponible es de » "+ this.jugador.getCredito() +" « para cambiar por dinero");
        console.log("");
        console.log(colors.green("______________________________________________________"));
        console.log("");
    let creditoAConsultar = Number(readlineSync.question("Ingrese la cantidad de creditos a cambiar por dinero: "));
    if(creditoAConsultar <= this.jugador.getCredito()){
        this.jugador.setDinero(this.jugador.getDinero() + (creditoAConsultar / 2));
        this.jugador.setCredito(this.jugador.getCredito() - (creditoAConsultar));
        this.bancaDinero -= (creditoAConsultar / 2);
        this.bancaCredito += creditoAConsultar;
    }else{
        console.log("usted no posee los creditos suficientes"); // derivar a menu de inicio.
    }
    }
    public ingresaJugador():Jugador{
        this.jugador = new Jugador()
        return this.jugador;
    }
}