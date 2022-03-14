document.getElementById('jogo1').addEventListener("click",function(event){
    esconderJogos();
    mostrarDificuldadesJogoDoBicho();
    document.getElementById("jogo1facil").innerHTML = "Fácil: 2.5x <br> <br> 80xp";
    document.getElementById("jogo1medio").innerHTML = "Médio: 5.0x <br> <br> 145xp";
    document.getElementById("jogo1dificil").innerHTML = "Difícil: 10.0x <br> <br> 252xp";
})

document.getElementById('jogo2').addEventListener("click",function(event){
    esconderJogos();
    mostrarDificuldadesMegaSena();
    document.getElementById("jogo2facil").innerHTML = "Fácil: 5.0x <br> <br> 230xp";
    document.getElementById("jogo2medio").innerHTML = "Médio: 50.0x <br> <br> 875xp";
    document.getElementById("jogo2dificil").innerHTML = "Difícil: 300.0x <br> <br> 3250xp";
})

document.getElementById('jogo3').addEventListener("click",function(event){
    esconderJogos();
    mostrarDificuldadesDiaDaSemana();
    document.getElementById("jogo3facil").innerHTML = "Fácil: 1.5x <br> <br> 55xp";
    document.getElementById("jogo3medio").innerHTML = "Médio: 3.0x <br> <br> 185xp";
    document.getElementById("jogo3dificil").innerHTML = "Difícil: 4.5x <br> <br> 322xp";
})

function mostrarDificuldadesJogoDoBicho(){
    document.getElementById('dificuldadeJogoDoBicho').style.display="block";
}

function mostrarDificuldadesMegaSena(){
    document.getElementById('dificuldadeMegaSena').style.display="block";
}

function mostrarDificuldadesDiaDaSemana(){
    document.getElementById('dificuldadeDiaDaSemana').style.display="block";
}

function esconderJogos(){
    document.getElementById('jogo1').style.display="none";
    document.getElementById('jogo2').style.display="none";
    document.getElementById('jogo3').style.display="none";
}

function esconderDificuldades(jogo){
    switch(jogo){
        case 1: 
            document.getElementById('jogo1facil').style.display="none";
            document.getElementById('jogo1medio').style.display="none";
            document.getElementById('jogo1dificil').style.display="none";
            document.getElementById("segundos").style.display="none";
            break;
        case 2: 
            document.getElementById('jogo2facil').style.display="none";
            document.getElementById('jogo2medio').style.display="none";
            document.getElementById('jogo2dificil').style.display="none";
            document.getElementById("segundos").style.display="none";
            break;
            
        case 3: 
            document.getElementById('jogo3facil').style.display="none";
            document.getElementById('jogo3medio').style.display="none";
            document.getElementById('jogo3dificil').style.display="none";
            document.getElementById("segundos").style.display="none";
            break;
        default:
            console.log("Dificuldade inválida");    
    }
}

function solicitarValorDeAposta(){
    document.getElementById("solicitarValorDaAposta").style.display="block";
}