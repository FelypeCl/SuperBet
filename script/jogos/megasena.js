function iniciarMegaSena(dificuldade) {
    switch (dificuldade) {
        case 1:
            esconderDificuldades(2);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                            localStorage.setItem("valorAposta", valorDaAposta);
                            document.getElementById("MSgerador").style.display="block";
                            document.getElementById("gerador").value="Gerar a raspadinha premiada";
                            document.getElementById("MSgerador").addEventListener("click", function (event){
                                comecarJogoFacilMS();
                            });
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
            esconderDificuldades(2);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                            localStorage.setItem("valorAposta", valorDaAposta);
                            document.getElementById("MSgerador").style.display="block";
                            document.getElementById("gerador").value="Gerar a raspadinha premiada";
                            document.getElementById("MSgerador").addEventListener("click", function (event){
                                comecarJogoMedioMS();
                            });
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
                esconderDificuldades(2);
                solicitarValorDeAposta();
                document.getElementById("apostar").addEventListener("click", function (event) {
                    valorDaAposta = document.getElementById("valorAposta").value;
                    if (valorDaAposta.length > 0) {
                        if (!isNaN(valorDaAposta)) {
                            if (valorDaAposta <= conta.saldo && valorDaAposta != 0) {
                                localStorage.setItem("valorAposta", valorDaAposta);
                                document.getElementById("MSgerador").style.display="block";
                                document.getElementById("gerador").value="Gerar a raspadinha premiada";
                                document.getElementById("MSgerador").addEventListener("click", function (event){
                                    comecarJogoDificilMS();
                                });
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
    }
}

function comecarJogoFacilMS(){
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById("MSgerador").style.display="none";
    document.getElementById("megaSenaBotes").style.display="block";

    var msSorteada=[];
    var chute=[];

    function gerarNumerosDaMs(){
        var numeroAleatorio = inteiroAleatorio(1,10);
        if(msSorteada.includes(numeroAleatorio)){
            gerarNumerosDaMs();
        } else {
            msSorteada.push(numeroAleatorio);
        }
    }

    function iniciarGeradorNumerosDaMs(){
       for(var i = 0; i <= 6; ++i){
            gerarNumerosDaMs();
       }
    }

    function coletarChutes(valorChute, num) {
        if (chute.length < num) {
            if (chute.includes(valorChute)) {
                alert("Você já escolheu esse número.");
            } else {
                chute.push(valorChute);
                if(chute.length == 1){
                    raspadinha.style.left = "510px";
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " ";
                } else if (chute.length == 2){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " ";
                }
            }
        } else {
            alert("Você já selecionou todos os números disponíveis.");
        }
    }

    iniciarGeradorNumerosDaMs();
    var raspadinha = document.getElementById("raspadinha");

    var numero1 = document.getElementById("numero1");
    numero1.value = msSorteada[0];
    numero1.addEventListener("click",function(event){
        coletarChutes(msSorteada[0], 2);
    });

    var numero2 = document.getElementById("numero2");
    numero2.value = msSorteada[1];
    numero2.addEventListener("click",function(event){
        coletarChutes(msSorteada[1], 2);
    });

    var numero3 = document.getElementById("numero3");
    numero3.value = msSorteada[2];
    numero3.addEventListener("click",function(event){
        coletarChutes(msSorteada[2], 2);
    });

    var numero4 = document.getElementById("numero4");
    numero4.value = msSorteada[3];
    numero4.addEventListener("click",function(event){
        coletarChutes(msSorteada[3], 2);
    });

    var numero5 = document.getElementById("numero5");
    numero5.value = msSorteada[4];
    numero5.addEventListener("click",function(event){
        coletarChutes(msSorteada[4], 2);
    });

    var numero6 = document.getElementById("numero6");
    numero6.value = msSorteada[5];
    numero6.addEventListener("click",function(event){
        coletarChutes(msSorteada[5], 2);
    });

    var apostar = document.getElementById("apostarRaspadinha");
    apostar.value = "Apostar";
    apostar.addEventListener("click",function(event){
        if(chute.length == 0) {
            alert("Você precisa selecionar os números antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos2");
            comecarCronometroMs(3,segundos);
            setTimeout(apostarMs, 4200);
            document.getElementById("apostarRaspadinha").disabled = "true";
        }
    });

    function apostarMs(){
        if (chute[0] == msSorteada[0] && chute[1] == msSorteada[1]) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 5;
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
}

function comecarJogoMedioMS(){
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById("MSgerador").style.display="none";
    document.getElementById("megaSenaBotes").style.display="block";

    var msSorteada=[];
    var chute=[];

    function gerarNumerosDaMs(){
        var numeroAleatorio = inteiroAleatorio(1,10);
        if(msSorteada.includes(numeroAleatorio)){
            gerarNumerosDaMs();
        } else {
            msSorteada.push(numeroAleatorio);
        }
    }

    function iniciarGeradorNumerosDaMs(){
       for(var i = 0; i <= 6; ++i){
            gerarNumerosDaMs();
       }
    }

    function coletarChutes(valorChute, num) {
        if (chute.length < num) {
            if (chute.includes(valorChute)) {
                alert("Você já escolheu esse número.");
            } else {
                chute.push(valorChute);
                if(chute.length == 1){
                    raspadinha.style.left = "510px";
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " ";
                } else if (chute.length == 2){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " ";
                } else if (chute.length == 3){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " " + chute[2] + " ";
                }
            }
        } else {
            alert("Você já selecionou todos os números disponíveis.");
        }
    }

    iniciarGeradorNumerosDaMs();
    var raspadinha = document.getElementById("raspadinha");

    var numero1 = document.getElementById("numero1");
    numero1.value = msSorteada[0];
    numero1.addEventListener("click",function(event){
        coletarChutes(msSorteada[0], 3);
    });

    var numero2 = document.getElementById("numero2");
    numero2.value = msSorteada[1];
    numero2.addEventListener("click",function(event){
        coletarChutes(msSorteada[1], 3);
    });

    var numero3 = document.getElementById("numero3");
    numero3.value = msSorteada[2];
    numero3.addEventListener("click",function(event){
        coletarChutes(msSorteada[2], 3);
    });

    var numero4 = document.getElementById("numero4");
    numero4.value = msSorteada[3];
    numero4.addEventListener("click",function(event){
        coletarChutes(msSorteada[3], 3);
    });

    var numero5 = document.getElementById("numero5");
    numero5.value = msSorteada[4];
    numero5.addEventListener("click",function(event){
        coletarChutes(msSorteada[4], 3);
    });

    var numero6 = document.getElementById("numero6");
    numero6.value = msSorteada[5];
    numero6.addEventListener("click",function(event){
        coletarChutes(msSorteada[5], 3);
    });

    var apostar = document.getElementById("apostarRaspadinha");
    apostar.value = "Apostar";
    apostar.addEventListener("click",function(event){
        if(chute.length == 0) {
            alert("Você precisa selecionar os números antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos2");
            comecarCronometroMs(3,segundos);
            setTimeout(apostarMs, 4200);
            document.getElementById("apostarRaspadinha").disabled = "true";
        }
    });

    function apostarMs(){
        if (chute[0] == msSorteada[0] && chute[1] == msSorteada[1] && chute[2] == msSorteada[2]) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 50;
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
}

function comecarJogoDificilMS(){
    document.getElementById('solicitarValorDaAposta').style.display = "none";
    document.getElementById("MSgerador").style.display="none";
    document.getElementById("megaSenaBotes").style.display="block";

    var msSorteada=[];
    var chute=[];

    function gerarNumerosDaMs(){
        var numeroAleatorio = inteiroAleatorio(1,10);
        if(msSorteada.includes(numeroAleatorio)){
            gerarNumerosDaMs();
        } else {
            msSorteada.push(numeroAleatorio);
        }
    }

    function iniciarGeradorNumerosDaMs(){
       for(var i = 0; i <= 6; ++i){
            gerarNumerosDaMs();
       }
    }

    function coletarChutes(valorChute, num) {
        if (chute.length < num) {
            if (chute.includes(valorChute)) {
                alert("Você já escolheu esse número.");
            } else {
                chute.push(valorChute);
                if(chute.length == 1){
                    raspadinha.style.left = "510px";
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " ";
                } else if (chute.length == 2){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " ";
                } else if (chute.length == 3){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " " + chute[2] + " ";
                } else if (chute.length == 4){
                    raspadinha.innerHTML = "Seu código: " + chute[0] + " " + chute[1] + " " + chute[2] + " " + chute[3] + " ";
                }
            }
        } else {
            alert("Você já selecionou todos os números disponíveis.");
        }
    }

    iniciarGeradorNumerosDaMs();
    var raspadinha = document.getElementById("raspadinha");

    var numero1 = document.getElementById("numero1");
    numero1.value = msSorteada[0];
    numero1.addEventListener("click",function(event){
        coletarChutes(msSorteada[0], 4);
    });

    var numero2 = document.getElementById("numero2");
    numero2.value = msSorteada[1];
    numero2.addEventListener("click",function(event){
        coletarChutes(msSorteada[1], 4);
    });

    var numero3 = document.getElementById("numero3");
    numero3.value = msSorteada[2];
    numero3.addEventListener("click",function(event){
        coletarChutes(msSorteada[2], 4);
    });

    var numero4 = document.getElementById("numero4");
    numero4.value = msSorteada[3];
    numero4.addEventListener("click",function(event){
        coletarChutes(msSorteada[3], 4);
    });

    var numero5 = document.getElementById("numero5");
    numero5.value = msSorteada[4];
    numero5.addEventListener("click",function(event){
        coletarChutes(msSorteada[4], 4);
    });

    var numero6 = document.getElementById("numero6");
    numero6.value = msSorteada[5];
    numero6.addEventListener("click",function(event){
        coletarChutes(msSorteada[5], 4);
    });

    var apostar = document.getElementById("apostarRaspadinha");
    apostar.value = "Apostar";
    apostar.addEventListener("click",function(event){
        if(chute.length == 0) {
            alert("Você precisa selecionar os números antes de apostar.");
        } else {
            var segundos = document.getElementById("segundos2");
            comecarCronometroMs(3,segundos);
            setTimeout(apostarMs, 4200);
            document.getElementById("apostarRaspadinha").disabled = "true";
        }
    });

    function apostarMs(){
        if (chute[0] == msSorteada[0] && chute[1] == msSorteada[1] && chute[2] == msSorteada[2] && chute[3] == msSorteada[3]) {
            alert("Parabéns! Você ganhou!!");
            conta.saldo += valorDaAposta * 300;
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
}

function comecarCronometroMs(duracao, display){
    document.getElementById("segundos2").style.display="block";
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