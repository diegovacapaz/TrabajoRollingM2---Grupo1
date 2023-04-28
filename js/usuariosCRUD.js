class Cuenta{
    constructor(usuario,correo,clave,admin){
        this._usuario = usuario;
        this._correo = correo;
        this._clave = clave;
        this._admin = admin;
    }
    get usuario(){
        return this._usuario;
    }
    get correo(){
        return this._correo;
    }
    get clave(){
        return this._clave;
    }
    get admin(){
        return this._admin;
    }
    set usuario(usuario){
        this._usuario = usuario;
    }
    set correo(correo){
        this._correo = correo;
    }
    set clave(clave){
        this._clave = clave;
    }
    toString(){
        return `Usuario: ${this.usuario}, Correo: ${this.correo}, Clave: ${this.clave}, Admin: ${this.admin}`;
    }
}

// CRUD USUARIOS
let cuentas = [];
const cuentaAdmin = new Cuenta("admin","admin@admin.com","1234",true);
cuentas.push(cuentaAdmin);

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
    return "Se ha registrado con éxito";
}
// MODIFICAR LISTA
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
    const cuenta = buscarCuentaCorreo(correo);
    if(cuenta!==null){
        if(cuenta.clave === clave){
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
            return "La cuenta se eliminó correctamente";
        }
    }
    return "La cuenta seleccionada no existe";
}

// console.log(registro("diego","diego@","1234"));
// console.log(registro("alan","alan@","1234"));
// console.log(registro("felipe","felipe@","1234"));
// console.log(registro("robby","robby@","1234"));
// console.log(registro("ana","ana@","1234"));
// console.log(...cuentas);
// console.log(eliminarCuenta(buscarCuentaCorreo("robby@")));
// console.log(...cuentas);
// console.log(eliminarCuenta(buscarCuentaUsuario("admin")));
// console.log(...cuentas);
// console.log(iniciarSesion("diego@","1234"));
// console.log(iniciarSesion("diegi@","1234"));
// console.log(iniciarSesion("diego@","a43"));