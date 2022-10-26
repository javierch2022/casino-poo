import { Juego } from "../Juego";
export class Ruleta /*extends Juego*/{
    protected numeroTablero:number[];
    protected listaNumerosRojos:number[];
    protected listaNumerosNegros:number[];
    protected listaPrimeraDecena:number[];
    protected listaSegundaDecena:number[];
    protected listaTerceraDecena:number[];
    protected listaPrimeraColumna :number[];
    protected listaSegundaColumna :number[];
    protected listaTercerColumna :number[];
    protected lista1a18 :number[];
    protected lista19a36 :number[];
    protected listaPar :number[];
    protected listaImpan :number[];
    //*protected ubicacionApuesta:Apuesta(ubicacion,monto)[];*//  <--- nunca definimos "apuesta"
    protected pagoCasa : number;

    constructor(/*pNombre:string,pPlata:number,pCredito:number,pMontoApostado:number,*/pNumTab:number,pListNumRoj:number[],pListNumNeg:number[],
    pListPrimDec:number[],pListSegDec:number[],pListTercDec:number[],pListPrimCol:number[],pListSegCol:number[],pListTerCol:number[],
    pList1a18:number[],pList19a36:number[],pListPar:number[],pListImpar:number[],pPagoCasa:number){
        /*super(pNombre,pPlata,pCredito,pMontoApostado)*/
    };
    

}