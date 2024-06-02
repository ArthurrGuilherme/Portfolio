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

var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        // you can put any JS code here
        swal({
            title: "Sucesso",
            text: "Seu cadastro foi enviado",
            icon: "success",
        })
      });
    });