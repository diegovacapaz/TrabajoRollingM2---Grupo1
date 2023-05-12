//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";
if(cuentaActiva === null || cuentaActiva.admin === false){
    window.location.href = "../pages/error404.html";
}