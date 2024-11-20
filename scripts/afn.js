

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
    listadoAlfabeto.innerHTML = "";

    console.log("tamano alfabeto: ", automa.alfabeto.length);

    for(i = 0; i < automa.alfabeto.length; i++){
        // Crear una nueva opción
        const newOption = new Option(automa.alfabeto[i], i);
        listadoAlfabeto.add(newOption); //Anadir a la lista
    }
}


//ACCIONES

//------------ ESTADOS ------------

function click_anadirEstado(){
    if(inputNombreEstado.value){
        const nuevoEstado = new Estado(inputNombreEstado.value); //asignar valor del input
        automa.addEstado(nuevoEstado);

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

function click_anadirSimbolo(){
    if(inputSimbolo.value){
        const nuevoSimbolo = inputSimbolo.value; //asignar valor del input
        automa.addAlfabeto(nuevoSimbolo);

        console.log(nuevoSimbolo);

        inputSimbolo.value = '';
    }
    actualizarListaAlfabeto();
}

function click_eliminarSimbolo(){
    if(listadoAlfabeto){
        automa.alfabeto.splice(listadoEstados.value, 1) //Eliminar el valor seleccionado
    }
    actualizarListaAlfabeto(); //actualizar lista de estados
}


//EVENTOS ESTADOS

btnNuevoEstado.addEventListener('click', click_anadirEstado);
btnEliminarEstado.addEventListener('click',click_eliminarEstado);

//EVENTOS ALFABETO

btnNuevoSimbolo.addEventListener('click', click_anadirSimbolo);
btnEliminarSimbolo.addEventListener('click',click_eliminarSimbolo);






 