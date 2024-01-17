const escola = "Cod3r"

console.log(escola.charAt(4)) //Retonar o indice 4 da string OBS: Lembra do que sempre inicia em 0.

{
    console.log(escola.charCodeAt(3))
    //Chamando a partir da tabela Unicode. OBS: consulta em:https://symbl.cc/pt/unicode/table/
}

{
    console.log(escola.indexOf('3')) // Verifica se existe o indice 3 na variavel.
}

{
    console.log(escola.substring(1)) // Neste ele irá retornar somente a partir da letra O da varialve.
    console.log(escola.substring(0, 3)) // Já está ele está determinando apos a virgula ate onde ele quer o retorno
}

{
    console.log('Escola '.concat(escola).concat("!")) // So mostrando a funçao concat então podemos utilizar + também.
}

{
    console.log(escola.replace(3, 'e')) // Substituindo o 3 pela letra E com o replace
}

{
    console.log('Ana,Maria,Pedro'.split(','))
    // O .split utiliza o interavel passado para delimitar o espaço do ARRAY 
}
