export class Funcionario {
    constructor(nome, salario, senha) {
        this._nome = nome;
        this._salario = salario;
        this._cpf;
        this._bonificacao = 1;
        this._senha = senha;
    }

    get senha(){
        return this._senha;
    }

}