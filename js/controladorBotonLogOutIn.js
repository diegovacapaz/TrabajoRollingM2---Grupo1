//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

const botonLoginLogout = getElementById("LogInOut_Boton");

botonLoginLogout.addEventListener("click",()=>{
    if(cuentaActiva !== null){
        
    }
    else{
        // window.location.replace(); otra opcion
        window.location.href = "../pages/LoginRegistro.html";
    }
});