// Selecció d'elements del DOM
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
const cont = document.getElementById('seientsSeleccionats');
const total = document.getElementById('total');
const selectPelicula = document.getElementById('pelicula');
const selectMoneda = document.getElementById('moneda');
const preuConvertit = document.getElementById('preuConvertit');

let preuTicket = +selectPelicula.value; // Preu inicial de la pel·lícula

// Actualitzar selecció de seients i preu
function actualitzarSeleccion() {
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');
    const seientsIndex = [...seientsSeleccionats].map(seient => [...seients].indexOf(seient));

    // Desar selecció al localStorage
    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));

    const comptador = seientsSeleccionats.length;
    cont.textContent = comptador;
    total.textContent = (comptador * preuTicket).toFixed(2);

    // Actualitzar conversió de preu
    convertirMoneda();
}

// Carregar selecció guardada al localStorage
function carregarSeleccio() {
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    if (seientsSeleccionats && seientsSeleccionats.length > 0) {
        seients.forEach((seient, index) => {
            if (seientsSeleccionats.includes(index)) {
                seient.classList.add('seleccionat');
            }
        });
    }
    
    const peliculaSeleccionada = localStorage.getItem('peliculaSeleccionada');
    if (peliculaSeleccionada !== null) {
        selectPelicula.selectedIndex = peliculaSeleccionada;
    }
}

// Canviar pel·lícula seleccionada
selectPelicula.addEventListener('change', e => {
    preuTicket = +e.target.value;
    localStorage.setItem('peliculaSeleccionada', e.target.selectedIndex);
    actualitzarSeleccion();
});

// Seleccionar seient
seients.forEach(seient => {
    seient.addEventListener('click', () => {
        seient.classList.toggle('seleccionat');
        actualitzarSeleccion();
    });
});

// Carregar monedes i omplir selector de moneda
function carregarMonedes() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(resposta => resposta.json())
        .then(dades => {
            const monedes = Object.keys(dades.rates);
            
            monedes.forEach(moneda => {
                const opcio = document.createElement('option');
                opcio.value = moneda;
                opcio.textContent = moneda;
                selectMoneda.appendChild(opcio);
            });

            // Actualitzar conversió de preu inicial
            convertirMoneda();
        })
        .catch(error => console.error('Error carregant les monedes:', error));
}

// Convertir preu a la moneda seleccionada
selectMoneda.addEventListener('change', convertirMoneda);

function convertirMoneda() {
    const moneda = selectMoneda.value;
    const preu = parseFloat(total.textContent);

    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(resposta => resposta.json())
        .then(dades => {
            const tipusCanvi = dades.rates[moneda];
            preuConvertit.textContent = (preu * tipusCanvi).toFixed(2) + ` ${moneda}`;
        })
        .catch(error => {
            console.error('Error en la conversió de moneda', error);
            preuConvertit.textContent = 'Error en la conversió';
        });
}

// Carregar la selecció inicial
carregarSeleccio();
carregarMonedes();
