import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";


const cassiano = new Cliente("Cassiano", "Cavalo12");
const guilherme = new Gerente("Guilherme", 17000, 33333333);
const willian = new Diretor("Willian", 34000, 12345679);

const auntentica = new SistemaAutenticacao("Cavalo12");

console.log(auntentica.verificaSenha(cassiano));
console.log(auntentica.verificaSenha(guilherme));
console.log(auntentica.verificaSenha(willian));