
class Automata {

    constructor(){
        this.alfabeto = [];
        this.estados = [];
        this.estadoIncio;
        this.estadosAceptacion = [];
    }

    //Getters

    get alfabeto(){
        return this.alfabeto;
    }

    get estados(){
        return this.estados;
    }

    get estadoIncio(){
        return this.estadoIncio;
    }

    get estadosAceptacion(){
        return this.estadosAceptacion;
    }

    //Setters

    set alfabeto(alfabeto){
        this.alfabeto = alfabeto;
    }

    addToAlfabeto(caracter){
        this.alfabeto.push(caracter);
    }

    set estados(estados){
        this.estados = estados;
    }

    addToEstados(estadoNuevo){
        this.estados.psuh(estadoNuevo);
    }

    set estadoIncio(estadoI){
        this.estadoIncio = estadoI;
    }

    set estadosAceptacion(estadosAceptacion){
        this.estadosAceptacion = estadosAceptacion;
    }

    addToEstadosAceptacion(nuevoEst){
        this.estadosAceptacion.push(nuevoEst);
    }

}

// Clase para representar un estado en la lista de adyacencia
class Estado {
    Estado(nombre, simbolo) {
        this.nombre = nombre; // nombre del estado
        this.simbolo = simbolo; // simbolo para comparar
        this.adyacencias = [] //Lista de adyacencias (Transiciones)
    }

    //Setter

    set nombre(nombre){
        this.nombre = nombre;
    }

    set simbolo(simbolo){
        this.simbolo;
    }

    set adyacencias(adyacencias){
        this.adyacencias = adyacencias;
    }

    addToAdyacencias(nuevaAdyacencia){
        this.adyacencias.push(nuevaAdyacencia);
    }

    //Getter

    get nombre(){
        return this.nombre;
    }

    get simbolo(){
        return this.simbolo;
    }

    get adyacencias(){
        return this.adyacencias;
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


 const automa = new Automata();

 



