
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, cerrarSesion} from "./modeloUsuariosCRUD.js"


//REGISTRO
const formReg = document.getElementById('formReg')
const nombreRegistro = document.getElementById('nombreRegistro')
const mailRegistro = document.getElementById('mailRegistro')
const contraseniaRegistro = document.getElementById('contraseniaRegistro')

const nombreEnUso = cuentas.find(usuario => usuario.usuario === nombreRegistro.value)
if (nombreEnUso){
  nombreRegistro.title = 'Este nombre ya esta en uso'
}

formReg.addEventListener('submit', (e) =>{
  e.preventDefault()

  const nombreRegistrado = cuentas.find(usuario=> usuario.usuario === nombreRegistro.value)
  const correoRegistrado = cuentas.find(usuario => usuario.correo === mailRegistro.value)
  if(correoRegistrado){
    alert('Ya existe una cuenta registrada con este mail')
  }else if (nombreRegistrado){
    alert('El nombre que elegiste ya esta en uso')
  } else{
    alert('Se ha registrado correctamente')
  }

  registro(nombreRegistro.value, mailRegistro.value, contraseniaRegistro.value)

  nombreRegistro.value = ''
  mailRegistro.value = ''
  contraseniaRegistro.value = ''

  })


  //LOGIN
const formIng = document.getElementById('formIng')
const mailIngresar = document.getElementById('mailIngresar')
const contraseniaIngresar = document.getElementById('contraseniaIngresar')

formIng.addEventListener('submit', (e)=>{
  e.preventDefault()

  const validarUsuario = cuentas.find(usuario=> usuario.clave === contraseniaIngresar.value && usuario.correo === mailIngresar.value) 
  if(!validarUsuario){
    return alert('La contraseña o usuario son incorrectos')
  }

  iniciarSesion(mailIngresar.value, contraseniaIngresar.value)
  window.location.href = 'http://127.0.0.1:5500/index.html'
  
})