const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-navToggle]");
const navLinks = document.querySelectorAll("[data-navLink]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

const logo = document.getElementById('logoTransportio');
// Função para alterar a cor da logo ao rolar
window.addEventListener('scroll', function() {
  // Obtém 100% da altura da viewport (100vh)
  const centoVh = window.innerHeight;

  // Se o scroll ultrapassar 100vh
  if (window.scrollY > centoVh) {
      logo.style.color = 'black'; // Muda a cor para preta
  } else {
      logo.style.color = 'white'; // Se estiver antes de 100vh, cor branca
  }
});

const navLinks1 = document.querySelectorAll('.navbar-link');
const headerContact = document.querySelectorAll('.header-contact');
// Função para alterar a cor dos links da navbar ao rolar
window.addEventListener('scroll', function() {
  // Obtém 100% da altura da viewport (100vh)
  const centoVh = window.innerHeight;

  // Verifica se o scroll ultrapassou 100vh
  if (window.scrollY > centoVh) {
      // Se ultrapassar, muda a cor dos links para preto
      navLinks1.forEach(link => {
          link.style.color = 'black';
      });
      headerContact.forEach(link => {
        link.style.color = 'black';
    });
  } else {
      // Se não, a cor volta para branco
      navLinks1.forEach(link => {
          link.style.color = 'white';
      });

      headerContact.forEach(link => {
        link.style.color = 'white';
    });
  }
});
