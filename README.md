# Al-Hosseiny Gad Abbas — Portfolio

Bilingual (Arabic / English) personal portfolio for **Al-Hosseiny Gad Abbas Ezz El-Arab** —
Software Engineer, Flutter & Embedded Systems.

**Live site:** https://kareemgad114-gif.github.io/Alhoseny-gad/

---

## Sections

| Section | Contents |
| --- | --- |
| Hero | Photo, role, live stat counters |
| What I Do | Mobile, embedded, languages, web |
| Resume | Education and training timeline |
| Skills | Proficiency rings (self-assessed) |
| Certificates | 5 certificates, each opening in a lightbox |
| Graduation Project | **Smart Farming** — IoT precision agriculture, with 9 app screens |
| Contact | WhatsApp message composer, email, location |

## Features

- Full **Arabic / English** switch with proper RTL layout (logical CSS properties throughout)
- **Light and dark** themes, dark by default
- Scroll-reveal animations, count-up stats, animated skill rings — all disabled under
  `prefers-reduced-motion`
- Keyboard-accessible lightbox (Escape, focus trap, focus return)
- Nothing is permanently hidden without JavaScript: every animated element renders
  visible at rest if the script fails to load
- Downloadable CV in both languages (`assets/cv/`)

## Graduation project

**Smart Farming** monitors a real farm through four field sensors — soil temperature,
soil moisture, air temperature and air humidity — logged to Firebase Firestore.
My contribution was the **Flutter mobile application**: the interface, the Firestore
data layer, the live dashboard and charts, remote irrigation pump control, the alert
system, and the screens presenting a Random Forest model's crop recommendation and
plant-disease risk output.

## Stack

Plain HTML, CSS and vanilla JavaScript — no build step and no dependencies.
Fonts: Poppins (Latin) and Cairo (Arabic) via Google Fonts.

## Structure

```
index.html             every section's markup
css/style.css          design tokens, layout, animations, both themes
js/script.js           i18n dictionary, language/theme toggles, lightbox, animations
assets/images/         profile photo
assets/certificates/   certificate images (full size + thumbnails)
assets/projects/       Smart Farming app screenshots
assets/cv/             CV PDFs (Arabic / English)
```

## Running locally

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Contact

- Email: Kareemgad114@gmail.com
- WhatsApp: https://wa.me/201044603980
- El-Minya, Egypt
