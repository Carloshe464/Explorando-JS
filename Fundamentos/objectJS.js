const produto = {}

produto.nome = 'Esse nome foi criado dinamicamente, dentro do objeto'
produto.preco = 1200
produto ['Desconto_legal'] = 0.40 // evitar atributos com espaço

console.log(produto)
console.log(produto.nome)
console.log(produto.preco)

//pode ser feito no modelo literal, pois acima estamos criando o objeto vazio
//E depois atribuindo eles os valores. De maneira literal vc faz igual ao exemplo abaixo

const prod1 = {
    nome: 'Carlos',
    idade: 23,
    sexo: 'Homem'
}

/*TRANSFORMANDO EM JSON.
*
*'{"nome":"Carlos", "idade": 23, "sexo":"Homen"}'
* Neste cenario seria transformado em JSON 
*/

console.log(prod1)
console.log('Meu nome é ' + prod1.nome + ' Tenho ' + prod1.idade + ' idade, é sou do genero ' + prod1.sexo) 