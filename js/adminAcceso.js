//IMPORTACIÓN DEL MODELO
import {cuentaActiva, iniciarSesion} from "./modeloUsuariosCRUD.js";
iniciarSesion("admin@admin.com", "1234");
if(cuentaActiva === null || cuentaActiva.admin === false){
    window.location.href = "../pages/error404.html";
}