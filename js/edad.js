// js/edad.js
// Funciones reutilizables para manejo de edad.

// Calcula edad usando solo el año de nacimiento
function calcularEdadPorAnio(anioNacimiento) {
    const hoy = new Date().getFullYear();
    const edad = hoy - anioNacimiento;
    return (edad >= 0 && edad < 130) ? edad : null;
}

// Calcula edad exacta usando dia/mes/año
function calcularEdadCompleta(dia, mes, anio) {
    const hoy = new Date();
    const nacimiento = new Date(anio, mes - 1, dia);

    if (nacimiento > hoy) return null;

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    // Ajustar si aún no cumplió
    if (
        mesActual < nacimiento.getMonth() ||
        (mesActual === nacimiento.getMonth() && diaActual < nacimiento.getDate())
    ) {
        edad--;
    }

    return (edad >= 0 && edad < 130) ? edad : null;
}

// Clasificación simple: mayor / menor / igual a 20
function clasificarEdad(edad) {
    if (edad === null || edad === undefined || isNaN(edad)) {
        return "Edad inválida";
    }
    if (edad > 20) return "Es mayor";
    if (edad < 20) return "Es menor";
    return "Tienes 20 años";
}

// Validación de rango
function validarEdad(edad) {
    return Number.isInteger(edad) && edad >= 0 && edad <= 130;
}

// Exportar para acceso global
window.EdadUtils = {
    calcularEdadPorAnio,
    calcularEdadCompleta,
    clasificarEdad,
    validarEdad
};
