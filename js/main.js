(function () {
  const company = {
    name: "Apex Engineering Concern",
    shortName: "Apex Concern",
    phonePrimary: "+91 33 46019249",
    phoneMobile: "9903468068",
    whatsapp: "918697623530",
    email: "apexconcern@hotmail.com",
    address: "38, Netaji Subhas Road, Ground Floor, Kolkata - 700001",
    gst: "19AAFFA6911P1Z1",
  };

  const page = document.body.dataset.page || "home";

  function headerHTML() {
    return `
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="topbar">
        <div class="container topbar-inner">
          <div class="topbar-links">
            <a href="tel:+913346019249"><i class="fa-solid fa-phone"></i> ${company.phonePrimary} | ${company.phoneMobile}</a>
            <a href="mailto:${company.email}"><i class="fa-regular fa-envelope"></i> ${company.email}</a>
          </div>
          <a href="https://wa.me/${company.whatsapp}" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${company.name} home">
            <img src="images/brand/apex-logo.png" alt="${company.name}">
            <span class="brand-copy">
              <span class="brand-name">${company.shortName}</span>
              <span class="brand-tag">Process control instrumentation</span>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span></span>
          </button>
          <nav class="site-nav" aria-label="Primary">
            <a href="index.html" class="${page === "home" ? "is-active" : ""}">Home</a>
            <a href="about.html" class="${page === "about" ? "is-active" : ""}">About Us</a>
            <a href="products.html" class="${page === "products" ? "is-active" : ""}">Products</a>
            <a href="contact.html" class="${page === "contact" ? "is-active" : ""}">Contact Us</a>
            <a class="btn btn-primary" href="contact.html">Enquire Now</a>
          </nav>
        </div>
      </header>
    `;
  }

  function footerHTML() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="images/brand/apex-logo.png" alt="${company.name}">
              <p>Trusted source for pressure, flow, temperature, and level measurement instruments. Genuine industrial products, competitive pricing, and reliable technical support.</p>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3>Focus areas</h3>
              <ul>
                <li>Pressure measurement</li>
                <li>Temperature control</li>
                <li>Flow instruments</li>
                <li>Level measurement</li>
              </ul>
            </div>
            <div>
              <h3>Visit us</h3>
              <p>${company.address}</p>
              <p><a href="tel:+913346019249">${company.phonePrimary}</a><br>
              <a href="tel:+919903468068">${company.phoneMobile}</a></p>
              <p><a href="mailto:${company.email}">${company.email}</a></p>
            </div>
          </div>
          <div class="legal">© ${new Date().getFullYear()} ${company.name}. All rights reserved.</div>
        </div>
      </footer>
    `;
  }

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.outerHTML = headerHTML();
  if (footerMount) footerMount.outerHTML = footerHTML();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const note = document.getElementById("form-note");
      if (note) note.classList.add("is-visible");
      form.reset();
    });
  }
})();
