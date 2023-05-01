//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

const tablaUsuarios = document.getElementById("tablaUsuarios");

const actualizarTabla = () => {
    tablaUsuarios.tBodies[0].innerHTML = "";
    let trUsuario;
    let tdUsuario;
    for(let i = 0; i < cuentas.length; i++){
        trUsuario = tablaUsuarios.tBodies[0].insertRow();
        tdUsuario = trUsuario.insertCell();
        tdUsuario.innerText = `${i+1}`;
        for(let j = 0; j < Object.values(cuentas[i]).length - 1; j++){
            tdUsuario = trUsuario.insertCell();
            tdUsuario.innerText = Object.values(cuentas[i])[j];
        }
    }
}
registro("diego","asdasd","asdasd");
actualizarTabla();
eliminarCuenta(buscarCuentaUsuario("diego"));
actualizarTabla();