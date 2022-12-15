const nome = prompt(`Qual o seu nome: `);
const nota1 = Number(prompt(`Nota 1: `))
const nota2 = Number(prompt(`Nota 2: `))
const nota3 = Number(prompt(`Nota 3: `))

const media = (nota1+nota2+nota3)/3

if (media < 6) {
    console.log(`${nome}, sua média é ${media} e você está reprovado!`)
} else {
        console.log(`${nome}, sua média é ${media} e você está aprovado!`)
}