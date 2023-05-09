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

function guardar() {
    

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
                    idJuego: (idForm >= 0) ? idForm : (tablaJuego.length + 1),
                    Nombre: document.getElementById("txtNombre").value,
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
                        let varJuego = JSON.parse(tablaJuego[i]);
                        if (varJuego.idJuego == idForm) {
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
                        window.location.replace("Juegos.html");
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
            let varJuego = JSON.parse(tablaJuego[i]);
            if (varJuego.idJuego == idForm) {
                document.getElementById("txtIdJuego").value = varJuego.idJuego;
                document.getElementById("txtNombre").value = varJuego.nombre;
                document.getElementById("cboGenero").value = varJuego.genero;
                document.getElementById("txtDescripcion").value = varJuego.descripcion;
                document.getElementById("txtPrecio").value = varJuego.precio;
                document.getElementById("txtUrl").value = varJuego.url;
                break;
            }
        }
    }
}
