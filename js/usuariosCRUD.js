class Cuenta{
    constructor(usuario,correo,clave,admin){
        this.usuario = usuario;
        this.correo = correo;
        this.clave = clave;
        this.admin = admin;
    }
    get usuario(){
        return this.usuario;
    }
    get correo(){
        return this.correo;
    }
    get clave(){
        return this.clave;
    }
    get admin(){
        return this.admin;
    }
    set usuario(usuario){
        this.usuario = usuario;
    }
    set correo(correo){
        this.correo = correo;
    }
    set clave(clave){
        this.clave = clave;
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
    let usuarioRepetido = false;
    let correoRepetido = false;
    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].usuario === usuario){
            usuarioRepetido = true;
        }
        if(cuentas[i].correo === correo){
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
// ELIMINAR USUARIOS