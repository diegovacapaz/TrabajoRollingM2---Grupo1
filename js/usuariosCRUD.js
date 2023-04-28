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

// console.log(cuentaAdmin);
console.log(...cuentas);
console.log(registro("diegovaca","diego@diego.com","123123"));
console.log(...cuentas);
console.log(registro("diegovaca","diego@diego.cosm","123123"));
console.log(...cuentas);
console.log(registro("diegovacas","diego@diego.comss","123123"));
console.log(...cuentas);
// MODIFICAR LISTA
// ELIMINAR USUARIOS