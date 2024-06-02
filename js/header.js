document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector('.sidebar');
    var header = document.querySelector('.MenuPrincipal');
    var hamburgerCheckbox = document.getElementById('meio');

    // Event listener para fechar o menu ao clicar fora do header
    document.addEventListener('click', function(event) {
        var isClickInsideHeader = header.contains(event.target);
        var isSidebarOpen = hamburgerCheckbox.checked;

        if (!isClickInsideHeader && isSidebarOpen) {
            hamburgerCheckbox.checked = false;
        }
    });
});

function scrollto(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#Cronologia").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto(".containerSegundo")

    console.log("go to up")
})
document.querySelector("#Curriculo").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto(".ContainerCurriculo")

    console.log("go to up")
})
document.querySelector("#Projetos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto(".containerTerceiro")

    console.log("go to up")
})