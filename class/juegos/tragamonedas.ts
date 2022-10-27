import { Juego } from "../Juego";
export class Tragamonedas extends Juego{
    protected cantidadColumna : number;
    protected cantidadFigura : number;
    protected palanca : boolean;
    protected pagoCasa : number;

    constructor(pNombre:string,pPlata:number,pCredito:number,pMontoApostado:number,pCantColum:number,pCantFig:number,pPalanca:boolean,pPagoCasa:number){
        super(pNombre,pCredito,pMontoApostado)
        this.cantidadColumna = pCantColum;
        this.cantidadFigura = pCantFig;
        this.palanca = pPalanca;
        this.pagoCasa = pPagoCasa;
    }

    public getCantColum(): number {
        return this.cantidadColumna;
    }
    public setCantColum(pCantColum: number): void {
        this.cantidadColumna = pCantColum;
    }
    public getCantFig(): number {
        return this.cantidadFigura;
    }
    public setCantFig(pCantFig: number): void {
        this.cantidadFigura = pCantFig;
    }
    public getPagoCasa(): number {
        return this.pagoCasa;
    }
    public setPagoCasa(pPagoCasa: number): void {
        this.pagoCasa = pPagoCasa;
    }
    public ejecPalanca(palanca:boolean): void{
        this.palanca=palanca;
        if(palanca==true){
            /*definir accion - puede jugar? ejecutar juego?*/
        } else {
            /*definir accion - no puede jugar por falta de credito*/
        }
    }

}