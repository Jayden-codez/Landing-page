 function result() {
    let contratos = document.getElementById("contratos").value;
    let pips = document.getElementById("pontos").value;
    let resultado = contratos * pips;
    document.getElementById("result").textContent = `$${Math.round(resultado * 100) / 100}`;
}

 function result2() {
    let pips = document.getElementById("pontos2").value;
    let stopLoss = document.getElementById("stopLoss").value;
    let resultado2 = stopLoss / pips;
    document.getElementById("result2").textContent =`${Math.round(resultado2 * 100) / 100}`;
}

function result3() {
    let contratos = document.getElementById("contratos2").value;
    let stopLoss = document.getElementById("stopLoss2").value;
    let resultado3 = stopLoss / contratos;
    document.getElementById("result3").textContent = Math.round(resultado3);

}




