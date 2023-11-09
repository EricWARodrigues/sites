var duvida = document.querySelectorAll(".duvida")

duvida.forEach(
    function (duvida) {
        duvida.addEventListener('click', function () {
            // duvida.classList.add('fundo-verde')
            duvida.classList.toggle('ativa')
        })
    }
)