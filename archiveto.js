// muestra lo del formulario

function abrirModal(e) {
    if (e) e.preventDefault();
    document.getElementById('modal-registro').classList.add('active');
}

function cerrarModal() {
    document.getElementById('modal-registro').classList.remove('active');
}

function enviarFormulario(e) {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById('form-nombre').value;
    const apellido = document.getElementById('form-apellido').value;
    const mensaje = document.getElementById('form-mensaje').value;

    if (!nombre || !mensaje) return;

    // Crear nuevo comentario
    const lista = document.getElementById('lista-comentarios');

    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';

    nuevoComentario.innerHTML = `
        <p class="comentario-header"><span class="bullet">&#9679;</span><span class="nombre">${nombre} ${apellido}:</span> <span class="corazon">&#9825;</span></p>
        <p class="comentario-texto">${mensaje.replace(/\n/g, '<br>')}</p>
    `;

    // Agregar a la lista
    lista.appendChild(nuevoComentario);

    // Limpiar formulario y cerrar modal
    document.getElementById('form-pogo').reset();
    cerrarModal();
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function (event) {
    const modal = document.getElementById('modal-registro');
    if (event.target == modal) {
        cerrarModal();
    }
}