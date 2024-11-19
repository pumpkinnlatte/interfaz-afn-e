document.addEventListener('DOMContentLoaded', () => {
    // Modal Alfabeto
    const btnAlfabeto = document.querySelector('.btn:nth-child(2)'); // Botón Alfabeto
    const modalAlfabeto = document.getElementById('modal-alfabeto');
    const btnCloseAlfabeto = modalAlfabeto?.querySelector('.btn-accept');

    if (btnAlfabeto && modalAlfabeto && btnCloseAlfabeto) {
        btnAlfabeto.addEventListener('click', () => {
            modalAlfabeto.style.display = 'block';
            modalAlfabeto.style.opacity = 0;
            setTimeout(() => {
                modalAlfabeto.style.opacity = 1;
            }, 10);
            document.body.classList.add('modal-active');
        });

        btnCloseAlfabeto.addEventListener('click', () => {
            modalAlfabeto.style.opacity = 0;
            setTimeout(() => {
                modalAlfabeto.style.display = 'none';
            }, 300);
            document.body.classList.remove('modal-active');
        });
    } else {
        console.error('Elementos del modal Alfabeto no encontrados.');
    }

     // Modal Transiciones
     const btnTransiciones = document.querySelector('.btn:nth-child(3)'); // Botón Transiciones
     const modalTransiciones = document.getElementById('modal-transiciones');
     const btnCloseTransiciones = modalTransiciones?.querySelector('.btn-accept');
 
     if (btnTransiciones && modalTransiciones && btnCloseTransiciones) {
         btnTransiciones.addEventListener('click', () => {
             modalTransiciones.style.display = 'block';
             modalTransiciones.style.opacity = 0;
             setTimeout(() => {
                 modalTransiciones.style.opacity = 1;
             }, 10);
             document.body.classList.add('modal-active');
         });
 
         btnCloseTransiciones.addEventListener('click', () => {
             modalTransiciones.style.opacity = 0;
             setTimeout(() => {
                 modalTransiciones.style.display = 'none';
             }, 300);
             document.body.classList.remove('modal-active');
         });
     } else {
         console.error('Elementos del modal Transiciones no encontrados.');
     }
 
     // Funcionalidad para añadir y eliminar transiciones
     const transicionesList = document.getElementById('transiciones-list');
     const nuevaTransicionInput = document.getElementById('nueva-transicion');
     const btnAddTransicion = modalTransiciones?.querySelector('.btn:nth-child(3)');
     const btnDeleteTransicion = modalTransiciones?.querySelector('.btn:nth-child(2)');
 
     if (transicionesList && nuevaTransicionInput && btnAddTransicion && btnDeleteTransicion) {
         // Añadir transición
         btnAddTransicion.addEventListener('click', () => {
             const nuevaTransicion = nuevaTransicionInput.value.trim();
             if (nuevaTransicion) {
                 const option = document.createElement('option');
                 option.textContent = nuevaTransicion;
                 transicionesList.appendChild(option);
                 nuevaTransicionInput.value = ''; // Limpiar el campo
             } else {
                 alert('Por favor, ingrese una transición válida.');
             }
         });
 
         // Eliminar transición seleccionada
         btnDeleteTransicion.addEventListener('click', () => {
             const seleccionada = transicionesList.value;
             if (seleccionada) {
                 const optionToRemove = [...transicionesList.options].find(option => option.value === seleccionada);
                 if (optionToRemove) transicionesList.removeChild(optionToRemove);
             } else {
                 alert('Seleccione una transición para eliminar.');
             }
         });
     } else {
         console.error('Elementos para manejar las transiciones no encontrados.');
     }
     

    // Modal Estados de Aceptación
    const btnAceptacion = document.querySelector('.btn:nth-child(5)'); // Botón Estados de aceptación
    const modalAceptacion = document.getElementById('modal-aceptacion');
    const btnCloseAceptacion = modalAceptacion?.querySelector('.btn-accept');

    if (btnAceptacion && modalAceptacion && btnCloseAceptacion) {
        btnAceptacion.addEventListener('click', () => {
            modalAceptacion.style.display = 'block';
            modalAceptacion.style.opacity = 0;
            setTimeout(() => {
                modalAceptacion.style.opacity = 1;
            }, 10);
            document.body.classList.add('modal-active');
        });

        btnCloseAceptacion.addEventListener('click', () => {
            modalAceptacion.style.opacity = 0;
            setTimeout(() => {
                modalAceptacion.style.display = 'none';
            }, 300);
            document.body.classList.remove('modal-active');
        });
    } else {
        console.error('Elementos del modal Estados de Aceptación no encontrados.');
    }

    // Modal Estados
    const btnEstados = document.querySelector('.btn:nth-child(1)'); // Botón Estados
    const modalEstados = document.getElementById('modal-estados');
    const btnCloseEstados = modalEstados?.querySelector('.btn-accept');

    if (btnEstados && modalEstados && btnCloseEstados) {
        btnEstados.addEventListener('click', () => {
            modalEstados.style.display = 'block';
            modalEstados.style.opacity = 0;
            setTimeout(() => {
                modalEstados.style.opacity = 1;
            }, 10);
            document.body.classList.add('modal-active');
        });

        btnCloseEstados.addEventListener('click', () => {
            modalEstados.style.opacity = 0;
            setTimeout(() => {
                modalEstados.style.display = 'none';
            }, 300);
            document.body.classList.remove('modal-active');
        });
    } else {
        console.error('Elementos del modal Estados no encontrados.');
    }
});
