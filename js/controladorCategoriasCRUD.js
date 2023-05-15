import {categorias, crearCategoria, borrarCategoria} from "./modeloCategoriasCRUD.js";

let btnNuevaCat = document.getElementById("btnNuevaCat");
let tablaCat = document.getElementById("tablaCategorias");
let botonesBorrarCat = document.getElementsByClassName("btn-borrarCat");

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

const actualizarTablaCat = () => {
    tablaCat.tBodies[0].innerHTML = "";
    let trCat;
    let tdCat;
    for(let i = 0; i < categorias.length; i++){
        trCat = tablaCat.tBodies[0].insertRow();
        tdCat = trCat.insertCell();
        tdCat.innerText = categorias[i];
        tdCat = trCat.insertCell();
        tdCat.appendChild(crearBotonBorrarCat());
        tdCat.setAttribute("class","text-center");
    }
    asignarListenersBorrar();
}

const asignarListenersBorrar = () => {
    for(let i = 0; i < botonesBorrarCat.length; i++){
        botonesBorrarCat[i].addEventListener("click", () => {
            borrarCategoria(categorias[i]);
            actualizarTablaCat();
        });
    }
}

const crearBotonBorrarCat = () => {
    let borrar = document.createElement("i");
    borrar.setAttribute("class","bi bi-x-circle-fill btn-borrarCat");
    return borrar;
}

actualizarTablaCat();
