function mostrarAviso() {
  var aviso = document.querySelector(".aviso");
  aviso.classList.add("mostrar");
  setTimeout(function() {
    aviso.classList.remove("mostrar");
  }, 4000);
}

function abrirJogo(id) {
  var jogoLink = document.querySelector("#jogo-link-" + id);
  window.open(jogoLink.href, "_blank");
}

window.onload = mostrarAviso;
