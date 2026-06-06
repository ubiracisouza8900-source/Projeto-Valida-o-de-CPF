     

import promptSync from "prompt-sync";
const prompt = promptSync();
let nome:string=prompt("Digite seu nome: ")

let cpf:string=prompt("Digite seu CPF: ");

cpf= cpf.replace(/\D/g,"");

if(cpf.length !== 11){
    console.log("cpf invalido!");
    
}else{

    let soma1 = 0;
    let peso1 = 10;

    for(let cpf_1= 0; cpf_1 < 9; cpf_1++){
        soma1 += Number(cpf[cpf_1]) * peso1;
        peso1 --;
    }

    let resto1 = soma1 %11;

    let digito1 =
    resto1 < 2 ? 0: 11- resto1;

    let soma2=0;
    let peso2 = 11;

    for(let cpf2 =0; cpf2 < 10; cpf2++){
        soma2 += Number(cpf[cpf2]) * peso2
        peso2--;
    }
     
    let resto2 = soma2 %11;

    let digito2 = 
    resto2 < 2 ? 0: 11 -resto2;
    if(
        digito1 === Number(cpf[9])&&
        digito2 === Number(cpf[10])
    ){
        console.log(`Seja bem vindo seu CPF valido! ${nome}`);
        
    }else{
        console.log(" seu Cpf e invalido!");
        
    }
}




