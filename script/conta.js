var nome;
var titulo;
var saldo;
var conta;

function Conta(nome, titulo, saldo){
    this.nome = nome;
    this.titulo = titulo;
    this.saldo = saldo;
}

function carregarSaldo(){
    document.getElementById("saldo").innerHTML = "R$"+Number(conta.saldo);
}

conta = new Conta("Leonardo", "O caba bom", Number(localStorage.getItem("saldo")));

document.getElementById("saldo").innerHTML = "R$"+conta.saldo;
document.getElementById("nome").innerHTML = conta.nome;
document.getElementById("titulo").innerHTML = conta.titulo;