(function(){
  const cfg = window.DMIQ_SITE_CONFIG || {};
  const setText = (sel, txt) => {
    document.querySelectorAll(sel).forEach(n => n.textContent = txt);
  };

  if (cfg.brandName) setText("[data-brand-name]", cfg.brandName);
  if (cfg.tagline) setText("[data-brand-tagline]", cfg.tagline);
  if (cfg.locationLine) setText("[data-location-line]", cfg.locationLine);

  if (cfg.contactEmail) {
    document.querySelectorAll("[data-contact-email]").forEach(a => {
      a.textContent = cfg.contactEmail;
      if (a.tagName.toLowerCase() === "a") a.setAttribute("href", `mailto:${cfg.contactEmail}`);
    });
    const form = document.querySelector("[data-contact-form]");
    if (form) form.setAttribute("data-mailto", cfg.contactEmail);
  }
})();

