

automa = new Automata();  // Automata en uso

//ACTUALIZACION DE DATOS

function actualizarListaEstados(){
    
}



//ACCIONES

function click_anadirEstado(){
    if(inputNombreEstado.value){
        const nuevoEstado = new Estado(inputNombreEstado.value); //asignar valor del input
        automa.estados.push(nuevoEstado);

        inputNombreEstado.value = '';
    }

    console.log(automa.estados[automa.estados.length - 1].nombre);
}


//EVENTOS

btnNuevoEstado.addEventListener('click', click_anadirEstado);







 