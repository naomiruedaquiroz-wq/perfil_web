/* =========================================
   CONTADOR ANIMADO — tarjetas de estadísticas
   ========================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Observar las tarjetas de estadísticas
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

statNums.forEach(num => statObserver.observe(num));

/* =========================================
   TIMELINE — aparición al hacer scroll
   ========================================= */
const timelineItems = document.querySelectorAll('.timeline-item');
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => tlObserver.observe(item));

/* =========================================
   COPIAR EMAIL al portapapeles
   ========================================= */
const copyEmailBtn = document.getElementById('copyEmail');
const toast = document.getElementById('toast');

copyEmailBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = 'naomiruedaquiroz@gmail.com';

  navigator.clipboard.writeText(email).then(() => {
    showToast('¡Correo copiado al portapapeles!');
  }).catch(() => {
    // Fallback para navegadores sin soporte de clipboard API
    const temp = document.createElement('input');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
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
