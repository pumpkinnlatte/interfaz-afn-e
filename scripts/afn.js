
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


