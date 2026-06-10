// Interactividad: mensaje dinámico al hacer clic en títulos
document.querySelectorAll(".titulo-animado").forEach(titulo => {
    titulo.addEventListener("click", () => {
        alert("Has hecho clic en: " + titulo.textContent);
    });
});
