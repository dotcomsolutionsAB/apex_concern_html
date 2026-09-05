/**
 * main.js — per-page orchestrator. Mounts the shared header/footer on
 * every page, then mounts and initialises homepage-only sections.
 * Actual markup comes from render.js; actual data comes from data.js.
 */
(function () {
  "use strict";

  var page = document.body.dataset.page || "home";

  var headerMount = document.getElementById("site-header");
  var footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.outerHTML = SiteRender.header(page);
  if (footerMount) footerMount.outerHTML = SiteRender.footer();

  // Product detail modal shell — shared across every page that can render
  // a product card (home's featured carousel, the products grid).
  if (!document.getElementById("product-modal")) {
    document.body.insertAdjacentHTML("beforeend", SiteRender.productModalShell());
  }
  if (!document.getElementById("image-lightbox")) {
    document.body.insertAdjacentHTML("beforeend", SiteRender.imageLightboxShell());
  }

  if (page === "home") {
    var heroMount = document.getElementById("hero-mount");
    var featureMount = document.getElementById("feature-boxes-mount");
    var categoryMount = document.getElementById("category-showcase-mount");
    var capabilitiesMount = document.getElementById("capabilities-mount");
    var brandsMount = document.getElementById("our-brands-mount");
    var whyMount = document.getElementById("why-choose-us-mount");
    var featuredMount = document.getElementById("featured-products-mount");
    var ctaMount = document.getElementById("cta-band-mount");

    if (heroMount) heroMount.outerHTML = SiteRender.heroSlider();
    if (featureMount) featureMount.outerHTML = SiteRender.featureBoxes();
    if (categoryMount) categoryMount.outerHTML = SiteRender.categoryShowcase();
    if (capabilitiesMount) capabilitiesMount.outerHTML = SiteRender.capabilitiesAlternating();
    if (brandsMount) brandsMount.outerHTML = SiteRender.ourBrands();
    if (whyMount) whyMount.outerHTML = SiteRender.whyChooseUs();
    if (featuredMount) featuredMount.outerHTML = SiteRender.featuredProducts();
    if (ctaMount) ctaMount.outerHTML = SiteRender.ctaBand();

    var heroEl = document.getElementById("hero-slider");
    if (heroEl && window.HeroSlider) new HeroSlider(heroEl);

    var carouselEl = document.getElementById("featured-carousel");
    if (carouselEl && window.Carousel) new Carousel(carouselEl);
  }

  if (page === "products") {
    var productsMount = document.getElementById("products-mount");
    if (productsMount) productsMount.outerHTML = '<div id="products-mount">' + SiteRender.productGrid() + "</div>";
  }

  // Any page may include a bare CTA band mount point (about/contact/products).
  if (page !== "home") {
    var genericCta = document.getElementById("cta-band-mount");
    if (genericCta) genericCta.outerHTML = SiteRender.ctaBand();
  }
})();
