//Crud categorias
let categorias = [];

//Crear categorias
const crearCategoria = (categoria) => {
    categoria = categoria.toLowerCase();
    if(!categorias.includes(categoria)){
        categorias.push(categoria);
        return "categoria creada con éxito";
    }
    return "La categoría ya existe";
}
//Eliminar categorias
const borrarCategoria = (categoria) => {

}