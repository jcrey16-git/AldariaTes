// Menú desplegable en móvil
const boton = document.querySelector('.menu-boton');
const lista = document.querySelector('nav ul');
if (boton && lista) {
  boton.addEventListener('click', () => {
    const abierto = lista.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto);
  });
}

// Aparición de elementos al hacer scroll
const elementos = document.querySelectorAll(
  '.tarjeta, .era, .hito, .autor, .cabecera-pagina, pre'
);

// Retraso escalonado dentro de cada rejilla de tarjetas
document.querySelectorAll('.rejilla').forEach(rejilla => {
  rejilla.querySelectorAll('.tarjeta').forEach((t, i) => {
    t.style.setProperty('--d', `${Math.min(i, 5) * 0.08}s`);
  });
});

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  elementos.forEach(el => observador.observe(el));
} else {
  elementos.forEach(el => el.classList.add('visible'));
}
