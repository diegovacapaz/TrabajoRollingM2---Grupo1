
import {cuentas, cuentaActiva, registro, buscarCuentaCorreo, buscarCuentaUsuario, iniciarSesion, cerrarSesion} from "./modeloUsuariosCRUD.js"


//REGISTRO
const formReg = document.getElementById('formReg')
const inputs = document.querySelectorAll('#formReg input')
const nombreRegistro = document.getElementById('nombreRegistro')
const mailRegistro = document.getElementById('mailRegistro')
const contraseniaRegistro = document.getElementById('contraseniaRegistro')

//expresiones regulares
const expresiones = {
  nombre : /^[a-zA-Z0-9ñ]{3,30}$/,
  email: /^[\wñ]+@[a-zñ]+\.[a-zñ]{2,5}$/,
  contrasenia: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_+-])[a-zA-Z0-9ñ!@#$%^&*_+-]{4,16}$/
}

//objeto para validar campos
const campos = {
  nombre : false,
  email: false,
  contrasenia: false
}

//funcion para validar formulario
const validarFormulario = (e)=>{
  switch (e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre')
    break
    case "email":
      validarCampo(expresiones.email, e.target, 'email')
    break
    case "clave":
      validarCampo(expresiones.contrasenia, e.target, 'contrasenia')
      validarContrasenia()
    break
    case "clave2":
      validarContrasenia()
    break
  }
}

//funcion para validar cada campo del formulario
const validarCampo = (expresion, input, campo)=>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto')
    document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto')
    document.querySelector(`#grupo-${campo} i`).classList.add('bi-check')
    document.querySelector(`#grupo-${campo} i`).classList.remove('bi-x-circle')
    document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo')
    campos[campo] = true
  }else{
    document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto')
    document.querySelector(`#grupo-${campo} i`).classList.add('bi-x-circle')
    document.querySelector(`#grupo-${campo} i`).classList.remove('bi-check')
    document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto')
    document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo')
    campos[campo] = false
  }
}

//validacion de ambas contraseñas
const validarContrasenia = ()=>{
  const contraseniaRegistro2 = document.getElementById('contraseniaRegistro2')
  if(contraseniaRegistro.value !== contraseniaRegistro2.value){
    document.getElementById(`grupo-contrasenia2`).classList.add('formulario-grupo-incorrecto')
    document.querySelector(`#grupo-contrasenia2 i`).classList.add('bi-x-circle')
    document.querySelector(`#grupo-contrasenia2 i`).classList.remove('bi-check')
    document.getElementById(`grupo-contrasenia2`).classList.remove('formulario-grupo-correcto')
    document.querySelector(`#grupo-contrasenia2 .formulario-input-error`).classList.add('formulario-input-error-activo')
    campos['contrasenia'] = false
  }else{
    document.getElementById(`grupo-contrasenia2`).classList.remove('formulario-grupo-incorrecto')
    document.querySelector(`#grupo-contrasenia2 i`).classList.remove('bi-x-circle')
    document.querySelector(`#grupo-contrasenia2 i`).classList.add('bi-check')
    document.getElementById(`grupo-contrasenia2`).classList.add('formulario-grupo-correcto')
    document.querySelector(`#grupo-contrasenia2 .formulario-input-error`).classList.remove('formulario-input-error-activo')
    campos['contrasenia'] = true
  }
}

//agregamos un evento a todos los inputs
inputs.forEach((input)=>{
  input.addEventListener('keyup', validarFormulario)
  input.addEventListener('blur', validarFormulario)
})




//boton enviar registro
formReg.addEventListener('submit', (e) =>{
  e.preventDefault()

  const nombreRegistrado = cuentas.find(usuario=> usuario.usuario === nombreRegistro.value)
  const correoRegistrado = cuentas.find(usuario => usuario.correo === mailRegistro.value)
  if(correoRegistrado){
      return alert('Ya existe una cuenta registrada con este mail')
    }else if (nombreRegistrado){
      return alert('El nombre que elegiste ya esta en uso')
    }
  
  // verificacion si todos los campos son correctos
  if(campos.nombre && campos.contrasenia && campos.email){
    // formReg.reset()
    //Reseteamos o borramos los iconos de tilde en los campos
    document.querySelectorAll('.formulario-grupo-correcto').forEach((icono)=>{
      icono.classList.remove('formulario-grupo-correcto')
    })
    registro(nombreRegistro.value, mailRegistro.value, contraseniaRegistro.value)
    formReg.reset()
    //agregar mensaje de usuario registrado correctamente
  }else{
    document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo')
    setTimeout(()=>{
      document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo')
    }, 5000)
  } 
    

  
  

  // const nombreRegistrado = cuentas.find(usuario=> usuario.usuario === nombreRegistro.value)
  // const correoRegistrado = cuentas.find(usuario => usuario.correo === mailRegistro.value)
  // if(correoRegistrado){
  //   alert('Ya existe una cuenta registrada con este mail')
  // }else if (nombreRegistrado){
  //   alert('El nombre que elegiste ya esta en uso')
  // } else{
  //   alert('Se ha registrado correctamente')
  // }

  // registro(nombreRegistro.value, mailRegistro.value, contraseniaRegistro.value)

  // nombreRegistro.value = ''
  // mailRegistro.value = ''
  // contraseniaRegistro.value = ''

  


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
  window.location.href = '../index.html'
  
})