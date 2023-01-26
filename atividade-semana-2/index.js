idade = Number(prompt("Digite sua idade: "));
tempo = Number(prompt("Digite seu tempo de serviço: "));
salario = Number(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade > 65 || tempo > 30 || (idade > 60 && tempo > 25)) {
  console.log(`Você pode se asentar!`)
  if (tempo > 20) {
    aposentadoria = salario * 0.8
  } else {
    aposentadoria = salario * 0.6
  } 
  if (aposentadoria < 1212) {
    aposentadoria = 1212
  } else if (aposentadoria > 7087.22) {
    aposentadoria = 7087.22
  }
  console.log(`Seu salário de aposentado será: ${aposentadoria}`)
} else {
  console.log(`Você não pode se aposentar!`)
}
