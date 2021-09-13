import { Colaborador } from "./Colaborador.js"

export const criaColaborador = () => {

    const nomeColaborador = document.getElementById('name').value
    const statusColaborador = document.getElementById('appearance-select').value
    const emailColaborador = document.getElementById('email').value
    const telefoneColaborador = document.getElementById('phone').value
    const dataDeNascimentoColaborador = document.getElementById('date').value
    const anoDeIngressoNaFaculdadeColaborador = document.getElementById('year').value
    const cursoColaborador = document.getElementById('course').value
    const rgColaborador = document.getElementById('rg').value
    const cpfColaborador = document.getElementById('cpf').value
    const numUspColaborador = document.getElementById('num-usp').value
    const enderecoColaborador = document.getElementById('adress').value
    const gestaoColaborador = document.getElementById('gestao').value
    const projetoColaborador = document.getElementById('projeto').value

    const colaborador = new Colaborador(nomeColaborador, statusColaborador, emailColaborador,
        telefoneColaborador, dataDeNascimentoColaborador, anoDeIngressoNaFaculdadeColaborador,
        cursoColaborador, rgColaborador, cpfColaborador, numUspColaborador, enderecoColaborador,
        gestaoColaborador, gestaoColaborador, projetoColaborador)

    console.log(colaborador)
}