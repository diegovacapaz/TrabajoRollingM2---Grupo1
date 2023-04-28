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