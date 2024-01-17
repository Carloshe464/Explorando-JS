let valor // Não iniciadad.

console.log(valor) // é undefined pois ´nao foi iniciado
//console.log(valor2) //Nem declarado foi

valor = null // ausencia de valor, porém ela está inicializada (definida) mas não aponta para nenhum objeto, nem valor
console.log(valor)

//Não é legal definir undefined, deixe a lingugem fazer isso, para 0 uma variavel do tipo referencia, coloque NULL
//console.log(valor.toString())
// CUIDADO para não tentar acessar algo que está null ppois irá dar erro que não pode ler. o indicado e ter um valor padrão atibuido.

const produto = {}
console.log(produto.nome) // não está definido e não vai dar erro, e sim undefined.
console.log(produto)
produto.nome = 'Carlos'
produto.idade = 23
console.log(produto) 
produto.nome = undefined //Evite atribuir de forma explicilita o undefined
console.log(!!produto.nome) //Validando se tem algo realmente dentro do nome
//delete produto.nome (forma correta de atribuir o valor 0 ou nulo)
console.log(produto.nome)

produto.nome = null // informando sem nome ou sem preço
console.log(!!produto.nome) // Se produto.nome está setado então faça tal coisa, nesse trecho ele nao seria setado por estar null