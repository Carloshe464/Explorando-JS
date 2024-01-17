
{
    console.log( 7 / 0)
    // Estranho retornar o tipo infinity
}

{
    console.log('10.5' / 2)
   
    /* 
    * Console.log('10,2' / 2) OBS: Caso ele não consiga 
    * Identificar que é um numero, ele retorna NaN.
    * ponto é entendido como numero decimal.
    * 
    *Nesse cenario, ele verifica oque está dentro de ' '
    * é caso seja possivel converter para numero, faz a divisão
    * */ 
}

{
    console.log('Show' * 2) // Não vai funcionar ele não repete
}

{
    console.log(0.1 + 0.7) // Não é o calculo exato
}

{
    n = ((10.26).toString)()
    
    console.log(typeof n)
    // console.log(10.toString()) // Da erro.
}