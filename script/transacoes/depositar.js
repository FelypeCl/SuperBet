function botaoDepositar(valorDepositado){
    if(isNaN(valorDepositado)){
        alert("Insira um número.")
    }else{
    if(valorDepositado<=0){
        alert("Valor inválido!");
    }else{
        conta.saldo+=valorDepositado;
        localStorage.setItem("saldo", conta.saldo);
    }
    }
}

document.getElementById("depositar").addEventListener("click",function(event){
    var valorDepositado = Number(prompt("Informe o valor:"));
    botaoDepositar(valorDepositado);
    carregarSaldo();
})