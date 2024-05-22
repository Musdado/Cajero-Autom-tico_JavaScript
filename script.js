var cuentas = [
    { nombre: "Mali", saldo: 200, contrasena: "1234" },
    { nombre: "Gera", saldo: 290, contrasena: "5789" },
    { nombre: "Maui", saldo: 67, contrasena: "0000" }
];

var cuentaActual = null;

function iniciarSesion() {
    var indiceCuenta = document.getElementById("cuentas").value;
    var contrasena = document.getElementById("contrasena").value;

    if (cuentas[indiceCuenta].contrasena === contrasena) {
        cuentaActual = cuentas[indiceCuenta];
        document.getElementById("seleccion-cuenta").style.display = "none";
        document.getElementById("operaciones").style.display = "block";
        document.getElementById("nombre-usuario").innerText = cuentaActual.nombre;
    } else {
        document.getElementById("mensaje-inicio").innerText = "Contraseña incorrecta. Intenta nuevamente.";
    }
}

function consultarSaldo() {
    document.getElementById("resultado").innerText = "Saldo actual: $" + cuentaActual.saldo;
}

function mostrarIngreso() {
    document.getElementById("ingreso").style.display = "block";
    document.getElementById("retiro").style.display = "none";
    document.getElementById("resultado").innerText = "";
}

function mostrarRetiro() {
    document.getElementById("retiro").style.display = "block";
    document.getElementById("ingreso").style.display = "none";
    document.getElementById("resultado").innerText = "";
}

function ingresarMonto() {
    var monto = parseFloat(document.getElementById("monto-ingreso").value);
    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado").innerText = "Monto inválido. Intenta nuevamente.";
        return;
    }
    if (cuentaActual.saldo + monto > 990) {
        document.getElementById("resultado").innerText = "No puedes tener más de $990 en tu cuenta.";
        return;
    }
    cuentaActual.saldo += monto;
    document.getElementById("resultado").innerText = "Has ingresado $" + monto + ". Saldo actual: $" + cuentaActual.saldo;
    document.getElementById("ingreso").style.display = "none";
}

function retirarMonto() {
    var monto = parseFloat(document.getElementById("monto-retiro").value);
    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado").innerText = "Monto inválido. Intenta nuevamente.";
        return;
    }
    if (monto > cuentaActual.saldo) {
        document.getElementById("resultado").innerText = "Fondos insuficientes.";
        return;
    }
    if (cuentaActual.saldo - monto < 10) {
        document.getElementById("resultado").innerText = "No puedes tener menos de $10 en tu cuenta.";
        return;
    }
    cuentaActual.saldo -= monto;
    document.getElementById("resultado").innerText = "Has retirado $" + monto + ". Saldo actual: $" + cuentaActual.saldo;
    document.getElementById("retiro").style.display = "none";
}

function cerrarSesion() {
    cuentaActual = null;
    document.getElementById("seleccion-cuenta").style.display = "block";
    document.getElementById("operaciones").style.display = "none";
    document.getElementById("mensaje-inicio").innerText = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("resultado").innerText = "";
}
