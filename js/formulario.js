document.getElementById('telefone').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

function validateForm() {
    const telefone = document.getElementById('telefone').value;
    const telefoneRegex = /^\d{10,11}$/;

    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, insira um número de telefone válido com 10 a 11 dígitos.');
        return false;
    }

    return true;
}
