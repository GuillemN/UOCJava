document.getElementById('formulariRegistre').addEventListener('submit', function (e) {
    e.preventDefault();

    // Variables dels camps
    const camp = (id) => document.getElementById(id);
    const nomUsuari = camp('nomUsuari').value;
    const correuElectronic = camp('correuElectronic').value;
    const contrasenya = camp('contrasenya').value;
    const confirmaContrasenya = camp('confirmaContrasenya').value;
    const edat = parseInt(camp('edat').value);

    // Indicador d'errors
    let errorsPresent = false;

    // Funció per mostrar errors
    const mostrarError = (id, condicio, missatge) => {
        if (condicio) {
            camp(id).textContent = missatge;
            camp(id).style.display = "block";
            errorsPresent = true;
        } else {
            camp(id).style.display = "none";
        }
    };

    // Validacions
    mostrarError('errorNomUsuari', nomUsuari.length < 3, "El nom d'usuari ha de tenir com a mínim 3 caràcters.");
    const patróCorreu = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    mostrarError('errorCorreu', !patróCorreu.test(correuElectronic), "El correu electrònic no té un format correcte.");
    const patróContrasenya = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+\-=\[\]{}|\\:";'<>?,./]).{8,}$/;
    mostrarError('errorContrasenya', !patróContrasenya.test(contrasenya), "La contrasenya ha de tenir com a mínim 8 caràcters, incloent majúscules, minúscules, números i caràcters especials.");
    mostrarError('errorConfirmaContrasenya', contrasenya !== confirmaContrasenya, "Les contrasenyes no coincideixen.");
    mostrarError('errorEdat', isNaN(edat) || edat < 0 || edat >= 1001, "Si us plau, introdueix una edat vàlida (entre 0 i 1000 anys).");

    // Si no hi ha errors, enviar el formulari
    if (!errorsPresent) {
        alert("Formulari enviat correctament!");
    }
});
