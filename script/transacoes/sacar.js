function botaoSacar(valorSacar){
    if(isNaN(valorSacar)){
        alert("Insira um número.");
    }else{
    if(valorSacar<=0 || conta.saldo<valorSacar){
        alert("Impossível sacar esse valor!");
    } else{
        conta.saldo-=valorSacar;
        localStorage.setItem("saldo", conta.saldo);
    }
}
}

document.getElementById("sacar").addEventListener("click", function(event){
    var valorSacar=Number(prompt("Informe o valor que deseja ser sacado:"));
    botaoSacar(valorSacar);
    carregarSaldo();
})