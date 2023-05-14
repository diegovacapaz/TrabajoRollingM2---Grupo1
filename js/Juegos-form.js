let tablaJuego = localStorage.getItem("tablaJuegoStorage");
tablaJuego = JSON.parse(tablaJuego);
if (tablaJuego == null) {
    tablaJuego = [];
}


let idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function generarID() {
    let id = Math.floor(Math.random() * 90000) + 10000;
    while (tablaJuego.find(juego => juego.idJuego === id)) {
        id = Math.floor(Math.random() * 90000) + 10000;
    }
    document.getElementById("txtIdJuego").value = id;
}


function guardar() {
    let IdJuego = document.getElementById("txtIdJuego").value;
    let nombre = document.getElementById("txtNombre").value;
    let genero = document.getElementById("cboGenero").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let precio = document.getElementById("txtPrecio").value;
    let url = document.getElementById("txtUrl").value;

    if (!nombre || !genero || !descripcion || !precio || !url || !IdJuego) {
        Swal.fire('ERROR','Debe completar todos los campos', 'error');
        return;
    }

    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {

                console.log("PRESIONO GUARDAR...");
                let objJuego = JSON.stringify({
                    
                    IdJuego: document.getElementById("txtIdJuego").value,
                    nombre: document.getElementById("txtNombre").value,
                    genero: document.getElementById("cboGenero").value,
                    descripcion: document.getElementById("txtDescripcion").value,
                    precio: document.getElementById("txtPrecio").value,
                    url: document.getElementById("txtUrl").value,
                    
                    
                });
                let url = $('#txtUrl').val();
                $('#imgMiniatura').attr('src', url).show();

                console.log(objJuego);
                //EDITAR
                if (idForm > 0) {
                    for (const i in tablaJuego) {
                        let letJuego = JSON.parse(tablaJuego[i]);
                        if (letJuego.IdJuego == idForm) {
                            tablaJuego[i] = objJuego;
                            break;
                        }

                    }

                } else {
                    // NUEVOS Juegos
                    tablaJuego.push(objJuego);
                }

                localStorage.setItem("tablaJuegoStorage", JSON.stringify(tablaJuego));

                Swal.fire('CAMBIOS  GUARDADOS','','success').then(
                    (result)=>{
                        window.location.replace("./administracion.html");
                    }
                );
            }else if (result.isDenied){
                Swal.fire('CAMBIOS NO GUARDADOS','','info');
            }
        }
    );
    

}

function cargarPagina() {
    if (idForm > 0) {
        // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
        for (const i in tablaJuego) {
            let letJuego = JSON.parse(tablaJuego[i]);
            if (letJuego.IdJuego == idForm) {
                document.getElementById("txtIdJuego").value = letJuego.IdJuego;
                document.getElementById("txtNombre").value = letJuego.nombre;
                document.getElementById("cboGenero").value = letJuego.genero;
                document.getElementById("txtDescripcion").value = letJuego.descripcion;
                document.getElementById("txtPrecio").value = letJuego.precio;
                document.getElementById("txtUrl").value = letJuego.url;
                break;
            }
        }
    }
}

const inputUrl = document.getElementById("txtUrl");

// Agregar un evento al cambiar el valor del input URL
inputUrl.addEventListener("input", () => {
  const url = inputUrl.value.toLowerCase();
  // Verificar si la URL termina con ".jpg" o ".png"
  if (url.endsWith(".jpg") || url.endsWith(".png")) {
    // Mostrar la imagen miniatura
    document.getElementById("imgMiniatura").src = url;
    document.getElementById("imgMiniatura").style.display = "block";
  } else {
    // Ocultar la imagen miniatura y mostrar un mensaje de error
    document.getElementById("imgMiniatura").style.display = "none";
    swal.fire({
      icon: "error",
      title: "Error",
      text: "La URL debe ser de una imagen JPG o PNG",
      confirmButtonText: "Aceptar",
    });
  }
});

// const cargarCategorias = () => {
//     let dropBox = document.getElementById("cboGenero");
//     let opcion;
//     for(let i = 0; i < categorias.length; i++) {
//         opcion = document.createElement("option");
//         opcion.innerText = categorias[i];
//         dropBox.appendChild(opcion);
//     }
// }