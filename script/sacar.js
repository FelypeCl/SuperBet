function botaoSacar(valorSacar){
    if(valorSacar<=0 || conta.saldo<valorSacar){
        alert("Impossível sacar esse valor!");
    } else{
        conta.saldo-=valorSacar;
    }
}

document.getElementById("sacar").addEventListener("click", function(event){
    var valorSacar=Number(prompt("Informe o valor que deseja ser sacado:"));
    botaoSacar(valorSacar);
    carregarSaldo();
})