var numero = 1

{
    //O let so estára visivel dentro do escopo, pois são diferentes, dessa forma o let consegue entender o escopo
    let numero = 2
    console.log('dentro = ', numero)  
    //Neste cenario ele valida no escopo interno se existe o numero, se não ele procura no escopo maior.
}

console.log('fora = ', numero)