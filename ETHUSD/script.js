 function result() {
    
    let valor = '';

    if (document.getElementById("valor").value === '') {
        valor = 3034.42;
    } else {
        valor = document.getElementById("valor").value;
    }
        
    let porcentagem = document.getElementById("porcentagem").value;
    let contratos = document.getElementById("contratos").value;

    let resultado = (valor / 100) * porcentagem * contratos;
    document.getElementById("result").textContent = `$${Math.round(resultado*100) / 100}`;
}

 function result2() {
    
    let valor2 = '';

    if (document.getElementById("valor2").value === '') {
        valor2 = 3034.42;
    } else {
        valor2 = document.getElementById("valor2").value;
    }
        
    let porcentagem2 = document.getElementById("porcentagem2").value;
    let stopLoss = document.getElementById("stopLoss").value;

    let resultado = stopLoss / ((valor2 / 100) * porcentagem2) ;
    document.getElementById("result2").textContent = `${Math.round(resultado * 100) / 100}`;

}

