//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

//DECLARACION DE VARIABLES GLOBALES
const tablaUsuarios = document.getElementById("tablaUsuarios");

//FUNCIONES INTERMEDIAS
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
        tdUsuario = trUsuario.insertCell();
        tdUsuario.appendChild(crearBotonEliminar());
        tdUsuario.setAttribute("class","text-center");
    }
}
const crearBotonEliminar = () => {
    let borrar = document.createElement("i");
    borrar.setAttribute("class","bi bi-x-circle-fill btn-borrar");
    borrar.setAttribute("id","botonBorrar");
    return borrar;
}

//CONTROLADORES DE EVENTOS

//CODIGO A EJECUTAR
actualizarTabla();
crearBotonEliminar();