document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after a section link is selected.
  const navMenu = document.getElementById("mainNav");
  document.querySelectorAll('#mainNav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  // Show a back-to-top control after scrolling.
  const backToTop = document.getElementById("backToTop");
  const toggleBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  };
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
