import {categorias, crearCategoria, borrarCategoria} from "./modeloCategoriasCRUD.js";

let btnNuevaCat = document.getElementById("btnNuevaCat");

btnNuevaCat.addEventListener("click", (e) => {
    e.preventDefault();
    let nuevaCategoria = document.getElementById("inputNuevaCat");
    let mensajeCat = document.getElementById("nuevaCatMje");
    const nombreCat = nuevaCategoria.value;
    if(nombreCat){
        mensajeCat.innerText = crearCategoria(nombreCat);
        nuevaCategoria.value = "";
    }
});

