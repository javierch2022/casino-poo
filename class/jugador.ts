var readlineSync = require('readline-sync');

export class Jugador {
    
    protected nombre:string;
    protected dinero: number;
    protected credito: number;

    constructor(){

        this.nombre = readlineSync.question("Ingrese su nombre por favor : ");
        this.dinero = Number(readlineSync.question("Ingrese el dinero del jugador: "));
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
/////////////////// methodos /////////////////
}
  


