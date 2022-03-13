function botaoDepositar(valorDepositado){
    if(valorDepositado<=0){
        alert("Valor inválido!");
    }else{
        conta.saldo+=valorDepositado;
    }
}

document.getElementById("depositar").addEventListener("click",function(event){
    var valorDepositado = Number(prompt("Informe o valor:"));
    botaoDepositar(valorDepositado);
    carregarSaldo();
})