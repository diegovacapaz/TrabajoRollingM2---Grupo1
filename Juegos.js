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
            dataFila += "<td>"+letJuego.idJuego+"</td>";
            dataFila += "<td>"+letJuego.nombre+"</td>";
            dataFila += "<td>"+letJuego.genero+"</td>";
            dataFila += "<td>"+letJuego.descripcion+"</td>";
            dataFila += "<td>"+letJuego.precio+"</td>";
            dataFila += "<td><img src='" + letJuego.url + "' alt='" + letJuego.Nombre + " thumbnail' width='60' height='50' ></td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+letJuego.idJuego+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+letJuego.idJuego+")'>ELIMINAR</button>"+
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
    window.location.replace("Juegos-form.html");
}

function eliminarItem(idItem){
    for(const i in tablaJuego){
        let varJuego = JSON.parse(tablaJuego[i]);
        if(varJuego.idJuego == idItem){
            tablaJuego.splice(i,1);
            localStorage.setItem("tablaJuegoStorage", JSON.stringify(tablaJuego));
        }
    }
    listar()
}
