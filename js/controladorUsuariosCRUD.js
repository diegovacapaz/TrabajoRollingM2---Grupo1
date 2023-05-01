//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

//DECLARACION DE VARIABLES GLOBALES
const tablaUsuarios = document.getElementById("tablaUsuarios");
let botonesBorrar = document.getElementsByClassName("btn-borrar");

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
        if(i>0){
            tdUsuario.appendChild(crearBotonBorrar());
            tdUsuario.setAttribute("class","text-center");
        }
    }
    asignarListenersBorrar();
}
const crearBotonBorrar = () => {
    let borrar = document.createElement("i");
    borrar.setAttribute("class","bi bi-x-circle-fill btn-borrar");
    return borrar;
}
const ocultarClave = (clave) => {
    let claveOculta = "";
    for(let i = 0; i < clave.length; i++){
        claveOculta += "*";
    }
    return claveOculta;
}

//CONTROLADORES DE EVENTOS
const asignarListenersBorrar = () => {
    for(let i = 0; i < botonesBorrar.length; i++){
        botonesBorrar[i].addEventListener("click", () => {
            eliminarCuenta(cuentas[i+1]);
            actualizarTabla();
        });
    }
}

//PRIMERA ACTUALIZACION
actualizarTabla();