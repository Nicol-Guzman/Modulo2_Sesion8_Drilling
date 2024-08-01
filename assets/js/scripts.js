// Sesión 8 del Módulo 2: Drilling

// CREDENCIALES DE CONSULTA
const clientes = [
    {
        nombre: 'Alex',
        identificador: '001',
        pass: '111',
        saldo: '50000'
    },
    {
        nombre: 'Mark',
        identificador: '002',
        pass: '222',
        saldo: '50000'
    },
    {
        nombre: 'Danny',
        identificador: '003',
        pass: '333',
        saldo: '50000'
    }
];

// Función que valida al cliente al ingresar.
function validarCliente() {
    let clienteValidado = false;
    let clienteActual;

    while (!clienteValidado) {
        let id = prompt('Usuario:');
        let password = prompt('Contraseña');

        if (id === null || password === null) {
            alert('Proceso cancelado. Por favor vuelva a intentarlo.')
            return;
        }

        clienteActual = clientes.find(cliente => cliente.identificador === id && cliente.pass === password);

        if (clienteActual) {
            clienteValidado = true;
            alert(`Bienvenid@, ${clienteActual.nombre}.`);
            mostrarMenu(clienteActual);
        } else {
            alert('Identificador o Contraseña incorrectos. Por favor vuelva a intentarlo.');
        }
    }
}

// Funcion que inicia el segundo menu,
// una vez que el usuario ha sido verificado
function mostrarMenu(cliente) {
    let opcion;
    do {
        opcion = prompt('Seleccione una opción:\n1.-Ver saldo\n2.-Realizar giro\n3.-Realizar deposito\n4.-Salir');

        switch (opcion) {
            case '1':
                alert(`Su saldo actual es de: ${cliente.saldo}`);
                break;

            case '2':
                realizarGiro(cliente);
                break;

            case '3':
                realizarDeposito(cliente);
                break;

            case '4':
                alert(`Gracias por usar nuestro servicio. ¡Esperamos verte pronto!`);
                break;

            default:
                alert('La opción no es válida, vuelva a intentarlo');
                break;
        }
    } while (opcion !== '4');
}

// Función para realizar giros
function realizarGiro(cliente) {
    let monto = parseInt(prompt(`Su saldo actual es de: ${cliente.saldo}\nIndique el monto que desea retirar:`));

    if (isNaN(monto) || monto <= 0) {
        alert('Monto invalido. Por favor inténtelo de nuevo.');
        return;
    }
    if (cliente.saldo < monto) {
        alert('Su saldo es insuficiente. No se puede realizar la operación')
    } else {
        cliente.saldo -= monto;
        alert(`Giro realizado. Su nuevo monto es: ${cliente.saldo}`);
    }
}

// Función para realizar depósitos
function realizarDeposito(cliente) {
    let monto = parseInt(prompt(`Su saldo actual es de: ${cliente.saldo}\nIndique el monto que desea depositar:`));

    if (isNaN(monto) || monto <= 0) {
        alert('Monto invalido. Por favor inténtelo de nuevo.')
        return;
    }

    cliente.saldo = parseInt(cliente.saldo) + monto;
    alert(`Deposito realizado. Su nuevo saldo es de ${cliente.saldo}`);
}

window.onload = validarCliente;

