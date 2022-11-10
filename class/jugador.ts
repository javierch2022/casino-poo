var readlineSync = require('readline-sync');

export class Jugador {
    
    protected nombre:string;
    protected dinero: number; // efectivo
    protected credito: number; // creditos que le da el casino al cambiar dinero

    constructor(){

        this.nombre = readlineSync.question("Ingrese su nombre por favor : ");
        do {
            this.dinero = Number(readlineSync.question("Ingrese el dinero del jugador: "));
        } while (isNaN(this.dinero));
        this.credito = 0; 
    }

    /////////////// get and set //////////////

    public getNombre(){
        return this.nombre;
    }
    public setNombre(pNombre:string){
        this.nombre = pNombre;
    }
    public getCredito(){
        return this.credito;
    }
    public setCredito(pCredito:number){
        this.credito = pCredito;
    }
    public getDinero(): number{
        return this.dinero;
    }
    public setDinero(pDinero:number){{
        this.dinero = pDinero;
    }
}
/////////////////// methodos /////////////////
}
  


