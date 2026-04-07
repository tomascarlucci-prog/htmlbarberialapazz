document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // SLIDER
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function mostrar(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    mostrar(index);
  }, 3000);

  // DÍA AUTOMÁTICO
  const fechaInput = document.getElementById("fecha");
  const diaInput = document.getElementById("dia");

  fechaInput.addEventListener("change", () => {
    const fecha = new Date(fechaInput.value);
    const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    diaInput.value = dias[fecha.getDay()];
  });

  // WHATSAPP
  const form = document.getElementById("turnoForm");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const dia = document.getElementById("dia").value;
    const hora = document.getElementById("hora").value;
    const servicio = document.getElementById("servicio").value;

    const mensaje = `Hola! Soy ${nombre}.
Quiero reservar turno:

Servicio: ${servicio}
Fecha: ${dia} ${fecha}
Hora: ${hora}`;

    const url = `https://wa.me/5491158662972?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    form.reset();
  });

});

