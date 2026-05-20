const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

function setNavOpen(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("nav-open", open);
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    setNavOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setNavOpen(false);
    }
  });
}
