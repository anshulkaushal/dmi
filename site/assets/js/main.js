function setCurrentNav(){
  const path = (location.pathname || "/").toLowerCase();
  const page = path.split("/").filter(Boolean).pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (!href) return;
    const hrefPage = href.split("/").filter(Boolean).pop() || "index.html";
    if (hrefPage === page) a.setAttribute("aria-current", "page");
  });
}

function setupMobileMenu(){
  const btn = document.querySelector("[data-menu-btn]");
  const links = document.querySelector("[data-navlinks]");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
}

function setupContactForm(){
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const to = form.getAttribute("data-mailto") || "";
  const status = document.querySelector("[data-form-status]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = encodeURIComponent(`Website inquiry — ${name || "New lead"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    if (status) {
      status.textContent = "Opening your email client… (email sending can be wired up later)";
    }

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
    location.href = mailto;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentNav();
  setupMobileMenu();
  setupContactForm();
});

