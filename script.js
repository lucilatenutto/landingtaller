function abrirModal(e) {
    if (e) e.preventDefault();
    // Ensure form is visible and success is hidden when opening
    document.getElementById('form-pogo').style.display = 'flex';
    document.getElementById('pogo-success').style.display = 'none';
    document.getElementById('modal-registro').classList.add('active');
}

function cerrarModal() {
    document.getElementById('modal-registro').classList.remove('active');
}

function enviarFormulario(e) {
    e.preventDefault();

    const nombre = document.getElementById('form-nombre').value;
    const apellido = document.getElementById('form-apellido').value;
    const mensaje = document.getElementById('form-mensaje').value;

    if (!nombre || !mensaje) return;

    const lista = document.getElementById('lista-comentarios');

    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';

    nuevoComentario.innerHTML = `
        <p class="comentario-header"><span class="bullet">&#9679;</span><span class="nombre">${nombre} ${apellido}:</span> <span class="corazon">&#9825;</span></p>
        <p class="comentario-texto">${mensaje.replace(/\n/g, '<br>')}</p>
    `;

    lista.appendChild(nuevoComentario);

    // Show success message
    document.getElementById('form-pogo').style.display = 'none';
    document.getElementById('pogo-success').style.display = 'flex';

    // Reset form fields
    document.getElementById('form-pogo').reset();
}

window.onclick = function (event) {
    const modal = document.getElementById('modal-registro');
    if (event.target == modal) {
        cerrarModal();
    }
}