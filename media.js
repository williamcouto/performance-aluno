function CalcMedia(){
    var nome = document.getElementById('user_name')
    var nota_1 = Number(document.getElementById('num1').value)
    var nota_2 = Number(document.getElementById('num2').value)
    var nota_3 = Number(document.getElementById('num3').value)
    var nota_4 = Number(document.getElementById('num4').value)
    var media = (nota_1 + nota_2 + nota_3 + nota_4) / 4
    var resultado = document.getElementById('res')

    resultado.innerHTML = `A média do aluno foi ${media}`
    if(media >= 7){
        resultado.innerHTML = 'ALUNO APROVADO'
        resultado.style.backgroundColor = "#43A047"
    }
    else if(media >= 5 && media < 7){
        resultado.innerHTML = 'ALUNO EM RECUPERAÇÃO'
        resultado.style.backgroundColor = "#FF9100" 
    }
    else{
        resultado.innerHTML = 'ALUNO REPROVADO'
        resultado.style.backgroundColor = "#F5180E"
    }
}