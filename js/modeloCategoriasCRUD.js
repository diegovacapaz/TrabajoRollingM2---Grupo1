//Crud categorias
const lsCategoriasId = "categorias";

let categorias;
if(localStorage.getItem(lsCategoriasId) === null){
    categorias = [];
    localStorage.setItem(lsCategoriasId,JSON.stringify(categorias));
}
else{
    categorias = localStorage.getItem(lsCategoriasId);
    categorias = JSON.parse(categorias);
}

//Crear categorias
const crearCategoria = (categoria) => {
    categoria = categoria.toLowerCase().trim();
    if(!categorias.includes(categoria)){
        categorias.push(categoria);
        localStorage.setItem(lsCategoriasId,JSON.stringify(categorias));
        return "Categoria creada con éxito";
    }
    return "La categoría ya existe";
}
//Eliminar categorias
const borrarCategoria = (categoria) => {
    categoria = categoria.toLowerCase().trim();
    if(categorias.includes(categoria)){
        categorias.splice(categorias.indexOf(categoria), 1);
        localStorage.setItem(lsCategoriasId,JSON.stringify(categorias));
        return "Categoria borrada con éxito";
    }
    return "La categoría no existe";
}

//Testing
// console.log(categorias);
// console.log(crearCategoria("Terror"));
// console.log(crearCategoria("Terror  "));
// console.log(crearCategoria("Aventura"));
// console.log(crearCategoria("terror"));
// console.log(categorias);
// console.log(borrarCategoria("Drama"));
// console.log(borrarCategoria("   aventura "));
// console.log(categorias);

//EXPORTACIÓN
//export {categorias, crearCategoria, borrarCategoria}; ESTA LINEA SE DEBE DESCOMENTAR LUEGO DE TESTEAR, PARA PODER UTILIZARLO COMO MODULO