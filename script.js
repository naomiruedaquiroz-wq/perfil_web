showToast('¡Correo copiado al portapapeles!');
  });
});
 
function showToast(msg) {
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2800);
}
 
/* =========================================
   TARJETAS DE INTERESES — efecto teclado
   ========================================= */
document.querySelectorAll('.interest-card').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.style.transform = 'translateY(-4px)';
      setTimeout(() => card.style.transform = '', 300);
    }
  });
});
