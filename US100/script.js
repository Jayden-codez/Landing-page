 function result() {
    let contratos = document.getElementById("contratos").value;
    let pontos = document.getElementById("pontos").value;
    let resultado = pontos * contratos;
    document.getElementById("result").textContent = `$${Math.round(resultado * 100) / 100}`;
}

 function result2() {
    let pontos = document.getElementById("pontos2").value;
    let stopLoss = document.getElementById("stopLoss").value;
    let resultado2 = stopLoss / pontos;
    document.getElementById("result2").textContent = Math.round(resultado2 * 100) / 100;
}

function result3() {
    let contratos = document.getElementById("contratos2").value;
    let stopLoss = document.getElementById("stopLoss2").value;
    let resultado3 = stopLoss / contratos;
    document.getElementById("result3").textContent = Math.round(resultado3 * 100) / 100;

}

const title = document.getElementsByClassName("header__title");

const mediaQuery = window.matchMedia("(max-width: 361px)");

function updateTitle(e) {
  if (e.matches) {
    title.textContent = "US100";
  } else {
    title.textContent = "US100 - NASDAQ";
  }
}

// Run on load
updateTitle(mediaQuery);

