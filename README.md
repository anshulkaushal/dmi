# DataMatrixIQ static site (Hostinger)

This repo contains a **multi‑page static website** under `site/` that you can upload to Hostinger shared web hosting.

## What’s included

- Pages: `index.html`, `services.html`, `industries.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`
- Assets: `site/assets/css/styles.css`, `site/assets/js/*`, `site/assets/img/*`
- Contact form: uses **mailto** (opens the visitor’s email client). True server-side emailing can be added later.

## Quick preview (local)

Any static file server works. For example (PowerShell):

```powershell
cd site
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Hostinger (shared hosting / cPanel)

1. In Hostinger, open **File Manager**
2. Go to `public_html/`
3. Upload **everything inside** the `site/` folder (not the folder itself), so you end up with:
   - `public_html/index.html`
   - `public_html/services.html`
   - `public_html/assets/...`
4. Visit your temporary Hostinger URL to confirm it loads.

## Update your contact email + footer details

Edit:

- `site/assets/js/config.js`

Set:

- `contactEmail`
- `locationLine`

## Logo

Right now the site uses `site/assets/img/logo.svg` as a placeholder mark.

If you want to use the exact logo asset from your existing site, replace:

- `site/assets/img/logo.svg`
- (optionally) `site/assets/img/favicon.svg`

## Domain connection (DNS)

Once you’re ready, point your domain to Hostinger:

- **A record**: `@` → Hostinger IP shown in your hPanel
- **CNAME**: `www` → `@` (or Hostinger’s target, depending on your setup)

After DNS propagation, the same uploaded files will serve on your domain automatically.

