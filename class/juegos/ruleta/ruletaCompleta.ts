var readlineSync = require('readline-sync');
var colors = require('colors/safe');


import { Juego } from "../../juego";
import { Casino } from "../../casino";
import { Jugador } from "../../jugador";

/*export class ApuestaRuleta {
    private ubicacion: string;
    private creditoApuesta: number;
    private numeroApostado: number;
"par" // "PAR"

    constructor(ubicacion: string, pCreditoApuesta: number, pNumeroApostado: number) {
        this.ubicacion = ubicacion;
        this.creditoApuesta = pCreditoApuesta;
        this.numeroApostado = pNumeroApostado;
    }
    public getUbicacion(): string {
        return this.ubicacion;
    }
    public setUbicacion(ubicacion: string): void {
        this.ubicacion = ubicacion;
    }
    public getCreditoApuesta(): number {
        return this.creditoApuesta;
    }
    public setCreditoApuesta(pCreditoApuesta: number): void {
        this.creditoApuesta = pCreditoApuesta;
    }
    public getNumeroApostado(): number {
        return this.numeroApostado;
    }
    public setNumeroApostado(pNumeroApostado: number): void {
        this.numeroApostado = pNumeroApostado;
    }

}*/
export class Ruleta extends Juego {
    /*protected numeroTablero: number[];
    protected listaNumerosRojos: number[];
    protected listaNumerosNegros: number[];
    protected listaPrimeraDocena: number[];
    protected listaSegundaDocena: number[];
    protected listaTerceraDocena: number[];
    protected listaPrimeraColumna: number[];
    protected listaSegundaColumna: number[];
    protected listaTercerColumna: number[];
    protected lista1a18: number[];
    protected lista19a36: number[];
    protected listaPar: number[];
    protected listaImpar: number[];
    protected ubicacionApuesta: ApuestaRuleta[];*/


    constructor(pNombre: string, pCredito: number, pPagoCasa: number) {
        super(pNombre, pCredito, pPagoCasa);

        /*this.numeroTablero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
       this.listaNumerosRojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.listaNumerosNegros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        this.listaPrimeraDocena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.listaSegundaDocena = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        this.listaTerceraDocena = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.listaPrimeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 32, 34];
        this.listaSegundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        this.listaTercerColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        this.lista1a18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        this.lista19a36 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.listaPar = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
        this.listaImpar = [1, 3, 5, 7, 9, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
        this.ubicacionApuesta = pUbicacionApuesta;*/
    }


    //---get &  set---//


    /* public getNumeroTablero(): number[] {
         return this.numeroTablero;
     }
     public setNumeroTablero(pNumeroTablero: number[]): void {
         this.numeroTablero = pNumeroTablero;
     }
     public getListaNumerosRojos(): number[] {
         return this.listaNumerosRojos;
     }
     public setListaNumerosRojos(pListaNumerosRojos: number[]): void {
         this.listaNumerosRojos = pListaNumerosRojos;
     }
     public getListaNumerosNegros(): number[] {
         return this.listaNumerosNegros;
     }
     public setListaNumerosNegros(pListaNumerosNegros: number[]): void {
         this.listaNumerosNegros = pListaNumerosNegros;
     }
     public getListaPrimeraDocena(): number[] {
         return this.listaPrimeraDocena;
     }
     public setListaPrimeraDocena(pListaPrimeraDecena: number[]): void {
         this.listaPrimeraDocena = pListaPrimeraDecena;
     }
     public getListaSegundaDocena(): number[] {
         return this.listaSegundaDocena;
     }
     public setListaSegundaDocena(pListaSegundaDecena: number[]): void {
         this.listaSegundaDocena = pListaSegundaDecena;
     }
     public getListaTerceraDocena(): number[] {
         return this.listaTerceraDocena;
     }
     public setListaTerceraDocena(pListaTerceraDecena: number[]): void {
         this.listaTerceraDocena = pListaTerceraDecena;
     }
     public getListaPrimeraColumna(): number[] {
         return this.listaPrimeraColumna;
     }
     public setListaPrimeraColumna(pListaPrimeraColumna: number[]): void {
         this.listaPrimeraColumna = pListaPrimeraColumna;
     }
     public getListaSegundaColumna(): number[] {
         return this.listaSegundaColumna;
     }
     public setListaSegundaColumna(pListaSegundaColumna: number[]): void {
         this.listaSegundaColumna = pListaSegundaColumna;
     }
     public getListaTercerColumna(): number[] {
         return this.listaTercerColumna;
     }
     public setListaTercerColumna(pListaTercerColumna: number[]): void {
         this.listaTercerColumna = pListaTercerColumna;
     }
     public getLista1a18(): number[] {
         return this.lista1a18;
     }
     public setLista1a18(pLista1a18: number[]): void {
         this.lista1a18 = pLista1a18;
     }
     public getLista19a36(): number[] {
         return this.lista19a36;
     }
     public setLista19a36(pLista19a36: number[]): void {
         this.lista19a36 = pLista19a36;
     }
     public getUbicacionApuesta(): ApuestaRuleta[] {
         return this.ubicacionApuesta;
     }
     public setUbicacionApuesta(pUbicacionApuesta: ApuestaRuleta[]): void {
         this.ubicacionApuesta = pUbicacionApuesta;
     }
     public getListaPar(): number[] {
         return this.listaPar;
     }
     public setListaPar(pListaPar: number[]): void {
         this.listaPar = pListaPar;
     }
     public getListaImpar(): number[] {
         return this.listaImpar;
     }
     public setListaImpar(pListaImpar: number[]): void {
         this.listaImpar = pListaImpar;
     }*/

    /*-------------------------------Metodos---------------------------------- */
    /*public apostar(pApuesta: ApuestaRuleta) {
        this.ubicacionApuesta.push(pApuesta);
    }*/

    public girarRuleta(): number {
        return Math.round(Math.random() * (36 - 0) + 0);
    }
    public jugar(pJugador: Jugador): void {
        do {
            console.clear();
            console.log(colors.green("________________________________________________________________"));
            console.log("             Bienvenido a " + this.getNombre());
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("Creditos : " + pJugador.getCredito());
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log("                    Reglas de la Ruleta                  ");
            console.log("");
            console.log("");
            console.log(" En cada partida el crupier lanza una bola sobre la ruleta en");
            console.log(" movimiento. Despues de que la bola gire varias vueltas caera");
            console.log(" sobre una de las casillas numeradas de la ruleta. ");
            console.log(" El objetivo del juego es predecir en que casilla caera la bola.");
            console.log(" El crupier anuncia el inicio de una nueva partida diciendo");
            console.log(" ('hagan juego'), en ese momento las apuestas para la siguiente");
            console.log(" partidaquedan abiertas, los jugadores podran realizar sus ");
            console.log(" apuestas sobre la mesa de juego, hasta que el crupier cierre " );
            console.log(" las apuestas diciendo ('no va mas'). Despues de cerrar las");
            console.log(" apuestas, el crupier lanzara la bola, cuando la bola se detenga");
            console.log(" en alguna de las casillas el crupier anunciara el numero ganador ");
            console.log(" y las apuestas ganadoras, seguidamente procedera a retirar las ");
            console.log(" apuestas perdedoras y a pagar las apuestas ganadoras.");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            console.log("");
            console.log(" Probabilidad de ganar por Par/Impar: 48,6%");
            console.log("");
            console.log(colors.green("________________________________________________________________"));
            
                console.log("                              Croupier: Hagan Juego!");
                console.log(colors.green("________________________________________________________________"));
            if (this.validarCreditos(pJugador)) {
                this.montoApostado = Number(readlineSync.question("cuantos creditos desea apostar?: "));
                let parImpar: number = Number(readlineSync.question("Seleccione 0 para Par o 1 para Impar: "));
                
                console.log("                              Croupier: No va mas!");
                console.log(colors.green("________________________________________________________________"));

                if (this.montoApostado > 0 && this.montoApostado <= pJugador.getCredito()) {
                    let numeroRuleta: number = this.girarRuleta();
                    console.log("");
                    console.log("             Croupier: El numero ganador es » " + numeroRuleta+ " «");
                    console.log(colors.green("________________________________________________________________"));
                    let ruletaParImpar: number = numeroRuleta % 2;
                    if (numeroRuleta === 0) {
                        console.log("");
                        console.log("               Crupier:     » 0 «  no es par ni impar");
                        console.log(colors.green("________________________________________________________________"));
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    }
                    else if (ruletaParImpar === parImpar) { //si es par paga 
                        console.log("");
                        console.log("               Croupier:   Gana el Jugador");
                        console.log(colors.green("________________________________________________________________"));
                        this.pagarApuesta(this.montoApostado, pJugador);
                    } else {
                        console.log("");
                        console.log("               Croupier:   Pierde el Jugador");
                        console.log(colors.green("________________________________________________________________"));
                        this.cobrarApuesta(this.montoApostado, pJugador);
                    }
                    /*if (numeroApostado == pGirarRuleta) {*/
                    //verifico si numeroApostado pertenece a listaNumerosRojos*/
                    /*
                    if (this.getListaNumerosRojos().includes(numeroApostado)) {
                        this.pagarApuesta(this.montoApostado, pJugador);
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a listaNumerosNegros
                    if (this.getListaNumerosNegros().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a primeraDocena
                    if (this.getListaPrimeraDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a segundaDocena
                    if (this.getListaSegundaDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a terceraDocena
                    if (this.getListaTerceraDocena().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a primeraColumna
                    if (this.getListaPrimeraColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a segundaColumna
                    if (this.getListaSegundaColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a tercerColumna
                    if (this.getListaTercerColumna().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a lista1a18
                    if (this.getLista1a18().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                    //verifico si numeroApostado pertenece a lista19a36
                    if (this.getLista19a36().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };*/
                    //verifico si numeroApostado pertenece a listaPar
                    /*if (this.getListaPar().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };*/
                    //verifico si numeroApostado pertenece a listaImpar*/
                    /*if (this.getListaImpar().includes(numeroApostado)) {
                        this.pagarApuesta(creditoApostado * 2)
                    };
                } else {
                    this.cobrarApuesta(creditoApostado);
                }
            }
        }*/
                } else {
                    console.log("su apuesta excede los creditos que tiene");
                }
            } else {
                console.log("No tiene creditos para jugar");
            } 
        } while (Number(readlineSync.question("Seleccion » 1 « para Salir y » 0 « para volver a jugar: ")) === 0);
    }
}