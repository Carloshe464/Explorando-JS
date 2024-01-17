//Arrasys em JS são heterogeneas, são flexiveis quanto ao tamanho e ao tipo de dado passado dentro deles.

const valores = ['Carlos', 7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[4])// Caso o elemento buscando no indice não exista, sera retornado undefined
console.log(valores[5])

valores[1] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teset')
console.log(valores)

console.log(valores.pop()) //Remove o ultimo elemento do array e extrai, o ultimo ficado e o nulo
delete valores[0] // Deleta o primeiro indice do Array
console.log(valores)