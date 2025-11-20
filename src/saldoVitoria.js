function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let rank = "";

    if (saldoVitorias < 10) {
        rank = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        rank = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        rank = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        rank = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        rank = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        rank = "Lendário";
    } else if (saldoVitorias > 100) {
        rank = "Imortal";
    }

    return `O jogador de nome **${userName}** tem de saldo de **${saldoVitorias}** vitorias e está no rank **${rank}**`;
}

let userName = "Blitera";
let vitorias = 105;
let derrotas = 5;

let resultado = calcularRank(vitorias, derrotas);

console.log(resultado);