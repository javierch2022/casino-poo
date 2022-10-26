import { Juego } from "../Juego";
export class BlackJack/*extends Juego*/{
    protected cantidadCartas:number;
    /*protected listaCartas:carta(numero,figura)[]; <--- no se definio carta*/
    protected cantidadApuesta:number;
    protected resultado:string;

    constructor(/*pNombre:string,pPlata:number,pCredito:number,pMontoApostado:number,*/pCantCart:number,/*pListaCartas:carta[],*/pCantApuesta:number,pResultado:string){
        /*super(pNombre,pPlata,pCredito,pMontoApostado)*/
        this.cantidadCartas = pCantCart;
        this.cantidadApuesta = pCantApuesta;
        /*this.listaCartas[] = pListaCartas[]*/
        this.resultado = pResultado;
    };
    public getCantCart(): number {
        return this.cantidadCartas;
    }
    public setCantCart(pCantCart: number): void {
        this.cantidadCartas = pCantCart;
    }
    public getCantidadApuesta(): number {
        return this.cantidadApuesta;
    }
    public setCantApuesta(pCantApuesta: number): void {
        this.cantidadApuesta = pCantApuesta;
    }
    public getResultado(): string {
        return this.resultado;
    }
    public setResultado(pResultado: string): void {
        this.resultado = pResultado;
    }
}