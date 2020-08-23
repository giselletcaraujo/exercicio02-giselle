const input = require("readline-sync")

console.log("=== Vamos Descobrir sua media ===")

let input1 = input.question ('primeira nota')

if (typeof parseFloat (input) === 'number')

if (isNaN(parseFloat(input1))) {
    input1 = input.question('Digite sua Nota')
    if (isNaN(input1)) {
        input1 = input.question('Digite um Numero')

    }
}

const input2 = input.question ('segunda nota')
const input3 = input.question ('terceira nota')
const input4 = input.question ('quarta nota')
const input5 = input.question ('quinta nota')
const input6 = input.question ('sexta nota')

const total = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5) + parseFloat(input6)
const media = total / 6

console.log(`==== Seu resultado é: ${media.toFixed(1)} ====`)

if (media >= 7) {
    console.log("Aprovada/o")
} else if (media < 5 ) {
    console.log("Reprovada/o")
} else if (media >= 5 < 7) {
    console.log("Você está em recuperação")
}