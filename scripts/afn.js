

automa = new Automata();  // Automata en uso

//ACTUALIZACION DE DATOS

function actualizarListaEstados(){

    listadoEstados.innerHTML = "";

    for(i = 0; i < automa.estados.length; i++){
        // Crear una nueva opción
        const newOption = new Option(automa.estados[i].nombre, i);
        listadoEstados.add(newOption); //Anadir a la lista
    }
}

function actualizarListaAlfabeto(){

}


//ACCIONES

//------------ ESTADOS ------------

function click_anadirEstado(){
    if(inputNombreEstado.value){
        const nuevoEstado = new Estado(inputNombreEstado.value); //asignar valor del input
        automa.estados.push(nuevoEstado);

        inputNombreEstado.value = '';
    }

    console.log(automa.estados[automa.estados.length - 1].nombre);
    actualizarListaEstados();
}

function click_eliminarEstado(){
    if(listadoEstados){
        automa.estados.splice(listadoEstados.value, 1) //Eliminar el valor seleccionado
    }
    actualizarListaEstados(); //actualizar lista de estados
}

// --------- ALFABETO ------------

function click_anadirAlfabeto(){
    if(in)
}


//EVENTOS

btnNuevoEstado.addEventListener('click', click_anadirEstado);
btnEliminarEstado.addEventListener('click',click_eliminarEstado);







 