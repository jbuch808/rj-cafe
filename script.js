
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  const overlay = document.getElementById("mobileOverlay");
  const isOpen = nav.classList.toggle("active");
  overlay.classList.toggle("active");

  // Optional: disable background scroll
  document.body.style.overflow = isOpen ? "hidden" : "auto";
}
document.addEventListener("DOMContentLoaded", () => {
  if (typeof SITE_NAME !== "undefined") {
    const siteNameElem = document.getElementById("site-name");
    const headerH1 = document.querySelector("header h1");
    const footerText = document.getElementById("footer-text");
    if (siteNameElem) siteNameElem.textContent = SITE_NAME;
    if (headerH1) headerH1.textContent = SITE_NAME;
    if (footerText) footerText.textContent = `© 2025 ${SITE_NAME}`;
  }
});
