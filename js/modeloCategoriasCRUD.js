//Crud categorias
let categorias = [];

//Crear categorias
const crearCategoria = (categoria) => {
    categoria = categoria.toLowerCase();
    if(!categorias.includes(categoria)){
        categorias.push(categoria);
        return "Categoria creada con éxito";
    }
    return "La categoría ya existe";
}
//Eliminar categorias
const borrarCategoria = (categoria) => {
    categoria = categoria.toLowerCase();
    if(categorias.includes(categoria)){
        categorias.splice(categorias.indexOf(categoria), 1);
        return "Categoria borrada con éxito";
    }
    return "La categoría no existe";
}

console.log(categorias);
console.log(crearCategoria("Terror"));
console.log(crearCategoria("Aventura"));
console.log(crearCategoria("terror"));
console.log(categorias);