//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

//Parametros globales
const contenedorLog = document.getElementById("contenedorLog");
const botonLog = document.getElementById("botonLog");
const botonLogDivTexto = document.getElementById("botonLogTexto");

//Funciones
const actualizarCuentaActiva = ()=>{
    if(cuentaActiva !== null){
        botonLogDivTexto.innerHTML = cuentaActiva.usuario;
        let iconLogout = document.createElement("button");
        iconLogout.innerHTML = '<i class="bi bi-x-circle"></i>';
        iconLogout.className ="btn btn-dark crucetaLogout";
        iconLogout.addEventListener("click",()=>{
            cerrarSesion();
            window.location.reload();
        });
        contenedorLog.appendChild(iconLogout);
    }
    else{
        botonLogDivTexto.innerHTML = "Ingresar";
    }
    añadirEventoClickBotonLog();
}

const añadirEventoClickBotonLog = ()=>{
    if(cuentaActiva !== null){
        botonLog.addEventListener("click",()=>{
            window.location.href = "../pages/error404.html"; //Revisar la ruta en todos los html
        });
    }
    else{
        botonLog.addEventListener("click",()=>{
            window.location.href = "../pages/LoginRegistro.html"; //Revisar la ruta en todos los html
        });
    }
}

//Inicialización
actualizarCuentaActiva();



//Testing

// registro("diego","diego@","1234");
// iniciarSesion("admin@admin.com","1234");
// iniciarSesion("diego@","1234");





/*Revisar estado de cuentaActiva

Si hay una cuenta logueada,
mostrar su nombre de usuario y agregar un boton de logout
el usuario lleva a error404
el logo lleva a error404
el logout cierra sesion y recarga la pagina

Si no hay cuenta logueada,
mostrar ingresar
el logo lleva a LoginRegistro.html
el ingresar lleva a LoginRegistro.html
*/