let isAtivo = false
console.log(isAtivo)

{
    isAtivo = true
    console.log(isAtivo)
    {
        isAtivo = 2
        console.log(!!isAtivo) 
        /*EXPLICAÇÃO ! E DO !!
        *Maneira correta de realizar a conversão para boleano. a ! siginifica o NÂO.
        *Sendo passado somente ! será negado uma vez só, caso passe !! o valor será considerado como true
        *console.log(isAtivo) // Vai me retornar o valor numerico, não o boleano, pois não converti.
        */
       {
        console.log("Os verdadeiros....")
        console.log(!!3)
        console.log(!!-1)
        console.log(!! ' ')
        console.log(!! [])
        console.log(!!{})
        console.log(!!Infinity)
        console.log(!!(isAtivo = true)) 
        /*Não está verificando se a atribuição deu certo ou não.
        *caso surja duvidas, consulta o block do notion no link abaixo
        *https://www.notion.so/Explica-o-JS-50356f3cc93a48239bed805a597480f9
            */ 
       }

    }
}


{
    console.log('os falsos....')
    console.log(!!0)
    console.log(!!'')
    console.log(!!null)
    console.log(!!NaN)
    console.log(!!undefined)
    console.log(!!(isAtivo = false))

    console.log('para finalizar.....')
    console.log(!!('' || null || 0 || ' '))
    // || siginifica Ou então seria string vazia ou nulo ou 0 ou espaço, sendo retornado o 1° valor true
}

{
    //Retornando um valor padrão na variavel
    let nome = 'Carlos'
    console.log(nome || 'Desconhecido')
    //Neste exemplo, ele valida se tem algo preenchido em nome, se não retorna desconhecido se  sm retorna o preencimento.
}