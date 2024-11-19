document.addEventListener('DOMContentLoaded', () => {
    // Variable para controlar si hay un modal abierto
    let isModalOpen = false;

    const showModal = (modal) => {
        if (isModalOpen) return; // No permitir abrir otro modal si ya hay uno abierto
        modal.style.display = 'block';
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
        document.body.classList.add('modal-active');
        isModalOpen = true; // Marcar que un modal está abierto
    };

    const closeModal = (modal) => {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.classList.remove('modal-active');
        isModalOpen = false; // Marcar que ya no hay ningún modal abierto
    };

    // Modal Alfabeto
    const btnAlfabeto = document.querySelector('.btn:nth-child(2)'); // Botón Alfabeto
    const modalAlfabeto = document.getElementById('modal-alfabeto');
    const btnCloseAlfabeto = modalAlfabeto?.querySelector('.btn-accept');

    if (btnAlfabeto && modalAlfabeto && btnCloseAlfabeto) {
        btnAlfabeto.addEventListener('click', () => showModal(modalAlfabeto));
        btnCloseAlfabeto.addEventListener('click', () => closeModal(modalAlfabeto));
    }

    // Modal Transiciones
    const btnTransiciones = document.querySelector('.btn:nth-child(3)'); // Botón Transiciones
    const modalTransiciones = document.getElementById('modal-transiciones');
    const btnCloseTransiciones = modalTransiciones?.querySelector('.btn-accept');

    if (btnTransiciones && modalTransiciones && btnCloseTransiciones) {
        btnTransiciones.addEventListener('click', () => showModal(modalTransiciones));
        btnCloseTransiciones.addEventListener('click', () => closeModal(modalTransiciones));
    }

    // Modal Estados de Aceptación
    const btnAceptacion = document.querySelector('.btn:nth-child(5)'); // Botón Estados de aceptación
    const modalAceptacion = document.getElementById('modal-aceptacion');
    const btnCloseAceptacion = modalAceptacion?.querySelector('.btn-accept');

    if (btnAceptacion && modalAceptacion && btnCloseAceptacion) {
        btnAceptacion.addEventListener('click', () => showModal(modalAceptacion));
        btnCloseAceptacion.addEventListener('click', () => closeModal(modalAceptacion));
    }

    // Modal Estados
    const btnEstados = document.querySelector('.btn:nth-child(1)'); // Botón Estados
    const modalEstados = document.getElementById('modal-estados');
    const btnCloseEstados = modalEstados?.querySelector('.btn-accept');

    if (btnEstados && modalEstados && btnCloseEstados) {
        btnEstados.addEventListener('click', () => showModal(modalEstados));
        btnCloseEstados.addEventListener('click', () => closeModal(modalEstados));
    }
});
