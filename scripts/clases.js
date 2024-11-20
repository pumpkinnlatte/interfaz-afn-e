class Automata {
    constructor(){
        this._alfabeto = [];
        this._estados = [];
        this._estadoInicio;
        this._estadosAceptacion = [];
    }

    //Setters

    set alfabeto(nuevoAlfabeto){
        this._alfabeto = nuevoAlfabeto;
    }

    set estados(nuevosEstados){
        this._estados = nuevosEstados;
    }

    set estadoIncio(estadoI){
        this._estadoIncio = estadoI;
    }

    set estadosAceptacion(estadosAcep){
        this._estadosAceptacion = estadosAcep;
    }

    addAlfabeto(caracter){
        this._alfabeto.push(caracter);
    }


    addEstado(estadoNuevo){
        this._estados.psuh(estadoNuevo);
    }

    addEstadoAceptacion(nuevoEst){
        this._estadosAceptacion.push(nuevoEst);
    }

    //Getters

    get alfabeto(){
        return this._alfabeto;
    }
    
    get estados(){
        return this._estados;
    }

    get estadoInicio(){
        return this._estadoInicio;
    }

    get estadosAceptacion(){
        return this._estadosAceptacion;
    }

}

// Clase para representar un estado en la lista de adyacencia
class Estado {
    constructor(nombre) {
        this._nombre = nombre; // nombre del estado
        this._simbolo;         // simbolo para comparar
        this._adyacencias = [] //Lista de adyacencias (Transiciones)
    }

    //Setter

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    set simbolo(nuevoSimbolo){
        this._simbolo = nuevoSimbolo;
    }

    addAdyacencia(nuevaAdyacencia){
        this._adyacencias.push(nuevaAdyacencia);
    }

    //Getter

    get nombre(){
        return this._nombre;
    }

    get simbolo(){
        return this._simbolo;
    }

    get adyacencias(){
        return this._adyacencias;
    }
    

    verificarValor(entry){

        if(!entry.isEmpty()){
            
            if(entry == this._simbolo){
                return true;
            } else {
                return false;
            }

        } else {
            console.log("Valor vacio");
        }

    }
}
