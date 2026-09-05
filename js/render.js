/**
 * SiteRender — builds HTML strings for shared components from SiteData.
 * Keeps index.html/about.html/products.html/contact.html free of
 * hardcoded content: every page calls these functions and mounts the result.
 */
(function (global) {
  "use strict";

  var data = global.SiteData;

  function esc(str) {
    return String(str == null ? "" : str);
  }

  function slugify(str) {
    return String(str || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-+|-+$)/g, "");
  }

  function categoryName(slug) {
    var found = data.productCategories.filter(function (c) { return c.slug === slug; })[0];
    return found ? found.name : slug;
  }

  // A product/category with no explicit "brand" field belongs to the site's
  // original, sole brand — this keeps every pre-existing Metrix+ record
  // untouched while still letting new, brand-tagged records (Multispan) work
  // with the same code paths.
  function brandOf(obj) {
    return (obj && obj.brand) || "metrix";
  }

  function brandName(slug) {
    var found = (data.brands || []).filter(function (b) { return b.slug === slug; })[0];
    return found ? found.name : slug;
  }

  // ---------- Site search (header search bar + live results dropdown) ----------
  // Matches across both brands' product names, model numbers and category /
  // sub-category names. Apex's catalogue has no price data for either brand,
  // so results intentionally show brand + model/sub-category instead of a
  // price (never invented).
  function normalizeSearch(str) {
    return String(str || "").toLowerCase();
  }

  function searchProducts(query, limit) {
    var q = normalizeSearch(query).trim();
    if (!q) return [];
    var terms = q.split(/\s+/).filter(Boolean);
    var scored = [];
    data.products.forEach(function (p) {
      var nameHay = normalizeSearch(p.name);
      var fullHay = normalizeSearch(
        [p.name, p.baseModel, categoryName(p.category), p.subCategory, brandName(brandOf(p))].filter(Boolean).join(" ")
      );
      var matchesAll = terms.every(function (t) { return fullHay.indexOf(t) !== -1; });
      if (!matchesAll) return;
      var nameMatch = terms.every(function (t) { return nameHay.indexOf(t) !== -1; });
      scored.push({ p: p, score: nameMatch ? 0 : 1 });
    });
    scored.sort(function (a, b) { return a.score - b.score; });
    var results = scored.map(function (s) { return s.p; });
    return typeof limit === "number" ? results.slice(0, limit) : results;
  }

  function searchResultHref(p) {
    return "products.html?open=" + encodeURIComponent(p.id) + "#" + brandOf(p) + "__" + p.category;
  }

  function searchResultRow(p) {
    var mediaHTML = p.image
      ? '<img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy">'
      : '<span class="search-result-noimg"><i class="fa-regular fa-image"></i></span>';
    var metaBits = [brandName(brandOf(p))];
    if (p.baseModel) metaBits.push(p.baseModel);
    else if (p.subCategory) metaBits.push(p.subCategory);
    return (
      '<a class="search-result" href="' + searchResultHref(p) + '" data-product-id="' + p.id + '">' +
      '<span class="search-result-media">' + mediaHTML + "</span>" +
      '<span class="search-result-info">' +
      '<span class="search-result-name">' + esc(p.name) + "</span>" +
      '<span class="search-result-meta">' + esc(metaBits.join(" · ")) + "</span>" +
      "</span>" +
      "</a>"
    );
  }

  function searchBoxHTML() {
    return (
      '<div class="site-search" id="site-search">' +
      '<div class="site-search-input-wrap">' +
      '<i class="fa-solid fa-magnifying-glass site-search-icon" aria-hidden="true"></i>' +
      '<input type="search" id="site-search-input" class="site-search-input" placeholder="Search products…" autocomplete="off" aria-label="Search products">' +
      '<button type="button" class="site-search-clear" id="site-search-clear" aria-label="Clear search" hidden><i class="fa-solid fa-xmark"></i></button>' +
      "</div>" +
      '<div class="site-search-results" id="site-search-results" hidden></div>' +
      "</div>"
    );
  }

  // ---------- Brand badge (Metrix+ authorised-dealer pill) ----------
  function brandBadge(extraClass) {
    var b = data.brand;
    if (!b) return "";
    return (
      '<div class="brand-badge' + (extraClass ? " " + extraClass : "") + '">' +
      '<img src="' + b.logoTransparent + '" alt="' + esc(b.name) + '" loading="lazy">' +
      "<span>" + esc(b.line) + "</span>" +
      "</div>"
    );
  }

  // ---------- Header ----------
  // Dropdown is grouped by brand (Metrix+ first, then any other brands in
  // the order they first appear in productCategories) with a heading row
  // per group, so the nav scales cleanly as more brands are added.
  // With three brands' categories to show, a single long vertical list runs
  // well past the viewport height. Laid out as one column per brand instead
  // (a standard mega-menu), the same links fit in roughly a third of the
  // height. Falls back to the old single-column list if there's ever only
  // one brand's categories to show.
  function dropdownHTML() {
    var order = [];
    var groups = {};
    data.productCategories.forEach(function (c) {
      var b = brandOf(c);
      if (!groups[b]) {
        groups[b] = [];
        order.push(b);
      }
      groups[b].push(c);
    });
    // Keep Metrix+ pinned first if present, for visual continuity.
    order.sort(function (a, b) {
      if (a === "metrix") return -1;
      if (b === "metrix") return 1;
      return 0;
    });
    var isMega = order.length > 1;
    var columns = order
      .map(function (b) {
        var items = groups[b]
          .map(function (c) {
            return '<li><a href="products.html#' + b + "__" + c.slug + '">' + esc(c.name) + "</a></li>";
          })
          .join("");
        return (
          '<div class="nav-dropdown-col">' +
          (isMega ? '<div class="nav-dropdown-heading">' + esc(brandName(b)) + "</div>" : "") +
          "<ul>" + items + "</ul>" +
          "</div>"
        );
      })
      .join("");
    return (
      '<div class="nav-dropdown nav-dropdown-brands' + (isMega ? " nav-dropdown-mega" : "") + '">' +
      '<div class="nav-dropdown-columns" style="--col-count:' + order.length + '">' + columns + "</div>" +
      '<div class="nav-dropdown-all"><a href="products.html">All Products <i class="fa-solid fa-arrow-right"></i></a></div>' +
      "</div>"
    );
  }

  function navHTML(activeKey) {
    return data.nav
      .map(function (item) {
        var isActive = item.key === activeKey;
        var hasDropdown = item.dropdownFrom === "categories";
        return (
          '<li class="nav-item' + (hasDropdown ? " has-dropdown" : "") + '">' +
          '<a href="' + item.href + '" class="nav-link' + (isActive ? " is-active" : "") + '">' +
          esc(item.label) +
          (hasDropdown ? ' <i class="fa-solid fa-chevron-down nav-caret"></i>' : "") +
          "</a>" +
          (hasDropdown ? dropdownHTML() : "") +
          "</li>"
        );
      })
      .join("");
  }

  function header(activeKey) {
    var c = data.company;
    return (
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="topbar">' +
      '<div class="container topbar-inner">' +
      '<div class="topbar-links">' +
      '<a href="tel:' + c.phonePrimaryHref + '"><i class="fa-solid fa-phone"></i> ' + c.phonePrimary + " | " + c.phoneMobile + "</a>" +
      '<a href="mailto:' + c.email + '"><i class="fa-regular fa-envelope"></i> ' + c.email + "</a>" +
      "</div>" +
      '<a class="topbar-whatsapp" href="https://wa.me/' + c.whatsapp + '" target="_blank" rel="noopener">' +
      '<i class="fa-brands fa-whatsapp"></i> WhatsApp</a>' +
      "</div>" +
      "</div>" +
      '<header class="site-header" id="site-header-el">' +
      '<div class="container header-inner">' +
      '<a class="brand" href="index.html" aria-label="' + c.name + ' home">' +
      '<img src="images/brand/apex-logo.png" alt="' + c.name + '">' +
      '<span class="brand-copy"><span class="brand-name">' + c.shortName + '</span><span class="brand-tag">' + c.tagline + "</span></span>" +
      "</a>" +
      searchBoxHTML() +
      '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>' +
      '<div class="nav-scrim"></div>' +
      '<nav class="site-nav" aria-label="Primary">' +
      '<ul class="nav-list">' + navHTML(activeKey) + "</ul>" +
      '<a class="btn btn-primary nav-cta" href="contact.html">Enquire Now</a>' +
      "</nav>" +
      "</div>" +
      "</header>"
    );
  }

  // Footer's category list, grouped by brand with a small sub-heading per
  // group so it stays legible as more brands/categories are added.
  // Just the brand names (Metrix+, Multispan, MICRO…) rather than every
  // category under each — the full category list belongs on the products
  // page itself; here it only needs to get someone to the right brand.
  function footerBrandsHTML() {
    return (data.brands || [])
      .map(function (b) {
        return '<li><a href="products.html#' + b.slug + '">' + esc(b.name) + "</a></li>";
      })
      .join("");
  }

  // ---------- Footer ----------
  function footer() {
    var c = data.company;
    var year = new Date().getFullYear();
    return (
      '<footer class="site-footer">' +
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-col footer-brand">' +
      '<img src="images/brand/apex-logo.png" alt="' + c.name + '">' +
      "<p>" + c.descriptionShort + "</p>" +
      brandBadge("footer-metrix-badge") +
      '<ul class="footer-contact">' +
      '<li><i class="fa-solid fa-location-dot"></i><span>' + c.address + ", " + c.addressCity + "</span></li>" +
      '<li class="footer-contact-inline">' +
      '<a href="tel:' + c.phonePrimaryHref + '"><i class="fa-solid fa-phone"></i>' + c.phonePrimary + "</a>" +
      '<a href="mailto:' + c.email + '"><i class="fa-regular fa-envelope"></i>' + c.email + "</a>" +
      "</li>" +
      "</ul>" +
      "</div>" +
      '<div class="footer-col">' +
      '<h3>Explore</h3><span class="footer-rule"></span>' +
      "<ul>" +
      data.nav.map(function (n) { return "<li><a href=\"" + n.href + "\">" + esc(n.label) + "</a></li>"; }).join("") +
      "</ul>" +
      "</div>" +
      '<div class="footer-col">' +
      '<h3>Our Brands</h3><span class="footer-rule"></span>' +
      "<ul>" +
      footerBrandsHTML() +
      "</ul>" +
      "</div>" +
      '<div class="footer-col footer-enquire">' +
      '<h3>Get In Touch</h3><span class="footer-rule"></span>' +
      "<p>Have a product or application in mind? Our team can help you specify the right instrument.</p>" +
      '<a class="btn btn-outline-light" href="contact.html">Send An Enquiry</a>' +
      '<a class="footer-whatsapp" href="https://wa.me/' + c.whatsapp + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>' +
      "</div>" +
      "</div>" +
      '<div class="legal">&copy; ' + year + " " + c.name + ". All rights reserved.</div>" +
      "</div>" +
      "</footer>" +
      '<button class="back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>'
    );
  }

  // ---------- Section heading (small kicker + slash + big heading) ----------
  function sectionHeading(opts) {
    opts = opts || {};
    var cls = "section-heading" + (opts.center ? " is-center" : "") + (opts.onDark ? " on-dark" : "");
    return (
      '<div class="' + cls + '">' +
      '<div class="eyebrow-row"><span class="slash" aria-hidden="true"></span><span class="eyebrow-text">' + esc(opts.kicker) + "</span></div>" +
      "<h2>" + esc(opts.title) + "</h2>" +
      (opts.lead ? '<p class="lead">' + esc(opts.lead) + "</p>" : "") +
      "</div>"
    );
  }

  // ---------- Hero slider ----------
  function heroSlider() {
    var slidesHTML = data.heroSlides
      .map(function (s, i) {
        var visualHTML = s.image
          ? '<img class="hero-visual-img" src="' + s.image + '" alt="' + esc(s.imageAlt || "") + '" loading="' + (i === 0 ? "eager" : "lazy") + '">'
          : '<div class="hero-visual-placeholder"><i class="fa-regular fa-image"></i></div>';
        return (
          '<div class="hero-slide" data-variant="' + s.variant + '" data-index="' + i + '">' +
          '<div class="container hero-slide-inner">' +
          '<div class="hero-copy">' +
          '<span class="hero-eyebrow anim-item" data-anim="1">' + esc(s.eyebrow) + "</span>" +
          '<h1 class="anim-item" data-anim="2">' + esc(s.heading) + "</h1>" +
          '<p class="anim-item" data-anim="3">' + esc(s.subtitle) + "</p>" +
          '<div class="hero-actions anim-item" data-anim="4">' +
          '<a class="btn btn-light" href="' + s.ctaPrimary.href + '">' + esc(s.ctaPrimary.label) + "</a>" +
          '<a class="btn btn-ghost" href="' + s.ctaSecondary.href + '">' + esc(s.ctaSecondary.label) + "</a>" +
          "</div>" +
          "</div>" +
          '<div class="hero-visual anim-item" data-anim="4" aria-hidden="true">' +
          '<div class="hero-visual-glow"></div>' +
          '<div class="hero-visual-ring"></div>' +
          '<div class="hero-visual-card">' + visualHTML + "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    var dotsHTML = data.heroSlides
      .map(function (_, i) { return '<button class="hero-dot" data-goto="' + i + '" aria-label="Go to slide ' + (i + 1) + '"></button>'; })
      .join("");
    return (
      '<div class="hero-slider" id="hero-slider">' +
      '<div class="hero-slides">' + slidesHTML + "</div>" +
      '<button class="hero-arrow hero-arrow-prev" type="button" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>' +
      '<button class="hero-arrow hero-arrow-next" type="button" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>' +
      '<div class="hero-dots">' + dotsHTML + "</div>" +
      "</div>"
    );
  }

  // ---------- Feature boxes (post-hero, 3 columns) ----------
  function featureBoxes() {
    var items = data.featureBoxes
      .map(function (f, i) {
        return (
          '<div class="feature-box reveal" style="transition-delay:' + i * 90 + 'ms">' +
          '<div class="feature-icon"><i class="' + f.icon + '"></i></div>' +
          "<h3>" + esc(f.heading) + "</h3>" +
          "<p>" + esc(f.text) + "</p>" +
          (f.meta ? '<a class="feature-meta" href="' + f.meta.href + '"><i class="' + f.meta.icon + '"></i> ' + esc(f.meta.label) + "</a>" : "") +
          (f.cta ? '<a class="btn btn-primary" href="' + f.cta.href + '">' + esc(f.cta.label) + "</a>" : "") +
          "</div>"
        );
      })
      .join("");
    return '<div class="feature-boxes"><div class="container feature-grid">' + items + "</div></div>";
  }

  // ---------- Our brands strip (above "Why Choose Us") ----------
  function ourBrands() {
    var tiles = (data.brands || [])
      .map(function (b) {
        var count = data.products.filter(function (p) { return brandOf(p) === b.slug; }).length;
        var href = "products.html#" + b.slug;
        return (
          '<a class="brand-tile reveal" href="' + href + '">' +
          '<img src="' + b.logo + '" alt="' + esc(b.name) + " logo" + '" loading="lazy">' +
          '<span class="brand-tile-meta">' + count + (count === 1 ? " Product" : " Products") + "</span>" +
          "</a>"
        );
      })
      .join("");
    return (
      '<section class="section bg-paper" id="our-brands">' +
      '<div class="container">' +
      sectionHeading({ kicker: "Authorised Dealer", title: "The Brands We Carry", center: true, lead: "Every product on this site is genuine stock from one of these brands." }) +
      '<div class="brands-strip">' + tiles + "</div>" +
      "</div>" +
      "</section>"
    );
  }

  // ---------- Product category showcase (slow auto-scrolling carousel, section 4) ----------
  function categoryShowcase() {
    function cardHTML(cat, isDupe) {
      var count = data.products.filter(function (p) { return p.category === cat.slug; }).length;
      var href = "products.html#" + brandOf(cat) + "__" + cat.slug;
      var tabAttr = isDupe ? ' tabindex="-1"' : "";
      return (
        '<article class="category-card"' + (isDupe ? ' aria-hidden="true"' : ' id="' + cat.slug + '"') + '>' +
        '<a class="category-media" href="' + href + '"' + tabAttr + '>' +
        '<img src="' + cat.image + '" alt="' + esc(cat.name) + '" loading="lazy">' +
        "</a>" +
        '<div class="category-body">' +
        '<span class="category-count">' + count + (count === 1 ? " Product" : " Products") + "</span>" +
        "<h3>" + esc(cat.name) + "</h3>" +
        "<p>" + esc(cat.shortDesc) + "</p>" +
        '<a class="card-link" href="' + href + '"' + tabAttr + '>View Products <i class="fa-solid fa-arrow-right"></i></a>' +
        "</div>" +
        "</article>"
      );
    }
    var originals = data.productCategories.map(function (cat) { return cardHTML(cat, false); }).join("");
    // The track is rendered twice back-to-back and animated exactly -50% so
    // the loop is seamless; the second copy is aria-hidden/untabbable since
    // it's a purely visual duplicate of the first.
    var duplicates = data.productCategories.map(function (cat) { return cardHTML(cat, true); }).join("");
    return (
      '<section class="section" id="categories">' +
      '<div class="container">' +
      sectionHeading({ kicker: "What We Supply", title: "Product Categories", center: true, lead: "Genuine Metrix+, Multispan and MICRO instruments Apex Engineering Concern supplies, organised by category." }) +
      "</div>" +
      '<div class="category-carousel"><div class="category-track">' + originals + duplicates + "</div></div>" +
      "</section>"
    );
  }

  // ---------- Popular instrument types, alternating rows (section 5) ----------
  function capabilitiesAlternating() {
    var rows = data.subcategoryHighlights
      .map(function (item, i) {
        var reverse = i % 2 === 1;
        var href = "products.html#" + (item.brand || "metrix") + "__" + item.category + "__" + slugify(item.subCategory);
        return (
          '<div class="capability-row' + (reverse ? " is-reverse" : "") + ' reveal">' +
          '<a class="capability-media" href="' + href + '"><img src="' + item.image + '" alt="' + esc(item.heading) + '" loading="lazy"></a>' +
          '<div class="capability-copy">' +
          '<div class="capability-icon"><i class="' + item.icon + '"></i></div>' +
          "<h3>" + esc(item.heading) + "</h3>" +
          "<p>" + esc(item.text) + "</p>" +
          '<a class="card-link" href="' + href + '">Browse ' + esc(item.subCategory) + ' <i class="fa-solid fa-arrow-right"></i></a>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    return (
      '<section class="section bg-paper" id="popular-instruments">' +
      '<div class="container">' +
      sectionHeading({ kicker: "Explore The Range", title: "Popular Instrument Types", center: true, lead: "A closer look at some of the most requested Metrix+, Multispan and MICRO instrument types Apex Engineering Concern supplies." }) +
      '<div class="capability-rows">' + rows + "</div>" +
      "</div>" +
      "</section>"
    );
  }

  // ---------- Why choose us ----------
  function whyChooseUs() {
    var cards = data.strengths
      .map(function (s, i) {
        return (
          '<article class="strength-card reveal" style="transition-delay:' + (i % 3) * 90 + 'ms">' +
          '<div class="strength-icon"><i class="' + s.icon + '"></i></div>' +
          "<h3>" + esc(s.heading) + "</h3>" +
          "<p>" + esc(s.text) + "</p>" +
          "</article>"
        );
      })
      .join("");
    return (
      '<section class="section">' +
      '<div class="container">' +
      sectionHeading({ kicker: "Why Apex", title: "Why Choose Us", center: true }) +
      '<div class="strength-grid">' + cards + "</div>" +
      "</div>" +
      "</section>"
    );
  }

  // ---------- Product card (shared by featured carousel + products grid) ----------
  function productCard(p, i) {
    var subSlug = slugify(p.subCategory || "");
    var searchHay = esc(
      normalizeSearch([p.name, p.baseModel, categoryName(p.category), p.subCategory].filter(Boolean).join(" "))
    );
    var mediaHTML = p.image
      ? '<div class="product-media"><img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy"></div>'
      : '<div class="product-media is-placeholder"><i class="fa-regular fa-image"></i><span>Photo Coming Soon</span></div>';
    return (
      '<article class="card product-card reveal" style="transition-delay:' + (i % 3) * 90 + 'ms" data-brand="' + brandOf(p) + '" data-category="' + p.category + '" data-subcategory="' + subSlug + '" data-product-id="' + p.id + '" data-search="' + searchHay + '">' +
      mediaHTML +
      '<div class="media-hint" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus"></i> View Details</div>' +
      '<div class="product-body">' +
      '<span class="product-cat">' + esc(categoryName(p.category)) + (p.subCategory ? " &middot; " + esc(p.subCategory) : "") + "</span>" +
      "<h3>" + esc(p.name) + "</h3>" +
      "<p>" + esc(p.shortDesc) + "</p>" +
      '<a class="btn btn-outline" href="contact.html?product=' + encodeURIComponent(p.name) + '">Enquire <i class="fa-solid fa-arrow-right"></i></a>' +
      "</div>" +
      "</article>"
    );
  }

  // ---------- Product detail modal (opens on product-card click) ----------
  function productModalShell() {
    return (
      '<div class="product-modal" id="product-modal" aria-hidden="true">' +
      '<div class="product-modal-backdrop" data-modal-close></div>' +
      '<div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">' +
      '<button class="product-modal-close" type="button" aria-label="Close" data-modal-close><i class="fa-solid fa-xmark"></i></button>' +
      '<div class="product-modal-body" id="product-modal-body"></div>' +
      "</div>" +
      "</div>"
    );
  }

  // ---------- Image lightbox (click a gallery's main image to enlarge) ----------
  function imageLightboxShell() {
    return (
      '<div class="image-lightbox" id="image-lightbox" aria-hidden="true">' +
      '<div class="image-lightbox-backdrop" data-lightbox-close></div>' +
      '<button class="image-lightbox-close" type="button" aria-label="Close" data-lightbox-close><i class="fa-solid fa-xmark"></i></button>' +
      '<img class="image-lightbox-img" id="image-lightbox-img" src="" alt="">' +
      "</div>"
    );
  }

  // Renders a product's normalised "specTables" (an array of blocks derived
  // from the source site's raw HTML tables — see data notes in data.js).
  // Each block is one of:
  //   { type: "divider", text }              -> a section sub-heading
  //   { type: "kv", rows: [[label, value]] } -> a plain label/value table
  //   { type: "grid", header, rows }         -> a wider variant/model table,
  //                                              scrollable on small screens
  // A single source table can mix all three row shapes, which is why this
  // works block-by-block rather than classifying a whole table at once.
  function renderSpecBlocks(blocks) {
    return blocks
      .map(function (b) {
        if (b.type === "divider") {
          return '<h5 class="modal-spec-divider">' + esc(b.text) + "</h5>";
        }
        if (b.type === "kv") {
          return (
            '<table class="modal-specs"><tbody>' +
            b.rows.map(function (r) { return "<tr><th>" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("") +
            "</tbody></table>"
          );
        }
        if (b.type === "grid") {
          var theadHTML = b.header
            ? "<thead><tr>" + b.header.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead>"
            : "";
          var bodyHTML = b.rows
            .map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; })
            .join("");
          return '<div class="modal-table-scroll"><table class="modal-data-table">' + theadHTML + "<tbody>" + bodyHTML + "</tbody></table></div>";
        }
        return "";
      })
      .join("");
  }

  // A product with a genuine multi-image "images" array (2+ distinct photos
  // collected from its source page) gets a gallery: main image + prev/next
  // arrows + thumbnail strip, all driven by simple data-index attributes so
  // interactions.js can wire it up with plain event delegation. A product
  // with only ever one image (single "images" entry, or the older plain
  // "image" string used by every pre-existing Metrix/Multispan record)
  // falls straight back to the original single-image markup — no gallery
  // chrome shown for a single photo.
  function galleryMediaHTML(p) {
    var images = (p.images && p.images.length ? p.images : (p.image ? [p.image] : []));
    if (!images.length) {
      return '<div class="modal-media is-placeholder"><i class="fa-regular fa-image"></i><span>Photo Coming Soon</span></div>';
    }
    if (images.length === 1) {
      return '<div class="modal-media"><img src="' + images[0] + '" alt="' + esc(p.name) + '"></div>';
    }
    var thumbs = images
      .map(function (src, i) {
        return (
          '<button type="button" class="gallery-thumb' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '" aria-label="View image ' + (i + 1) + ' of ' + images.length + '">' +
          '<img src="' + src + '" alt="" loading="lazy"></button>'
        );
      })
      .join("");
    return (
      '<div class="modal-media modal-gallery" data-gallery>' +
      '<div class="gallery-frame">' +
      '<button type="button" class="gallery-arrow gallery-prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>' +
      '<img class="gallery-main-img" src="' + images[0] + '" alt="' + esc(p.name) + '" data-gallery-main>' +
      '<button type="button" class="gallery-arrow gallery-next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>' +
      '<span class="gallery-count"><span data-gallery-current>1</span> / ' + images.length + "</span>" +
      "</div>" +
      '<div class="gallery-thumbs">' + thumbs + "</div>" +
      "</div>"
    );
  }

  function productModalContent(p) {
    if (!p) return "";
    var mediaHTML = galleryMediaHTML(p);

    var modelHTML = p.baseModel ? '<div class="modal-model-badge">Model: ' + esc(p.baseModel) + "</div>" : "";

    var featuresHTML =
      p.features && p.features.length
        ? '<div class="modal-section"><h4>Key Features</h4><ul class="modal-features">' +
          p.features.map(function (f) { return "<li><i class=\"fa-solid fa-check\"></i>" + esc(f) + "</li>"; }).join("") +
          "</ul></div>"
        : "";

    var applicationsHTML =
      p.applications && p.applications.length
        ? '<div class="modal-section"><h4>Applications</h4><ul class="modal-features">' +
          p.applications.map(function (a) { return "<li><i class=\"fa-solid fa-check\"></i>" + esc(a) + "</li>"; }).join("") +
          "</ul></div>"
        : "";

    var specsHTML = "";
    if (p.specTables && p.specTables.length) {
      specsHTML = '<div class="modal-section"><h4>Specifications</h4>' + renderSpecBlocks(p.specTables) + "</div>";
    } else {
      var specKeys = p.specs ? Object.keys(p.specs) : [];
      specsHTML = specKeys.length
        ? '<div class="modal-section"><h4>Specifications</h4><table class="modal-specs"><tbody>' +
          specKeys.map(function (k) { return "<tr><th>" + esc(k) + "</th><td>" + esc(p.specs[k]) + "</td></tr>"; }).join("") +
          "</tbody></table></div>"
        : "";
    }

    var catalogueBtn = p.catalogueUrl
      ? '<a class="btn btn-outline" href="' + p.catalogueUrl + '" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> Download Catalogue</a>'
      : '<span class="modal-catalogue-pending"><i class="fa-regular fa-file-pdf"></i> Catalogue coming soon</span>';

    return (
      '<div class="modal-grid">' +
      mediaHTML +
      '<div class="modal-info">' +
      '<span class="product-cat">' + esc(categoryName(p.category)) + (p.subCategory ? " &middot; " + esc(p.subCategory) : "") + "</span>" +
      '<h2 id="product-modal-title">' + esc(p.name) + "</h2>" +
      modelHTML +
      '<p class="modal-desc">' + esc(p.shortDesc) + "</p>" +
      featuresHTML +
      '<div class="modal-actions">' +
      '<a class="btn btn-primary" href="contact.html?product=' + encodeURIComponent(p.name) + '">Enquire About This Product <i class="fa-solid fa-arrow-right"></i></a>' +
      catalogueBtn +
      "</div>" +
      "</div>" +
      "</div>" +
      applicationsHTML +
      specsHTML
    );
  }

  // ---------- Featured products (dark carousel section, section 8) ----------
  function featuredProducts() {
    var featured = data.products.filter(function (p) { return p.featured; });
    var slides = featured.map(function (p, i) { return '<div class="carousel-slide">' + productCard(p, i) + "</div>"; }).join("");
    return (
      '<section class="section section-dark" id="featured-products">' +
      '<div class="hero-grid-overlay" aria-hidden="true"></div>' +
      '<div class="container">' +
      sectionHeading({ kicker: "Fresh From The Catalogue", title: "Featured Products", onDark: true, lead: "A selection of instruments currently offered by Apex Engineering Concern." }) +
      '<div class="carousel" data-per-view="3" id="featured-carousel">' +
      '<div class="carousel-track">' + slides + "</div>" +
      "</div>" +
      '<div class="carousel-controls">' +
      '<button class="carousel-arrow carousel-prev" type="button" aria-label="Previous products"><i class="fa-solid fa-chevron-left"></i></button>' +
      '<div class="carousel-dots"></div>' +
      '<button class="carousel-arrow carousel-next" type="button" aria-label="Next products"><i class="fa-solid fa-chevron-right"></i></button>' +
      "</div>" +
      '<p class="view-all-link"><a class="btn btn-primary" href="products.html">See All Products</a></p>' +
      "</div>" +
      "</section>"
    );
  }

  // ---------- Full-width CTA band ----------
  function ctaBand() {
    var c = data.company;
    return (
      '<section class="cta-band">' +
      '<div class="hero-grid-overlay" aria-hidden="true"></div>' +
      '<div class="container cta-band-inner reveal">' +
      "<h2>Looking For The Right Industrial Instrument?</h2>" +
      "<p>" + c.descriptionShort + "</p>" +
      '<div class="cta-band-actions">' +
      '<a class="btn btn-light" href="contact.html">Request A Quote</a>' +
      '<a class="btn btn-ghost" href="tel:' + c.phonePrimaryHref + '">Contact Us</a>' +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  // ---------- Products page: dropdown filters (brand > category > subcategory) + search ----------
  // Category and sub-category <select> option lists are rebuilt in JS
  // (interactions.js) as brand/category change, so only their empty shells
  // and the (small, static) brand list are rendered here.
  // Bounded, searchable dropdown shell for a filter <select> that can end up
  // with a long, brand-grouped option list (category / sub-category once
  // MICRO joined Metrix+ and Multispan). The real <select> stays in the DOM
  // as the source of truth for interactions.js's existing filter logic —
  // it's just visually hidden — while a custom trigger + panel (fixed
  // max-height, own scroll, live search) replaces the native picker so it
  // never takes over the whole mobile screen. See enhanceComboSelect() in
  // interactions.js for the behaviour.
  function comboSelectShell(id, placeholderLabel, searchPlaceholder) {
    var disabledAttr = id === "subcategory-select" ? " disabled" : "";
    return (
      '<div class="select-wrap combo-select">' +
      '<select id="' + id + '" class="combo-native-select" tabindex="-1" aria-hidden="true"' + disabledAttr + '><option value="all">' + esc(placeholderLabel) + "</option></select>" +
      '<button type="button" class="combo-trigger" id="' + id + '-trigger" aria-haspopup="listbox" aria-expanded="false"' + disabledAttr + ">" +
      '<span class="combo-trigger-label">' + esc(placeholderLabel) + "</span>" +
      '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>' +
      "</button>" +
      '<div class="combo-panel" hidden>' +
      '<div class="combo-search-wrap">' +
      '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
      '<input type="text" class="combo-search" placeholder="' + esc(searchPlaceholder) + '" aria-label="' + esc(searchPlaceholder) + '">' +
      "</div>" +
      '<div class="combo-options" role="listbox"></div>' +
      "</div>" +
      "</div>"
    );
  }

  function productGrid() {
    var brandOptions =
      '<option value="all">All Brands</option>' +
      (data.brands || []).map(function (b) { return '<option value="' + b.slug + '">' + esc(b.name) + "</option>"; }).join("");

    var cards = data.products.map(function (p, i) { return productCard(p, i); }).join("");

    return (
      '<div class="product-toolbar" id="product-toolbar">' +
      '<div class="toolbar-search">' +
      '<i class="fa-solid fa-magnifying-glass toolbar-search-icon" aria-hidden="true"></i>' +
      '<input type="search" id="product-search-input" class="toolbar-search-input" placeholder="Search by name or model…" autocomplete="off" aria-label="Search products">' +
      '<button type="button" class="toolbar-search-clear" id="product-search-clear" aria-label="Clear search" hidden><i class="fa-solid fa-xmark"></i></button>' +
      "</div>" +
      '<div class="toolbar-selects">' +
      '<div class="select-wrap"><select id="brand-select" aria-label="Filter by brand">' + brandOptions + '</select><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></div>' +
      comboSelectShell("category-select", "All Categories", "Search categories…") +
      comboSelectShell("subcategory-select", "All Sub-categories", "Search sub-categories…") +
      '<button type="button" class="toolbar-reset" id="toolbar-reset" hidden>Reset <i class="fa-solid fa-arrow-rotate-left"></i></button>' +
      "</div>" +
      "</div>" +
      '<div class="toolbar-meta" id="toolbar-meta"></div>' +
      '<div class="cards-3 product-results" id="product-results">' + cards + "</div>"
    );
  }

  global.SiteRender = {
    header: header,
    footer: footer,
    sectionHeading: sectionHeading,
    heroSlider: heroSlider,
    featureBoxes: featureBoxes,
    ourBrands: ourBrands,
    categoryShowcase: categoryShowcase,
    capabilitiesAlternating: capabilitiesAlternating,
    whyChooseUs: whyChooseUs,
    featuredProducts: featuredProducts,
    ctaBand: ctaBand,
    productGrid: productGrid,
    productCard: productCard,
    productModalShell: productModalShell,
    imageLightboxShell: imageLightboxShell,
    productModalContent: productModalContent,
    slugify: slugify,
    searchProducts: searchProducts,
    searchResultRow: searchResultRow,
    searchResultHref: searchResultHref,
  };
})(window);
