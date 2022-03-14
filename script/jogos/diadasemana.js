var valorDaAposta;

function iniciarDiaDaSemana(dificuldade){
    switch(dificuldade){
        case 1:
            esconderDificuldades(3);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function(event){
                valorDaAposta = document.getElementById("valorAposta").value;
                if(valorDaAposta.length > 0){
                    if(!isNaN(valorDaAposta)){
                        if(valorDaAposta <= conta.saldo){
                            localStorage.setItem("valorAposta", valorDaAposta);
                            comecarJogo();
                        } else {
                            valorDaAposta = document.getElementById("valorAposta").value;
                            alert("Saldo insuficiente para aposta!");
                        }
                    } else {
                        valorDaAposta = document.getElementById("valorAposta").value;
                        alert("Insira um valor númerico!");
                    }
                } else {
                    valorDaAposta = document.getElementById("valorAposta").value;
                    alert("Insira um valor para aposta!");
                }
            });
            break;
        case 2:

            break;
                
        case 3:

             break; 
        default: console.log("Dificuldade inválida");
    }
}

function comecarJogo(){
    document.getElementById('solicitarValorDaAposta').style.display="none";
    document.getElementById('diasDaSemana').style.display="block";
    carregarNomesBotao();

    var chute;
    valorDaAposta = localStorage.getItem("valorAposta");

    document.getElementById("segunda").addEventListener("click",function(event){
        chute = 1;
    });
    document.getElementById('terca').addEventListener("click",function(event){
        chute = 2;
    });
    document.getElementById('quarta').addEventListener("click",function(event){
        chute = 3;
    });
    document.getElementById('quinta').addEventListener("click",function(event){
        chute = 4;
    });
    document.getElementById('sexta').addEventListener("click",function(event){
        chute = 5;
    });
    document.getElementById('sabado').addEventListener("click",function(event){
        chute = 6;
    });
    document.getElementById('domingo').addEventListener("click",function(event){
        chute = 7;
    });

    var numero = inteiroAleatorio(1,7);
    var numero2 = inteiroAleatorio(1,7);
    var numero3 = inteiroAleatorio(1,7);
    //var chutado = [numero, numero2, numero3];

    document.getElementById("comecarAposta").addEventListener("click", function(event){
        if(chute==numero){
            alert("Parabéns! Você ganhou!!");
            conta.saldo+=valorDaAposta*2;
            carregarSaldo();
            console.log(conta.saldo);
            numero = inteiroAleatorio(1,7);   
        }else{
            alert("Você perdeu. Mais sorte na próxima vez.");
            conta.saldo-=valorDaAposta;
            carregarSaldo();
            console.log(conta.saldo);
            numero = inteiroAleatorio(1,7);
        }
    });

    /*
    Dificil

    var numero = inteiroAleatorio(1,7);

    document.getElementById("comecarAposta").addEventListener("click", function(event){
        if(chute==numero){
            alert("Parabéns! Você ganhou!!");
            conta.saldo+=valorDaAposta*1.5;
            carregarSaldo();
            console.log(conta.saldo);
            numero = inteiroAleatorio(1,7);   
        }else{
            alert("Você perdeu. Mais sorte na próxima vez.");
            conta.saldo-=valorDaAposta;
            carregarSaldo();
            console.log(conta.saldo);
            numero = inteiroAleatorio(1,7);
        }
    })
    */
}

function carregarNomesBotao(){
    document.getElementById('segunda').value = "SEGUNDA-FEIRA";
    document.getElementById('terca').value = "TERÇA-FEIRA";
    document.getElementById('quarta').value = "QUARTA-FEIRA";
    document.getElementById('quinta').value = "QUINTA-FEIRA";
    document.getElementById('sexta').value = "SEXTA-FEIRA";
    document.getElementById('sabado').value = "SÁBADO";
    document.getElementById('domingo').value = "DOMINGO";
    document.getElementById('comecarAposta').value = "APOSTAR";
}

function inteiroAleatorio(min,max){
    return Math.round(Math.random() * (max - min + 1));
}