//REST OPERATOR

// function listaalunos(aluno1, aluno2, aluno3, aluno4){
//     console.log("sejam benvindos alunos!!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }
function listaalunos(...alunos){
    console.log("sejam benvindos alunos!!");
    console.log(alunos)
}

listaalunos("Adamastor","Benevides","Cremilda","Demerval");




//outro EXEMPLO - sortear números em uma lista de numeros primos
function sorteadorNumeros(...numeros){
    console.log(numeros);
    const numeroSorteado = Math.floor (Math.random()*numeros.length);
    
    console.log(` A posição do numero sorteado ${numeroSorteado}`);
    console.log(`E o numero primo é ${numeros[numeroSorteado]}`);
}

sorteadorNumeros(2,3,5,7,11,13,17,19)
