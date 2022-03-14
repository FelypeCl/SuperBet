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
                            comecarJogoFacil();
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

function comecarJogoFacil(){
    document.getElementById('solicitarValorDaAposta').style.display="none";
    document.getElementById('diasDaSemana').style.display="block";
    carregarNomesBotao();

    var chute = [];
    valorDaAposta = localStorage.getItem("valorAposta");

    document.getElementById("segunda").addEventListener("click",function(event){
        verificarQntdEscolhas(1,3);
    });
    document.getElementById('terca').addEventListener("click",function(event){
        verificarQntdEscolhas(2,3);
    });
    document.getElementById('quarta').addEventListener("click",function(event){
        verificarQntdEscolhas(3,3);
    });
    document.getElementById('quinta').addEventListener("click",function(event){
        verificarQntdEscolhas(4,3);
    });
    document.getElementById('sexta').addEventListener("click",function(event){
        verificarQntdEscolhas(5,3);
    });
    document.getElementById('sabado').addEventListener("click",function(event){
        verificarQntdEscolhas(6,3);
    });
    document.getElementById('domingo').addEventListener("click",function(event){
        verificarQntdEscolhas(7,3);
    });

    var diaVencedor = 3;
    
    document.getElementById("comecarAposta").addEventListener("click", function(event){
        if(true){
            alert("Parabéns! Você ganhou!!");
            if(chute[0] == diaVencedor){
                console.log("Segunda ganhou")
            } if(chute[1] == diaVencedor){
                console.log("Terca ganhou")
            } if(chute[2] == diaVencedor){
                console.log("Quarta ganhou")
            }
            conta.saldo+=valorDaAposta*1.5;
            carregarSaldo();
            console.log(conta.saldo);
            //diaVencedor = inteiroAleatorio(1,7);   
        }else{
            alert("Você perdeu. Mais sorte na próxima vez.");
            conta.saldo-=valorDaAposta;
            carregarSaldo();
            console.log(conta.saldo);
            //diaVencedor = inteiroAleatorio(1,7);
        }
    });

    function verificarQntdEscolhas(valorChute,num){
        if(chute.length < num){
            if(chute.includes(valorChute)){
                console.log("Você já apostou esse número");
            } else {
                chute.push(valorChute);
                for(i=0; i < 3; ++i){
                    console.log("Escolha: "+chute[i]);
                }
            }
        } else {
            console.log("Você já gastou todas suas tentativas");
        }
    }

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