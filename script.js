document.addEventListener("DOMContentLoaded", () => {

  // 1. ANIMACIONES DE SCROLL (Intersection Observer)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


  // 2. SLIDER VINTAGE (Fotos de arriba: barbudo y maxicorte)
  const slidesVintage = document.querySelectorAll(".slide-vintage");
  let indexVintage = 0;

  function mostrarVintage(i) {
    slidesVintage.forEach(s => s.style.opacity = "0");
    if (slidesVintage[i]) {
      slidesVintage[i].style.opacity = "1";
    }
  }

  // Forzamos que la primera foto se vea al arrancar
  if (slidesVintage.length > 0) {
    mostrarVintage(0);
    
    // Cambia cada 4 segundos entre barbudo y maxicorte
    setInterval(() => {
      indexVintage = (indexVintage + 1) % slidesVintage.length;
      mostrarVintage(indexVintage);
    }, 4000);
  }


  // 3. SLIDER DE LA GALERÍA (Fotos de abajo con botones)
  const slidesGaleria = document.querySelectorAll("#galeria .slide");
  let indexGaleria = 0;

  function mostrarGaleria(i) {
    slidesGaleria.forEach(s => s.classList.remove("active"));
    if (slidesGaleria[i]) {
      slidesGaleria[i].classList.add("active");
    }
  }

  if (slidesGaleria.length > 0) {
    setInterval(() => {
      indexGaleria = (indexGaleria + 1) % slidesGaleria.length;
      mostrarGaleria(indexGaleria);
    }, 3000);
  }


  // 4. DÍA AUTOMÁTICO EN EL FORMULARIO
  const fechaInput = document.getElementById("fecha");
  const diaInput = document.getElementById("dia");

  if (fechaInput && diaInput) {
    fechaInput.addEventListener("change", () => {
      const fecha = new Date(fechaInput.value + 'T00:00:00');
      const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
      diaInput.value = dias[fecha.getDay()];
    });
  }


  // 5. ENVÍO DE TURNO POR WHATSAPP
  const form = document.getElementById("turnoForm");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const fecha = document.getElementById("fecha").value;
      const dia = document.getElementById("dia").value;
      const hora = document.getElementById("hora").value;
      const servicio = document.getElementById("servicio").value;

      const mensaje = `Hola! Soy ${nombre}.\nQuiero reservar turno:\n\nServicio: ${servicio}\nFecha: ${dia} ${fecha}\nHora: ${hora}`;
      const url = `https://wa.me/5491158662972?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
      form.reset();
    });
  }
});