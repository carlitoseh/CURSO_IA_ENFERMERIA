// Copiar el contenido de cada caja de prompt al portapapeles
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".prompt-caja").forEach(function (caja) {
    var boton = document.createElement("button");
    boton.className = "boton-copiar";
    boton.type = "button";
    boton.textContent = "Copiar";

    boton.addEventListener("click", function () {
      // Texto del prompt sin la etiqueta ni el botón
      var texto = caja.querySelector(".prompt-texto");
      var contenido = texto ? texto.innerText : caja.innerText;

      navigator.clipboard.writeText(contenido.trim()).then(function () {
        boton.textContent = "¡Copiado!";
        setTimeout(function () { boton.textContent = "Copiar"; }, 1800);
      }).catch(function () {
        boton.textContent = "Error";
        setTimeout(function () { boton.textContent = "Copiar"; }, 1800);
      });
    });

    caja.appendChild(boton);
  });
});
