function atividade01(){
    var numero = [];
    let paragrafo1 = document.getElementById("result1");

    for (var i = 0; i < 2; i++) numero[i] = prompt("Informe um número: ");
    paragrafo1.innerHTML = `Os números em ordem crescente são: ${numero.sort(function(a, b){return a-b})}`;
}

function atividade02 (){
    var altura = document.getElementById("altura").value;
    var genero = document.getElementById("genero").value;
    let paragrafo2 = document.getElementById("result2");

    if(altura == "" || genero == 0){
        paragrafo2.innerHTML = `Preencha todos os campos!`;
    }
    else if(genero == 1 ){
        paragrafo2.innerHTML = `O seu peso ideal é ${((62.1 * altura) - 44.7).toFixed(2)}kg.`;
    } else{
        paragrafo2.innerHTML= `O seu peso ideal é ${((72.7 * altura) - 58).toFixed(2)}kg.`;
    }

}

function atividade03(){
    var menor;
    var first = true;
    let paragrafo3 = document.getElementById("result3");

    for (var i = 0; i < 3; i++){
        var resultado = prompt("Digite um número: ");

        if (first){
            menor = resultado;
        } else if(menor > resultado){
            menor = resultado;
        }
        first = false;
    }
    paragrafo3.innerHTML = `O menor número informado foi: ${menor}`;
}

function atividade04() {
    var numInt3 = document.getElementById("numInt3").value;
    let paragrafo4 = document.getElementById("result4");

    if (numInt3 % 2 == 0) {
        paragrafo4.innerHTML = `Esse número é par!`
    } else if (numInt3 < 0) {
        paragrafo4.innerHTML = `O valor absoluto desse número é: ${Math.abs(numInt3)}`
    } else {
        paragrafo4.innerHTML = `Esse número é impar!`
    }
}

function atividade05() {
    var numInt = document.getElementById("numInt").value;
    let paragrafo5 = document.getElementById("result5");
    console.log(numInt);
    if (numInt % 2 == 0 && numInt % 3 == 0) {
        paragrafo5.innerHTML = `Esse número é divisivel por 2 e por 3.`;
    } else {
        paragrafo5.innerHTML = `Esse número não é divisivel por 2 e por 3.`;
    }
}

function atividade06() {
    var numInt2 = document.getElementById("numInt2").value;
    let paragrafo6 = document.getElementById("result6");
    console.log(numInt2);
    if (numInt2 % 7 == 0 ) {
        paragrafo6.innerHTML = `Esse número é divisivel 7.`;
    } else if(numInt2 % 2 == 0) {
        paragrafo6.innerHTML = `Esse número é divisivel por 2.`;
    } else {
        paragrafo6.innerHTML = `Esse número não divisivel por nenhum dos dois.`;
    }
}

function atividade07(){
    var dia;
    var numSem = +document.getElementById("numero").value;

    switch (numSem) {
        case 1:
            dia = "Domingo";
        break;

        case 2:
            dia = "Segunda-feira";
        break;
        
        case 3:
            dia = "Terça-feira";
        break;

        case 4:
            dia = "Quarta-feira";
        break;

        case 5:
            dia = "Quinta-feira";
        break;

        case 6:
            dia = "Sexta-feira";
        break;

        case 7:
            dia = "Sábado";
    }
    document.getElementById("result7").innerHTML = `O dia é ` + dia;
}
    
function atividade08(){
    var contador = 0;
    var resultCont = 0;
    let paragrafo8 = document.getElementById("result8");
    
    for (contador = 0; contador <= 20; contador+=2){
        if (contador % 2 == 0) {
            paragrafo8.innerHTML = `${resultCont += contador}, `; 
        }
        paragrafo8.innerHTML = `O resultado da somatória é ${resultCont}`
    }
}

function atividade09(){
    var num = 2;
    var paragrafo9 = document.getElementById('result9');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
    tabuada += num + " x " + count + " = " + num*count+"<br/>";
    paragrafo9.innerHTML = tabuada;
}

function atividade10(){
    var fatorial = document.getElementById("fatorial10").value;
    var resultado = fatorial;
    var first = fatorial -1;
    
    for (var i = first; i > 1; i--){
        resultado *= i;
    }
    
    document.getElementById("result10").innerHTML = `O fatorial é: ${(resultado)}`;

}








