var valorDaAposta;

function iniciarDiaDaSemana(dificuldade) {
    switch (dificuldade) {
        case 1:
            esconderDificuldades(3);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo) {
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

function comecarJogoFacil() {
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById('diasDaSemana').style.display = "block";
    carregarNomesBotao();

    var chute = [];
    var diaVencedor = inteiroAleatorio(1, 7);
    valorDaAposta = localStorage.getItem("valorAposta");

    document.getElementById("segunda").addEventListener("click", function (event) {
        verificarQntdEscolhas(1, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('terca').addEventListener("click", function (event) {
        verificarQntdEscolhas(2, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quarta').addEventListener("click", function (event) {
        verificarQntdEscolhas(3, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quinta').addEventListener("click", function (event) {
        verificarQntdEscolhas(4, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sexta').addEventListener("click", function (event) {
        verificarQntdEscolhas(5, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sabado').addEventListener("click", function (event) {
        verificarQntdEscolhas(6, 3);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('domingo').addEventListener("click", function (event) {
        verificarQntdEscolhas(7, 3);
        verificarQntdDeDiasDisponiveis();
    });

    document.getElementById("comecarAposta").addEventListener("click", function (event) {
        var segundos = document.getElementById("segundos");
        comecarCronometro(3,segundos);
        setTimeout(apostar, 4200);
    });

    function apostar(){
        if (chute[0] == diaVencedor || chute[1] == diaVencedor || chute[2] == diaVencedor) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 1.5;
            localStorage.setItem("saldo", conta.saldo);
            carregarSaldo();
            document.location.reload(true);
        } else {
            alert("Você perdeu. Mais sorte na próxima vez.");
            conta.saldo -= valorDaAposta;
            localStorage.setItem("saldo", conta.saldo);
            carregarSaldo();
            document.location.reload(true);
        }
    }

    function verificarQntdEscolhas(valorChute, num) {
        if (chute.length < num) {
            if (chute.includes(valorChute)) {
                alert("Você já escolheu esse dia.");
            } else {
                chute.push(valorChute);
            }
        } else {
            alert("Você já selecionou todos os dias disponíveis.");
        }
    }

    function verificarQntdDeDiasDisponiveis(){
        if(chute.length == 1){
            document.getElementById("dias").innerHTML = "Escolha 2 dias:";
        } else if(chute.length == 2){
            document.getElementById("dias").innerHTML = "Escolha 1 dia:";
        } else {
            document.getElementById("dias").innerHTML = "Limite de dias atingido.";
            document.getElementById("dias").style.left = "470px";
        }
    }
}

function comecarCronometro(duracao, display){
    document.getElementById("segundos").style.display="block";
    var timer = duracao, segundos;

    setInterval(function(){

        segundos = parseInt(timer % 60);
        segundos = segundos < 10 ? "0" + segundos : segundos;
        display.innerHTML = "Apostando em "+segundos+"..";

        if(--timer < 0){
            timer = duracao;
        }

        if(duracao = 0)
            return;

    },1000);
}

function carregarNomesBotao() {
    document.getElementById('segunda').value = "SEGUNDA-FEIRA";
    document.getElementById('terca').value = "TERÇA-FEIRA";
    document.getElementById('quarta').value = "QUARTA-FEIRA";
    document.getElementById('quinta').value = "QUINTA-FEIRA";
    document.getElementById('sexta').value = "SEXTA-FEIRA";
    document.getElementById('sabado').value = "SÁBADO";
    document.getElementById('domingo').value = "DOMINGO";
    document.getElementById('comecarAposta').value = "APOSTAR";
}

function inteiroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1));
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