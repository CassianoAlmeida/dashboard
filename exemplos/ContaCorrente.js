import {Conta} from "./Conta.js"



export class ContaCorrente extends Conta {
    constructor(numero,agencia, Cliente){
        super(numero,agencia, Cliente)
        ContaCorrente.numeroDeContas++;
    }

    saca(valor){
        let taxa = 1.05;
        this._saca(valor, taxa);
    }
}