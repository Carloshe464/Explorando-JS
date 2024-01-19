//Armazenando uma função anonima em uma variavel

const soma = function (a, b) {
    console.log(a + b)
}

soma(2, 3)

//Armazenando uma função arrow em uma variavel. Funçao arrow nada mais é que uma funcao reduzida em uma linha só. 1 dos beneficios

const imprimirSoma = (a, b) => { 
    return a + b
}

console.log(imprimirSoma(2, 3))

//Retorno implicito;
const subtracao = (a,b) => a -b

console.log(subtracao(2, 3))
