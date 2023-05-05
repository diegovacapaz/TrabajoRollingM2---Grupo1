//IMPORTACIÓN DEL MODELO
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion} from "./modeloUsuariosCRUD.js";

const botonLog = document.getElementById("botonLog");
const botonLogDivTexto = document.getElementById("botonLogTexto");


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