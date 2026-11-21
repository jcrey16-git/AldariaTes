// Menú desplegable en móvil
const boton = document.querySelector('.menu-boton');
const lista = document.querySelector('nav ul');
if (boton && lista) {
  boton.addEventListener('click', () => {
    const abierto = lista.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto);
  });
}
