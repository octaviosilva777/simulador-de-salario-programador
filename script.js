let botao = document.getElementById("botao")
let experiencia = document.getElementById("experiencia")
let pais = document.getElementById("pais")
let linguagem = document.getElementById("linguagem")

botao.addEventListener("click", function() {
   let anosExperiencia = experiencia.value
   console.log(anosExperiencia)
   let paisEscolhido = pais.value
   console.log(paisEscolhido)
   let linguagemEscolhida = linguagem.value
   console.log(linguagemEscolhida)
   let salarioBase = 3000

   if (linguagemEscolhida === "Python") {
    salarioBase = 3000
} else if (linguagemEscolhida === "JavaScript") {
    salarioBase = 4000
} else if (linguagemEscolhida === "Kotlin") {
    salarioBase = 4200
} else if (linguagemEscolhida === "Java") {
    salarioBase = 2800
} else if (linguagemEscolhida === "COBOL") {
    salarioBase = 3800
}
  
     salarioBase = salarioBase + (anosExperiencia * 1000)
    
    let multiplicador
    if(paisEscolhido === "Brasil") multiplicador = 1
    else if(paisEscolhido === "EUA") multiplicador = 2
    else if(paisEscolhido === "Alemanha") multiplicador = 1.5
    else if(paisEscolhido === "Japão") multiplicador = 1.7

    let salarioFinal = salarioBase * multiplicador

    document.getElementById("resultado").innerText = "Salário estimado: R$ " + salarioFinal
})



