document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }

  const alertCloseButtons = document.querySelectorAll('.alert button');
  alertCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.alert').remove();
    });
  });

  const modal = document.getElementById('donationModal');
  const openModalButtons = document.querySelectorAll('[data-open-modal]');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('is-open');
    });
  });

  closeModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.remove('is-open');
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-open');
    });
  }

  window.showToast = function (message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span><button type="button">&times;</button>`;
    container.appendChild(toast);

    toast.querySelector('button').addEventListener('click', () => toast.remove());
    setTimeout(() => toast.remove(), 3500);
  };

  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modal) modal.classList.remove('is-open');
      window.showToast('Doação registrada com sucesso!');
      donationForm.reset();
    });
  }

  const volunteerForm = document.getElementById('volunteerForm');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (volunteerForm.checkValidity()) {
        window.showToast('Inscrição enviada com sucesso!');
        volunteerForm.reset();
      } else {
        window.showToast('Preencha os campos obrigatórios!');
      }
    });
  }
});


/* Algumas funções e nomes de variáveis foram pesquisadas e adaptadas da IA para o projeto */