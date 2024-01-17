const nome = 'Anna'
const concatenacao = ' Olá ' + nome + ' ! '

{
    const template = ` Olá      ${nome}  ! ` 
    /* Utilizando a craze você consegue fazer a interpolação de variaveis
     * Interporlação é fazer com que seja considerado os espaços, 
     * Tab e que tenha quebra de linha, já a variavel é passada como no PHP ${VARIAVEL}
     * */
    console.log(template)
}

//expressoes...
console.log(`1+1 = ${1 + 1}`)

//funcao
const up = texto => texto.toUpperCase() //to.UpperCase e a funcao que faz o texto ser maisculo

//Chamando a funçao UP declarada com outra funcao dentro sendo a upperCase
console.log (`Ei... ${up('cuidado')} !`)
