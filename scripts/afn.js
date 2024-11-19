
class Automata {

    Automata(){
        this.alfabeto = [];
        this.estados = [];
        this.estadoIncio;
        this.estadosAceptacion = [];
    }

}

// Clase para representar un estado en la lista de adyacencia
class Estado {
    Estado(nombre, simbolo) {
        this.nombre = nombre; // nombre del estado
        this.simbolo = simbolo; // simbolo para comparar
        this.adyacencias = [] //Lista de adyacencias (Transiciones)
    }

    verificarValor(entry){

        if(!entry.isEmpty()){
            
            if(entry == simbolo){
                return true;
            } else {
                return false;
            }

        } else {
            console.log("Valor vacio");
        }

    }
}


<<<<<<< HEAD

main();
=======
>>>>>>> 0dc00145589ec36b9996c4a5a3c9a8c0e15f80fb
