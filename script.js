document.addEventListener("DOMContentLoaded", function () {
  // Menu hambúrguer toggle
  document
    .getElementById("menu-hamburger")
    .addEventListener("click", function () {
      document.getElementById("nav-links").classList.toggle("active");
    });

  // Intersection Observer for quadro1 and quadro4
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation is added
      }
    });
  }, observerOptions);

  const quadro1 = document.querySelector(".quadro-1 img");
  const quadro4 = document.querySelector(".quadro-4 img");

  observer.observe(quadro1);
  observer.observe(quadro4);

  // Scroll event for areaOrganica
  const areaOrganica = document.querySelector(".overlay-text-2");

  function handleScroll() {
    const rect = areaOrganica.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      areaOrganica.classList.add("animate");
      window.removeEventListener("scroll", handleScroll); // Remove o listener após a animação ser ativada
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Verifica a posição inicial
});
