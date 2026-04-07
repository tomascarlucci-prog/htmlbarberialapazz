document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ANIMACIONES (PRO)
  // =========================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


  // =========================
  // SLIDER PRO
  // =========================
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  let interval;

  function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function siguiente() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  }

  function anterior() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  }

  function iniciarSlider() {
    interval = setInterval(siguiente, 3000);
  }

  function detenerSlider() {
    clearInterval(interval);
  }

  if (slides.length > 0) {
    iniciarSlider();

    const slider = document.querySelector(".slider");

    slider.addEventListener("mouseenter", detenerSlider);
    slider.addEventListener("mouseleave", iniciarSlider);

    document.querySelector(".next").addEventListener("click", siguiente);
    document.querySelector(".prev").addEventListener("click", anterior);
  }


  // =========================
  // TURNOS → WHATSAPP REAL
  // =========================
  const form = document.getElementById("turnoForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const fecha = document.getElementById("fecha").value;
      const servicio = document.getElementById("servicio").value;

      const mensaje = `Hola, soy ${nombre}. Quiero reservar un turno para ${servicio} el día ${fecha}`;

      const url = `https://wa.me/5491158662972?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");

      form.reset();
    });
  }

});