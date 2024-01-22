const carro = {}
carro.ligar = 'Ligando...'
{
    function motor(carro) {
        this.motor = motor
        this.exec = function () {
            console.log('Paraben!!! o seu carro está ligando.')
        }
    }
    {
        function desligar_motor(carro) {
            this.desligar_motor = desligar_motor
            this.exec = function () {
                console.log('O motor está desligado!')
            }
        }

        {
            function acelerar(carro) {
                this.acelerar = acelerar
                this.exec = function () {
                    console.log('Aperte os cintos, o carro está acelerando!!!!')
                }
            }
        
            {
                function diminuir(carro){
                    this.diminuir = diminuir
                    this.exec = function (){
                        console.log('Diminuindo a velocidade do carrinho!!!')
                    }
                } 
                
                {
                    function reduzir_ate_a_faixa_limite(carro){
                        this.reduzir_ate_a_faixa_limite = reduzir_ate_a_faixa_limite
                        this.exec = function(){
                            console.log('A velocidade será reduzida ate o limite da pista!')
                        }
                        
                    }
                }

                
            }
        }
    }

}




const Motor = new motor('Você acaba de entrar no seu carro')
const Velocidade = new acelerar('  ')
const Reduzir = new diminuir ('')
const Reduzir1 = new reduzir_ate_a_faixa_limite('')

Velocidade.exec()
Reduzir.exec()
Reduzir1.exec()