let tablaJuego = localStorage.getItem("tablaJuegoStorage");
if (tablaJuego !== null) {
    tablaJuego = JSON.parse(tablaJuego);
} else {
    tablaJuego = [];
}

listar();

function listar() {
    console.log("INGRESANDO A LISTAR...");

    var dataFila = '';

    if(tablaJuego.length > 0){
        for(const i in tablaJuego){
            let varJuego = JSON.parse(tablaJuego[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varJuego.idJuego+"</td>";
            dataFila += "<td>"+varJuego.Nombre+"</td>";
            dataFila += "<td>"+varJuego.genero+"</td>";
            dataFila += "<td>"+varJuego.descripcion+"</td>";
            dataFila += "<td>"+varJuego.precio+"</td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+varJuego.idJuego+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varJuego.idJuego+")'>ELIMINAR</button>"+
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