function validarEdad() {
    var edad = document.getElementById("edad")
    if (edad.value >= 18 ) {
        alert("Eres mayor de edad")
    } else {
        alert("Eres menor de edad")
    }
}
