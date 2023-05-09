//REGISTRO
//CONSULTO LOCAL STORAGE , LO PARSEO Y SI ES NULL SETEO UN ARRAY VACIO
let arrayUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//OBTENGO REFERENCIAS DE HTML
const formReg = document.getElementById('formReg')
const nombreRegistro = document.getElementById('nombreRegistro')
const mailRegistro = document.getElementById('mailRegistro')
const contraseniaRegistro = document.getElementById('contraseniaRegistro')
const btnRegistro = document.getElementById('btnRegistro')

formReg.addEventListener('submit', (e) =>{
  e.preventDefault()

  const usuario = {
    nombre : nombreRegistro.value,
    mail : mailRegistro.value,
    contrasenia : contraseniaRegistro.value
  } 

  const usuarioRegistrado = arrayUsuarios.find(usuario => usuario.mail === mailRegistro.value)
  if (usuarioRegistrado){
    return alert('El usuario ya esta registrado')
  }

  arrayUsuarios.push(usuario)

  localStorage.setItem('usuarios' , JSON.stringify(arrayUsuarios))
    
  nombreRegistro.value = ''
  mailRegistro.value = ''
  contraseniaRegistro.value = ''

  alert('El usuario se creo correctamente')

})


//LOGIN

const formIng = document.getElementById('formIng')
const mailIngresar = document.getElementById('mailIngresar')
const contraseniaIngresar = document.getElementById('contraseniaIngresar')
const btnIngresar = document.getElementById('btnIngresar')

formIng.addEventListener('submit', (e)=>{
  e.preventDefault()
  
  let arrayUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  let arrayCuentas = JSON.parse(localStorage.getItem('cuentas'))
  const validacionAdmin = arrayCuentas.find(admin => admin.correo === mailIngresar.value && admin.clave === contraseniaIngresar.value)
  const validacionUsuario = arrayUsuarios.find(usuario=> usuario.mail === mailIngresar.value && usuario.contrasenia === contraseniaIngresar.value)
  if (validacionAdmin){
    return window.location.href = 'administracion.html'}
  if (!validacionUsuario){
    return alert('Usuario y/o contraseña incorrectos')
  }else{
  alert(`Bienvenido ${validacionUsuario.nombre}`)
  window.location.href = 'http://127.0.0.1:5500/index.html'
  }
})

