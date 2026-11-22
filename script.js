// COLOQUE AQUI O LINK REAL DO SEU CHECKOUT DA KIWIFY:
const CHECKOUT_URL = "COLE_AQUI_SEU_LINK_DE_CHECKOUT";

document.querySelectorAll("[data-checkout]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (CHECKOUT_URL === "COLE_AQUI_SEU_LINK_DE_CHECKOUT" || !CHECKOUT_URL.trim()) {
      alert("Adicione seu link de checkout no arquivo script.js antes de publicar.");
      return;
    }
    window.location.href = CHECKOUT_URL;
  });
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
