 function result() {
    let contratos = document.getElementById("contratos").value;
    let pontos = document.getElementById("pontos").value;
    let resultado = pontos * contratos * 0.633;
    document.getElementById("result").textContent = `$${resultado}`;
}

 function result2() {
    let pontos = document.getElementById("pontos2").value;
    let stopLoss = document.getElementById("stopLoss").value;
    let resultado2 = stopLoss / pontos;
    document.getElementById("result2").textContent = resultado2;
}

function result3() {
    let contratos = document.getElementById("contratos2").value;
    let stopLoss = document.getElementById("stopLoss2").value;
    let resultado3 = stopLoss / contratos;
    document.getElementById("result3").textContent = resultado3;
}