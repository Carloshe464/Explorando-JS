{
    {
        {
            {
                var sera = 'Sera????'
            }
        }
    }    
}

//A variavel var dentro de um bloco de codigo, ela será visivel em todo o codigo, apenas quando for uma funcao que nao

console.log(sera)

function teste(){

    var local = 123
    console.log(local)
}

// se você criar uma variavel fora de função, ela será global e dessa forma será modificada
teste()
