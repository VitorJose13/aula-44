// Criando um novo objeto da classe Promise e atribuindo ao valor da variável "const teste"
const teste = new Promise((resolve, rejeita) => {
                         //parametros para a criação do objeto da classe Promise
    let a = 2+2 
     setTimeout(
        
        () => resolve('Promise resolvida'),
        3000
    )

})

teste.then(
    (res => {
        console.log("RESULTADO: ",res)
    })
)

