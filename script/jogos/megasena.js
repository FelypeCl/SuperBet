function iniciarMegaSena(dificuldade) {
    switch (dificuldade) {
        case 1:
            esconderDificuldades(2);
            solicitarValorDeAposta();
            document.getElementById("apostar").addEventListener("click", function (event) {
                valorDaAposta = document.getElementById("valorAposta").value;
                if (valorDaAposta.length > 0) {
                    if (!isNaN(valorDaAposta)) {
                        if (valorDaAposta <= conta.saldo) {
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
    }
}

function comecarJogoFacilMS(){
    var MsSorteada=[];
    var chute=[];
    console.log("Ok");
}