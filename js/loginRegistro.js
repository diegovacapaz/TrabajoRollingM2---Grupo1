//CONSULTO LOCAL STORAGE , LO PARSEO Y SI ES NULL SETEO UN ARRAY VACIO
let arrayUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//OBTENGO REFERENCIAS DE HTML
const formRegistro = document.getElementById('formRegistro')
const nombreRegistro = document.getElementById('nombreRegistro')
const mailRegistro = document.getElementById('mailRegistro')
const contraseniaRegistro = document.getElementById('contraseniaRegistro')
const btnRegistro = document.getElementById('btnRegistro')

btnRegistro.addEventListener('click', (e) =>{
  e.preventDefault()

  const usuario = {
    nombre : nombreRegistro.value,
    mail : mailRegistro.value,
    contrasenia : contraseniaRegistro.value
  }

  arrayUsuarios.push(usuario)

  localStorage.setItem('usuarios' , JSON.stringify(arrayUsuarios))
  nombreRegistro.value = ''
  mailRegistro.value = ''
  contraseniaRegistro.value = ''

  alert('El usuario se creo correctamente')

})


//LOGIN

const ingresar = document.getElementById('formIngresar')
const mailIngresar = document.getElementById('mailIngresar')
const contraseniaIngresar = document.getElementById('contraseniaIngresar')