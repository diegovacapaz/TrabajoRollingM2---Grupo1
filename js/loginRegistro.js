import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, cerrarSesion} from "./modeloUsuariosCRUD.js"

const formReg = document.getElementById('formReg')
const nombreRegistro = document.getElementById('nombreRegistro')
const mailRegistro = document.getElementById('mailRegistro')
const contraseniaRegistro = document.getElementById('contraseniaRegistro')

formReg.addEventListener('submit', (e) =>{
  e.preventDefault()

  registro(nombreRegistro.value, mailRegistro.value, contraseniaRegistro.value)
})

const formIng = document.getElementById('formIng')
const mailIngresar = document.getElementById('mailIngresar')
const contraseniaIngresar = document.getElementById('contraseniaIngresar')

formIng.addEventListener('submit', (e)=>{
  e.preventDefault()

  iniciarSesion(mailIngresar.value, contraseniaIngresar.value)
  if(iniciarSesion){
    window.location.href = 'http://127.0.0.1:5500/index.html'
  }

})