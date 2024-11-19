// Clase para representar un nodo en la lista de adyacencia
class Nodo {
    constructor(dato, tipoArista) {
        this.dato = dato; // Dato que representa el nodo
        this.tipoArista = tipoArista; // Tipo de arista (0 o 1)
        this.siguiente = null; // Apuntador al siguiente nodo
    }
}

// Función para agregar una arista a la lista de adyacencia
function agregarArista(primero, tipoArista, dato) {
    const nuevoNodo = new Nodo(dato, tipoArista); // Crear un nuevo nodo
    if (!primero) {
        return nuevoNodo; // Si la lista está vacía, este es el primer nodo
    }
    primero.siguiente = agregarArista(primero.siguiente, tipoArista, dato); // Recursivamente agregar el nodo
    return primero;
}

// Función recursiva para verificar si una entrada es aceptada por el autómata
function verificarNFA(grafo, actual, entrada, aceptacion, indice) {
    if (indice === entrada.length) {
        return aceptacion[actual]; // Si se llegó al final de la entrada, verificar aceptación
    }

    let temp = grafo[actual];
    while (temp) {
        if (entrada[indice] === temp.tipoArista) { // Si el carácter coincide con la arista
            if (verificarNFA(grafo, temp.dato, entrada, aceptacion, indice + 1)) {
                return true; // Si se acepta en algún camino, devolver verdadero
            }
        }
        temp = temp.siguiente; // Pasar al siguiente nodo
    }
    return false; // Si ningún camino es aceptado, devolver falso
}

// Función para generar cadenas binarias de tamaño dado
function generarCadenas(arr, tamaño, cadena, fila) {
    if (tamaño === 0) {
        arr[fila.indice] = cadena; // Guardar la cadena generada
        fila.indice++;
        return;
    }
    generarCadenas(arr, tamaño - 1, "0" + cadena, fila); // Generar cadena con '0'
    generarCadenas(arr, tamaño - 1, "1" + cadena, fila); // Generar cadena con '1'
}

// Función principal
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Ingrese el número de nodos: ", (n) => {
        n = parseInt(n);
        const grafo = Array(n + 1).fill(null); // Crear un grafo con n+1 nodos
        const aceptacion = Array(n + 1).fill(0); // Array para estados de aceptación

        let nodosLeidos = 0;

        // Función para leer los datos de cada nodo
        const leerNodo = () => {
            if (nodosLeidos >= n) {
                rl.close();
                procesarGrafo(grafo, aceptacion); // Procesar el grafo después de leer todos los nodos
                return;
            }

            rl.question(
                `Ingrese datos para el nodo ${nodosLeidos + 1} (índice, aceptación, cantidad de aristas): `,
                (linea) => {
                    const [indice, aceptado, numAristas] = linea.split(" ").map(Number);
                    aceptacion[indice] = aceptado; // Guardar estado de aceptación

                    let aristasLeidas = 0;

                    // Función para leer cada arista del nodo
                    const leerArista = () => {
                        if (aristasLeidas >= numAristas) {
                            nodosLeidos++;
                            leerNodo();
                            return;
                        }

                        rl.question(
                            `Ingrese datos para la arista ${aristasLeidas + 1} (tipo de arista, nodo destino): `,
                            (lineaArista) => {
                                const [arista, nodoDestino] = lineaArista.split(" ").map(Number);
                                grafo[indice] = agregarArista(grafo[indice], String(arista), nodoDestino);
                                aristasLeidas++;
                                leerArista();
                            }
                        );
                    };
                    leerArista();
                }
            );
        };
        leerNodo();
    });

    // Procesar el grafo y buscar las cadenas aceptadas
    const procesarGrafo = (grafo, aceptacion) => {
        let tamaño = 1;
        let contador = 0;

        // Verificar si la cadena vacía es aceptada
        if (aceptacion[1] === 1) {
            console.log("e");
            contador++;
        }

        while (contador < 10) {
            const potencia = Math.pow(2, tamaño);
            const arr = Array(potencia).fill("");

            const fila = { indice: 0 };
            generarCadenas(arr, tamaño, "", fila); // Generar cadenas de tamaño dado

            for (let i = 0; i < potencia; i++) {
                const entrada = arr[i];
                const resultado = verificarNFA(grafo, 1, entrada, aceptacion, 0);

                if (resultado) {
                    console.log(entrada); // Imprimir cadena aceptada
                    contador++;
                }

                if (contador === 10) {
                    return;
                }
            }
            tamaño++;
        }
    };
}

main();
