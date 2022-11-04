var readlineSync = require('readline-sync');

export class Jugador{
    
    protected nombre:string;
    protected credito: number;

    constructor(){

        this.nombre = readlineSync.question("Ingrese su nombre por favor : ");
        this.credito = Number(readlineSync.question("Ingrese cantidad de credito a cargar : "));
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
  


