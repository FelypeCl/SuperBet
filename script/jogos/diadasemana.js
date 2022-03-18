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
                        if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                            localStorage.setItem("valorAposta", valorDaAposta);
                            comecarJogoFacilDS();
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
            esconderDificuldades(3);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                            localStorage.setItem("valorAposta", valorDaAposta);
                            comecarJogoMedioDS();
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

        case 3:
            esconderDificuldades(3);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                            localStorage.setItem("valorAposta", valorDaAposta);
                            comecarJogoDificilDS();
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
        default: console.log("Dificuldade inválida");
    }
}

function comecarJogoFacilDS() {
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById('diasDaSemana').style.display = "block";
    carregarNomesBotao();

    var chute = [];
    var diaVencedor = inteiroAleatorio(1, 7);
    valorDaAposta = localStorage.getItem("valorAposta");
    document.getElementById("dias").innerHTML = "Escolha 3 dias:";

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
        if(chute.length == 0 || chute.length == 1 || chute.length == 2) {
            alert("Você precisa selecionar os dias da semana antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos");
            comecarCronometro(3,segundos);
            setTimeout(apostar, 4200);
            document.getElementById("comecarAposta").disabled = "true";
        }
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

function comecarJogoMedioDS() {
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById('diasDaSemana').style.display = "block";
    carregarNomesBotao();

    var chute = [];
    var diaVencedor = inteiroAleatorio(1, 7);
    valorDaAposta = localStorage.getItem("valorAposta");
    document.getElementById("dias").innerHTML = "Escolha 2 dias:";

    document.getElementById("segunda").addEventListener("click", function (event) {
        verificarQntdEscolhas(1, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('terca').addEventListener("click", function (event) {
        verificarQntdEscolhas(2, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quarta').addEventListener("click", function (event) {
        verificarQntdEscolhas(3, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quinta').addEventListener("click", function (event) {
        verificarQntdEscolhas(4, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sexta').addEventListener("click", function (event) {
        verificarQntdEscolhas(5, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sabado').addEventListener("click", function (event) {
        verificarQntdEscolhas(6, 2);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('domingo').addEventListener("click", function (event) {
        verificarQntdEscolhas(7, 2);
        verificarQntdDeDiasDisponiveis();
    });

    document.getElementById("comecarAposta").addEventListener("click", function (event) {
        if(chute.length == 0 || chute.length == 1) {
            alert("Você precisa selecionar os dias da semana antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos");
            comecarCronometro(3,segundos);
            setTimeout(apostar, 4200);
            document.getElementById("comecarAposta").disabled = "true";
        }
    });

    function apostar(){
        if (chute[0] == diaVencedor || chute[1] == diaVencedor) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 3;
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
            document.getElementById("dias").innerHTML = "Escolha 1 dia:";
        } else {
            document.getElementById("dias").innerHTML = "Limite de dias atingido.";
            document.getElementById("dias").style.left = "470px";
        }
    }
}

function comecarJogoDificilDS() {
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById('diasDaSemana').style.display = "block";
    carregarNomesBotao();

    var chute = [];
    var diaVencedor = inteiroAleatorio(1, 7);
    valorDaAposta = localStorage.getItem("valorAposta");
    document.getElementById("dias").innerHTML = "Escolha 1 dia:";

    document.getElementById("segunda").addEventListener("click", function (event) {
        verificarQntdEscolhas(1, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('terca').addEventListener("click", function (event) {
        verificarQntdEscolhas(2, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quarta').addEventListener("click", function (event) {
        verificarQntdEscolhas(3, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('quinta').addEventListener("click", function (event) {
        verificarQntdEscolhas(4, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sexta').addEventListener("click", function (event) {
        verificarQntdEscolhas(5, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('sabado').addEventListener("click", function (event) {
        verificarQntdEscolhas(6, 1);
        verificarQntdDeDiasDisponiveis();
    });
    document.getElementById('domingo').addEventListener("click", function (event) {
        verificarQntdEscolhas(7, 1);
        verificarQntdDeDiasDisponiveis();
    });

    document.getElementById("comecarAposta").addEventListener("click", function (event) {
        if(chute.length == 0) {
            alert("Você precisa selecionar um dia da semana antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos");
            comecarCronometro(3,segundos);
            setTimeout(apostar, 4200);
            document.getElementById("comecarAposta").disabled = "true";
        }
    });

    function apostar(){
        if (chute[0] == diaVencedor) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 4.5;
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