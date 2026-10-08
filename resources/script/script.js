// //  if e else, else if, switch
// // looping
// // array(funções nativas)
// // objeto
// // funções
// // var, let e const
// // dicas:
// // concatenação
// // defer



// condicionais
// let nome = "Melissa"
// let idade = 20
// let maiorDeIdade = true

// // condicional simples 
// self(idade >= 18){
//    console.log("Sou maior de idade");
// }
//    else{
//     console.log("Sou menor de idade");
// }  
// // condicional composta

// if(saldo < 1000){
//    console.log("Fique em casa");
// }
// else if(saldo >= 1000 && saldo < 5000){
//     console.log("Sair pra festa");
// }
// else{
//     console.log("guardar dinheiro");
// }

// let userAge = Number(prompt("digite sua idade:"));
// if (userAge <= 0 ){
//     console.log("Numero inválido");
// }
// else if (userAge > 0 && userAge < 12) {
//     console.log("Você é uma criança");
// }
// else if (userAge >= 12 && userAge < 18 ) {
//     console.log("Você é um adolescente");
// }
// else if (userAge >= 18 && userAge < 60) {
//     console.log ("Você é um(a) adulto(a)");
// }
// else if (userAge >= 60){
//     console.log ("Você é um(a) idoso(a)");
// }


// let userWeight = Number(prompt("Digite o seu peso(em quilogramas)"));
// let userHeight = Number(prompt("Digite a sua altura(em metros)"));

// let imc = weight / (Height * weight)
// imc = imc.toFixed(2);

// if(imc < 18.5){
//     alert("Abaixo do seu peso normal");
// }
// else if(imc >= 18.5 && imc <= 24.9){
//     alert("Peso normal");
// }
// else if(imc >= 25 && imc <= 29.9){
//     alert("Excesso de peso");
// }
// else if(imc >= 30 && imc <= 34.9){
//     alert("Obesidade classe 1");
// }
// else if(imc >= 35 && imc <= 39.9){
//     alert("Obesidade classe 2");
// }
// else if(imc >= 40){
//     alert("Obesidade classe 3");
// }
// else{
//     alert("Digite um valor válido");
// }
 

// let opcao = Number(prompt("Digite uma opção de 1 a 7"));
// switch(opcao){
//     case 1: 
//     console.log("Domingo");
//     break;
//     case 2:
//     console.log("segunda");
//     break;
//     case 3:
//     console.log("terça");
//     break;
//     case 4:
//     console.log("quarta");
//     break;
//     case 5:
//     console.log("quinta");
//     break;
//     case 6:
//     console.log("uinta");
//     break;
//     case 7:
//     console.log("sexta");
//     break;    
// }

let height = Number(prompt("Digite a sua altura(em metros"));
let weight = Number(prompt("Digite o seu peso(em quilogramas"));

let imc = weight / (height * weight);
imc = imc.toFixed(2);



switch(imc) {
    case (imc < 18.5):
        console.log("Abaixo do peso normal.");
        break;


    default:
        console.log("valor inválido");
        break;   
}




