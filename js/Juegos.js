let tablaJuego = localStorage.getItem("tablaJuegoStorage");
if (tablaJuego !== null) {
    tablaJuego = JSON.parse(tablaJuego);
} else {
    tablaJuego = [];
}

listar();

function listar() {
    console.log("INGRESANDO A LISTAR...");

    let dataFila = '';

    if(tablaJuego.length > 0){
        for(const i in tablaJuego){
            let letJuego = JSON.parse(tablaJuego[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+letJuego.IdJuego+"</td>";
            dataFila += "<td>"+letJuego.nombre+"</td>";
            dataFila += "<td>"+letJuego.genero+"</td>";
            dataFila += "<td>"+letJuego.descripcion+"</td>";
            dataFila += "<td>"+letJuego.precio+"</td>";
            dataFila += "<td><img src='" + letJuego.url + "' alt='" + letJuego.nombre + " thumbnail' width='60' height='50' ></td>";
            // dataFila += "<td>"+
            //             "<button type='button' class='btn btn-warning' onclick='abrirForm("+letJuego.IdJuego+")'>EDITAR</button>"+
            //             "</td>";
            dataFila += "<td>"+
                        "<i class='bi bi-x-circle-fill btn-borrarJuego' onclick='eliminarItem("+letJuego.IdJuego+")'></i>"+
                        "</td>";
            // dataFila += "<td>"+
            //             "<button type='button' class='btn btn-info' onclick='eliminarItem("+letJuego.IdJuego+")'>ELIMINAR</button>"+
            //             "</td>";
            dataFila += "<td>"+
                        "<i class='bi bi-pencil-fill btn-editar' onclick='eliminarItem("+letJuego.IdJuego+")'></i>"+
                        "</td>";
            dataFila += "</tr>";

            

        }
        
        document.getElementById("dataJuego").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataJuego").innerHTML = "<tr><td colspan='7'>No hay Juegos</td></tr>";
    }
}

function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("./Juegos-form.html");
}

function eliminarItem(idItem){
    for(const i in tablaJuego){
        let letJuego = JSON.parse(tablaJuego[i]);
        if(letJuego.IdJuego == idItem){
            tablaJuego.splice(i,1);
            localStorage.setItem("tablaJuegoStorage", JSON.stringify(tablaJuego));
        }
    }
    listar()
}