export class Colaborador {
    constructor(nome, gestao, projeto, status, email, telefone, dataDeNascimento,
        anoDeIngressoNaFaculdade, curso, anoDeFormatura, RG, CPF, numUSP, endereco) {
        this._nome = nome
        this._gestao = gestao
        this._projeto = projeto
        this._status = status
        this._email = email
        this._telefone = telefone
        this._dataDeNascimento = dataDeNascimento
        this._anoDeIngressoNaFaculdade = anoDeIngressoNaFaculdade
        this._curso = curso
        this._anoDeFormatura = anoDeFormatura
        this._RG = RG
        this._CPF = CPF
        this._numUSP = numUSP 
        this._endereco = endereco
    }

    get nome() {
        return this._nome
    }

    get gestao() {
        return this._gestao
    }

    set gestao(novaGestao) {
        this._gestao = novaGestao
    }

    get projeto() {
        return this._projeto
    }

    set projeto(novaProjeto) {
        this._projeto = novaProjeto
    }

    get status() {
        return this._status
    }

    set status(novoStatus) {
        this._status = novoStatus
    }

    get email() {
        return this._email
    }

    set email(novoEmail) {
        this._email = novoEmail
    }

    get telefone() {
        return this._telefone
    }

    set telefone(novoTelefone){
        this._telefone = novoTelefone
    }

    get dataDeNascimento() {
        return this._dataDeNascimento
    }

    get anoDeIngressoNaFaculdade() {
        return this._anoDeIngressoNaFaculdade
    }

    get curso() {
        return this._curso
    }

    set curso(novoCurso) {
        this._curso = novoCurso
    }

    get anoDeFormatura() {
        return this._anoDeFormatura
    }

    set anoDeFormatura(novoAnoDeFormatura) {
        this._anoDeFormatura = novoAnoDeFormatura
    }

    get RG() {
        return this._RG
    }

    get CPF() {
        return this._CPF
    }

    get numUSP() {
        return this._numUSP
    }

    get endereco() {
        return this._endereco
    }

    set endereco(novoEndereco) {
        this._endereco = novoEndereco
    }
}