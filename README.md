<div align="center">

# PromoWeb

**A clean, single-page ad platform built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies, no build step.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-success?style=for-the-badge)

[Repository](https://github.com/zikreddincikla/PromoWeb) · [Report a Bug](https://github.com/zikreddincikla) · [Author](https://github.com/zikreddincikla)

</div>

---

## Overview

PromoWeb is a lightweight, single-page ad platform designed to showcase a business's services, location, and contact information. It runs entirely in the browser with no backend, no database, and not a single `npm install`.

It's built as a demonstration of solid fundamentals: semantic HTML, CSS Grid/Flexbox layout, smooth-scroll navigation, and framework-free DOM manipulation.

> [!TIP]
> Because there's zero build tooling, you can literally double-click `index.html` and the site just works. That's the whole setup process.

## Features

- **Hero section** — full-height landing area with a radial gradient accent and quick links to Contact/Address
- **"Why choose us" section** — a responsive card grid highlighting key selling points
- **About section** — space for a business description
- **Contact section** — click-to-call phone link and click-to-email address, each with a short blurb
- **Address section** — an embedded Google Maps iframe pinpointing the business location
- **Contact form** — name, email, and message fields for visitor complaints/suggestions
- **Back-to-top button** — appears after scrolling and smooth-scrolls back to the hero section
- **Responsive layout** — a dedicated media stylesheet reflows the hero grid, header, and footer for screens under `768px`
- **SEO-ready** — Open Graph and Twitter Card meta tags are already wired up for link previews
- **Social footer** — GitHub, LinkedIn, and Email links

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Structure | HTML5 | Semantic tags (`<header>`, `<main>`, `<section>`, `<address>`, `<footer>`) |
| Styling | CSS3 | CSS Grid + Flexbox, custom properties (`:root` theme colors), media queries |
| Behavior | Vanilla JavaScript (ES6) | DOM API, scroll event listener for the back-to-top button |
| Build tools | None | Zero dependencies, zero config |

## Getting started

No installation required — this project has no dependencies to install.

```bash
git clone https://github.com/zikreddincikla/PromoWeb.git
cd PromoWeb
```

Then simply open `index.html` in your browser. For live-reload during development, you can optionally serve it with any static server:

```bash
npx serve .
```

<details>
<summary><b>Project structure</b></summary>

```
PromoWeb/
├── index.html        # Markup and page structure
├── style.css         # Core layout, theming, and section styling
├── mediastyle.css    # Responsive media queries (mobile breakpoint)
├── script.js         # Back-to-top button scroll logic
├── .LICENSE          # MIT License
└── image/
    ├── icon.ico               # Favicon
    └── Zikreddin_logo_image.jpg  # Social preview image
```

</details>

<details>
<summary><b>Customizing the content</b></summary>

Most of the placeholder Lorem Ipsum text, the phone/email in the Contact section, and the Google Maps embed in the Address section (currently pointing at the Eiffel Tower as a sample location) are meant to be swapped out with real business details before deploying. The theme color is controlled by the `--special-color` CSS variable at the top of `style.css`.

</details>

## Author

Built and maintained by **Zikreddin**.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/zikreddincikla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:zikreddinckl@gmail.com)

## License

Distributed under the MIT License. See `.LICENSE` for details.

---

<div align="center">

© 2026 Zikreddin — All rights reserved.

</div>
