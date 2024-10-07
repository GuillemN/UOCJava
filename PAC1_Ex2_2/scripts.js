const apiURL = "https://api.exchangerate-api.com/v4/latest/USD";

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiURL)
        .then(resposta => resposta.json())
        .then(dades => omplirOpcionsMoneda(dades.rates))
        .catch(() => mostrarMissatgeError("Error carregant les opcions de moneda. Si us plau, torna a intentar-ho més tard."));
});

function omplirOpcionsMoneda(rates) {
    const selectMonedaBase = document.getElementById('monedaBase');
    const selectMonedaDesti = document.getElementById('monedaDesti');
    Object.keys(rates).forEach(moneda => {
        const opcio = document.createElement('option');
        opcio.value = moneda;
        opcio.textContent = moneda;
        selectMonedaBase.appendChild(opcio.cloneNode(true));
        selectMonedaDesti.appendChild(opcio);
    });
}

document.getElementById('formulariCanvi').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('missatgeError').style.display = 'none';
    const monedaBase = document.getElementById('monedaBase').value;
    const monedaDesti = document.getElementById('monedaDesti').value;
    const importMoneda = document.getElementById('import').value;
    
    document.getElementById('carregant').style.display = 'block';

    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaBase}`)
        .then(resposta => resposta.json())
        .then(dades => mostrarResultat(importMoneda, dades.rates[monedaDesti]))
        .catch(() => mostrarMissatgeError("Error obtenint el tipus de canvi. Si us plau, torna a intentar-ho més tard."));
});

function mostrarResultat(importMoneda, tipusCanvi) {
    const resultatFinal = (importMoneda * tipusCanvi).toFixed(2);
    document.getElementById('carregant').style.display = 'none';
    document.getElementById('resultat').value = resultatFinal;
}

function mostrarMissatgeError(missatge) {
    document.getElementById('carregant').style.display = 'none';
    const missatgeErrorDiv = document.getElementById('missatgeError');
    missatgeErrorDiv.textContent = missatge;
    missatgeErrorDiv.style.display = 'block';
}
