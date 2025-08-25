let readline = require('readline-sync')

let nome = readline.question("Digite seu nome: ")
let idade = readline.question("Digite sua idade: ")
let diaNasc = readline.question("Digite o dia que vc nasceu: ")
let mesNasc = readline.question("Digite o mês que vc nasceu: ")
let anoNasc = readline.question("Digite o ano em que vc nasceu: ")
let cpf = readline.question("Digite seu cpf: ")
let email = readline.question("Digite seu email: ")
let telefone = readline.question("Digite seu telefone: ")
let cidade = readline.question("Digite sua cidade: ")
let estado = readline.question("Digite seu estado: ")
let profissao = readline.question("Digite sua profissão: ")
let temAnimal = readline.question("Vc tem animal? (sim/não): ")
let qtdAnimal = ""
let maiorIdade = ""
let calculoIdade = 2025 - parseInt(anoNasc)

if (temAnimal == "sim") {
    qtdAnimal = readline.question("Quantos animais vc tem? ")
} else {
    qtdAnimal = "Não tem animal"
}

if (calculoIdade >= 18) {
    maiorIdade = "É maior de idade"
} else {
    maiorIdade = "É menor de idade"
}

console.log("\n-------------FORMULÁRIO----------------")
console.log(`Nome: ${nome}`)
console.log("Data de Nascimento: " + diaNasc + "/" + mesNasc + "/" + anoNasc)
console.log(`Idade: ${idade}`)
console.log(`CPF: ${cpf}`)
console.log(`Email: ${email}`)
console.log(`Telefone: ${telefone}`)
console.log(`Cidade: ${cidade}`)
console.log(`Estado: ${estado}`)
console.log(`Profissão: ${profissao}`)
console.log(`Se tem animal: ${temAnimal}`)
console.log(`Quantidade de animais: ${qtdAnimal}`)
console.log(`Maior Idade: ${maiorIdade}`)