//DECLARACIÓN DE CLASE
class Cuenta{
    constructor(usuario,correo,clave,admin){
        this.usuario = usuario;
        this.correo = correo;
        this.clave = clave;
        this.admin = admin;
        this.favoritos = [];
    }
    // get usuario(){
    //     return this._usuario;
    // }
    // get correo(){
    //     return this._correo;
    // }
    // get clave(){
    //     return this._clave;
    // }
    // get admin(){
    //     return this._admin;
    // }
    // set usuario(usuario){
    //     this._usuario = usuario;
    // }
    // set correo(correo){
    //     this._correo = correo;
    // }
    // set clave(clave){
    //     this._clave = clave;
    // }
    toString(){
        return `Usuario: ${this.usuario}, Correo: ${this.correo}, Clave: ${this.clave}, Admin: ${this.admin}`;
    }
    añadirFavorito(juego){
        if(!juego){
            return "Error, no ingresó ningun juego";
        }
        if(!this.favoritos.find(juegoFav => juegoFav.IdJuego === juego.IdJuego)){
            this.favoritos.push(juego);
            return "Juego añadido a favoritos correctamente";
        }
        return "El juego ya estaba como favorito";
    }

    borrarFavorito(juego){
        if(!juego){
            return "Error, no ingresó ningun juego";
        }
        const juegoFav = this.favoritos.find(juegoFav => juegoFav.IdJuego === juego.IdJuego);
        if(juegoFav){
            this.favoritos.splice(this.favoritos.findIndex(juegoFav => juegoFav.IdJuego === juego.IdJuego),1);
            return "Juego borrado con éxito";
        }
        return "El juego no estaba como favorito";
    }
}

// DECLARACIÓN DE VARIABLES GLOBALES
const lsCuentasId = "cuentas";
const lsActivaId = "cuentaActiva";
let cuentas = localStorage.getItem(lsCuentasId);
if(cuentas === null){
    cuentas = [];
    const cuentaAdmin = new Cuenta("admin","admin@admin.com","1234",true);
    cuentas.push(cuentaAdmin);
    localStorage.setItem(lsCuentasId,JSON.stringify(cuentas));
}
else{
    cuentas = JSON.parse(cuentas);
}
let cuentaActiva = localStorage.getItem(lsActivaId);
if(cuentaActiva !== null){
    cuentaActiva = JSON.parse(cuentaActiva);
}

// ALTA USUARIOS
const registro = (usuario,correo,clave) => {
    if(usuario === null || usuario === undefined || clave === null || clave === undefined || correo === null || correo === undefined){
        return null;
    }
    usuario = usuario.toLowerCase();
    correo = correo.toLowerCase();
    let usuarioRepetido = false;
    let correoRepetido = false;
    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].usuario.toLowerCase() === usuario){
            usuarioRepetido = true;
        }
        if(cuentas[i].correo.toLowerCase() === correo){
            correoRepetido = true;
        }
    }
    if(usuarioRepetido && correoRepetido){
        return "El nombre de usuario y el correo ya estan usados";
    }
    if(usuarioRepetido){
        return "El nombre de usuario ya esta usado";
    }
    if(correoRepetido){
        return "El correo ya esta usado";
    }
    let nuevoUsuario = new Cuenta(usuario, correo, clave, false);
    cuentas.push(nuevoUsuario);
    localStorage.setItem(lsCuentasId,JSON.stringify(cuentas));
    return "Se ha registrado con éxito";
}

// BUSCAR USUARIOS
const buscarCuentaCorreo = (correo) => {
    correo = correo.toLowerCase();
    for(let i = 0; i < cuentas.length; i++){
        if(cuentas[i].correo.toLowerCase() === correo){
            return cuentas[i];
        }
    }
    return null;
}
const buscarCuentaUsuario = (usuario) => {
    usuario = usuario.toLowerCase();
    for(let i = 0; i < cuentas.length; i++){
        if(cuentas[i].usuario.toLowerCase() === usuario){
            return cuentas[i];
        }
    }
    return null;
}

// LOGUEARSE
const iniciarSesion = (correo, clave) => {
    if(correo === null || correo === undefined || clave === null || clave === undefined){
        return null;
    }
    if(cuentaActiva!==null){
        return "Ya hay una sesión activa";
    }
    const cuenta = buscarCuentaCorreo(correo);
    if(cuenta!==null){
        if(cuenta.clave === clave){
            cuentaActiva=cuenta;
            localStorage.setItem(lsActivaId, JSON.stringify(cuentaActiva));
            return "Iniciando Sesión...";
        }
        else{
            return "Contraseña incorrecta";
        }
    }
    else{
        return "Revisa si ingresaste el correo correctamente";
    }
}

// ELIMINAR USUARIOS
const eliminarCuenta = (cuenta) => {
    if(cuenta===null||cuenta===undefined){
        return "Ha ocurrido un error";
    }
    if(cuenta.usuario==="admin" && cuenta.correo==="admin@admin.com"){
        return "No puede eliminar la cuenta administrador";
    }
    for(let i = 1; i < cuentas.length; i++){
        if(cuenta.usuario.toLowerCase()===cuentas[i].usuario.toLowerCase() && cuenta.correo.toLowerCase()===cuentas[i].correo.toLowerCase()){
            cuentas.splice(i,1);
            localStorage.setItem(lsCuentasId, JSON.stringify(cuentas));
            return "La cuenta se eliminó correctamente";
        }
    }
    return "La cuenta seleccionada no existe"; //No entra nunca
}

// MODIFICAR LISTA

// CERRAR SESION
const cerrarSesion = () => {
    if(cuentaActiva===null){
        return "Error, no había ninguna sesión activa";
    }
    cuentaActiva = null;
    localStorage.removeItem(lsActivaId);
    return "Cerrando Sesión...";
}


//EXPORTACIÓN
export {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, eliminarCuenta, cerrarSesion};