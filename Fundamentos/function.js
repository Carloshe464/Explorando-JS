function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 10, 5, 7)
imprimirSoma()

//Essa função não retorna nada, por isso podemos chamar ela direto, passando os parametros.

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma(2, 3, 5, 6))
console.log(soma())
//Já está função possui um retorno, sendo o resultado da somatorio, neste caso devemos chamar ela no console.log
//Pois caso chame direto ele não irá mostrar nada, pois tem um retorno 