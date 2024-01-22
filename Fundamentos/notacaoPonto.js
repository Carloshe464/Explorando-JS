console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' 
// Poderia ser dessa forma também. obj2['nome'] = 'Bola2' 

function Obj (nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Executando.....')
    }
}

const obj2 = new Obj ('Celular')
const obj3 = new Obj ('Teste')
console.log(obj2.nome)

obj3.exec()