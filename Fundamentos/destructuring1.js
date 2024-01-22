const pessoa  = {
    nome: 'Bernardo_teste',
    idade: 24,
    endereco: {
        logradouro: 'Rua da Aguia',
        numero: 56,
        bairro: 'Serrao',
        cidade: 'Belo Horizonte',
        estado: 'Minas Gerais'
        },
    peso: 78,
    altura: 1.78
}

const { nome,idade} = pessoa

console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)