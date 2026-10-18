document.addEventListener('DOMContentLoaded', () => {

  // INTERACCIÓN 1: Menú adaptable y accesible (Hamburguesa)
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // INTERACCIÓN 2: Filtro dinámico de actividades del programa
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // VALIDACIÓN ACCESIBLE DEL FORMULARIO DE INSCRIPCIÓN
  const signupForm = document.getElementById('signupForm');
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const nombreError = document.getElementById('nombreError');
  const emailError = document.getElementById('emailError');
  const formSuccess = document.getElementById('formSuccess');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      nombreError.textContent = '';
      emailError.textContent = '';
      formSuccess.textContent = '';

      if (nombreInput.value.trim() === '') {
        nombreError.textContent = 'Por favor, ingrese su nombre completo.';
        isValid = false;
      }

      if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido.';
        isValid = false;
      }

      if (isValid) {
        formSuccess.textContent = '¡Inscripción confirmada con éxito! Nos vemos en el CCMQ en Quito.';
        signupForm.reset();
      }
    });
  }
});