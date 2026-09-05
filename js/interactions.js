/**
 * Interactions — cross-page UI behaviour: sticky header shrink, mobile
 * nav + dropdown handling, scroll-reveal animations, back-to-top,
 * the enquiry form's front-end confirmation state, and the two-tier
 * (category + sub-category) product filters on products.html.
 */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initStickyHeader();
    initMobileNav();
    initDropdowns();
    initReveal();
    initBackToTop();
    initEnquiryForm();
    initProductFilters();
    prefillEnquiryProduct();
    initProductModal();
    initSiteSearch();
    applySearchFromURL();
  });

  function initStickyHeader() {
    var header = document.getElementById("site-header-el");
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".site-nav");
    var scrim = document.querySelector(".nav-scrim");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
    function open() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) close();
      else open();
    });
    if (scrim) scrim.addEventListener("click", close);

    // Close mobile menu when a plain nav link (not a dropdown caret) is chosen.
    nav.querySelectorAll(".nav-link:not(.has-dropdown-toggle)").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 860) close();
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) close();
    });
  }

  function initDropdowns() {
    document.querySelectorAll(".nav-item.has-dropdown").forEach(function (item) {
      var caret = item.querySelector(".nav-caret");
      if (!caret) return;
      caret.addEventListener("click", function (e) {
        if (window.innerWidth > 860) return; // desktop uses CSS :hover
        e.preventDefault();
        e.stopPropagation();
        var isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".nav-item.has-dropdown.is-open").forEach(function (el) {
          if (el !== item) el.classList.remove("is-open");
        });
        item.classList.toggle("is-open", !isOpen);
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  function initBackToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      function () {
        btn.classList.toggle("is-visible", window.scrollY > 480);
      },
      { passive: true }
    );
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initEnquiryForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = document.getElementById("form-note");
      if (note) note.classList.add("is-visible");
      form.reset();
    });
  }

  function prefillEnquiryProduct() {
    var select = document.getElementById("product");
    if (!select) return;
    var params = new URLSearchParams(window.location.search);
    var product = params.get("product");
    if (product) {
      Array.prototype.forEach.call(select.options, function (opt) {
        if (opt.value === product || opt.textContent.trim() === product) {
          select.value = opt.value || opt.textContent.trim();
        }
      });
    }
  }

  // ---------- Combo dropdown: bounded, searchable panel wrapping a hidden <select> ----------
  // Turns a long, brand-grouped <select> (category / sub-category — the
  // lists that grow once MICRO's categories are added alongside Metrix+ and
  // Multispan) into a custom trigger + scrollable panel with a live search
  // box, instead of relying on the native option picker: on mobile that
  // picker takes over the full screen and forces a long scroll through
  // every brand's groups just to find one entry. The underlying <select>
  // stays the single source of truth — its value and "change" event are
  // still what interactions.js's existing filter logic (render/populate*)
  // listens to — this only replaces how the option list is presented.
  function enhanceComboSelect(select) {
    var wrap = select.closest(".combo-select");
    if (!wrap) return { sync: function () {} };
    var trigger = wrap.querySelector(".combo-trigger");
    var label = wrap.querySelector(".combo-trigger-label");
    var panel = wrap.querySelector(".combo-panel");
    var searchInput = wrap.querySelector(".combo-search");
    var optionsBox = wrap.querySelector(".combo-options");

    function isOpen() {
      return !panel.hidden;
    }

    function closeAll() {
      document.querySelectorAll(".combo-select .combo-panel:not([hidden])").forEach(function (p) {
        p.hidden = true;
        var t = p.closest(".combo-select").querySelector(".combo-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    }

    function open() {
      if (trigger.disabled) return;
      closeAll();
      panel.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      searchInput.value = "";
      filterOptions("");
      // Scroll the active option into view without jumping the page.
      var active = optionsBox.querySelector('.combo-option[aria-selected="true"]');
      if (active) active.scrollIntoView({ block: "nearest" });
      setTimeout(function () { searchInput.focus(); }, 0);
    }

    function close() {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    function filterOptions(query) {
      var q = query.trim().toLowerCase();
      var groups = optionsBox.querySelectorAll(".combo-group");
      var anyVisible = false;
      optionsBox.querySelectorAll(".combo-option").forEach(function (opt) {
        var match = !q || opt.textContent.toLowerCase().indexOf(q) !== -1;
        opt.hidden = !match;
        if (match) anyVisible = true;
      });
      groups.forEach(function (g) {
        var hasVisible = !!g.querySelector(".combo-option:not([hidden])");
        g.hidden = !hasVisible;
      });
      var emptyState = optionsBox.querySelector(".combo-empty");
      if (emptyState) emptyState.hidden = anyVisible;
    }

    // Rebuilds the panel's option list from the <select>'s current
    // option/optgroup children. Call after any code (re)populates the
    // select, e.g. populateCategories()/populateSubcategories().
    function sync() {
      trigger.disabled = select.disabled;
      trigger.classList.toggle("is-disabled", select.disabled);

      var selectedOpt = select.options[select.selectedIndex];
      label.textContent = selectedOpt ? selectedOpt.textContent : "";

      var html = "";
      Array.prototype.forEach.call(select.children, function (node) {
        if (node.tagName === "OPTGROUP") {
          html += '<div class="combo-group"><div class="combo-group-label">' + escHtml(node.label) + "</div>";
          Array.prototype.forEach.call(node.children, function (opt) {
            html += comboOptionHTML(opt, select.value);
          });
          html += "</div>";
        } else if (node.tagName === "OPTION") {
          html += comboOptionHTML(node, select.value);
        }
      });
      html += '<div class="combo-empty" hidden>No matches found.</div>';
      optionsBox.innerHTML = html;
    }

    function comboOptionHTML(opt, currentValue) {
      var selected = opt.value === currentValue;
      return (
        '<button type="button" class="combo-option' + (selected ? " is-active" : "") + '" role="option" aria-selected="' +
        (selected ? "true" : "false") + '" data-value="' + escHtml(opt.value) + '">' + escHtml(opt.textContent) + "</button>"
      );
    }

    function escHtml(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }

    trigger.addEventListener("click", function () {
      if (isOpen()) close();
      else open();
    });

    searchInput.addEventListener("input", function () {
      filterOptions(searchInput.value);
    });

    optionsBox.addEventListener("click", function (e) {
      var opt = e.target.closest(".combo-option");
      if (!opt) return;
      select.value = opt.getAttribute("data-value");
      sync();
      select.dispatchEvent(new Event("change", { bubbles: true }));
      close();
    });

    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        close();
        trigger.focus();
      } else if (e.key === "Enter") {
        e.preventDefault();
        var firstVisible = optionsBox.querySelector(".combo-option:not([hidden])");
        if (firstVisible) firstVisible.click();
      }
    });

    document.addEventListener("click", function (e) {
      if (isOpen() && !wrap.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) close();
    });

    sync();
    return { sync: sync };
  }

  // ---------- Product filters: brand/category/sub-category dropdowns + on-page search ----------
  // Category and sub-category <select> option lists are rebuilt whenever the
  // brand/category above them changes (rather than hiding <option>s, which
  // renders inconsistently across browsers), same idea as the old chip rows
  // but far more compact once there are a dozen+ sub-categories.
  function initProductFilters() {
    var toolbar = document.getElementById("product-toolbar");
    var results = document.getElementById("product-results");
    if (!toolbar || !results || !window.SiteData) return;

    var brandSelect = document.getElementById("brand-select");
    var categorySelect = document.getElementById("category-select");
    var subSelect = document.getElementById("subcategory-select");
    var searchInput = document.getElementById("product-search-input");
    var searchClear = document.getElementById("product-search-clear");
    var resetBtn = document.getElementById("toolbar-reset");
    var meta = document.getElementById("toolbar-meta");
    var cards = Array.prototype.slice.call(results.children);

    var categoryCombo = enhanceComboSelect(categorySelect);
    var subCombo = enhanceComboSelect(subSelect);

    function catBrand(c) {
      return c.brand || "metrix";
    }

    function brandLabel(slug) {
      var found = (SiteData.brands || []).filter(function (b) { return b.slug === slug; })[0];
      return found ? found.name : slug;
    }

    // Rebuilds the category <select> for the given brand ("all" = every
    // brand, grouped under an <optgroup> per brand). Keeps the current
    // selection if it's still valid for the new brand, otherwise resets it.
    function populateCategories(brand) {
      var current = categorySelect.value;
      categorySelect.innerHTML = '<option value="all">All Categories</option>';
      if (brand === "all") {
        var order = [];
        var groups = {};
        SiteData.productCategories.forEach(function (c) {
          var b = catBrand(c);
          if (!groups[b]) {
            groups[b] = [];
            order.push(b);
          }
          groups[b].push(c);
        });
        order.sort(function (a, b) {
          if (a === "metrix") return -1;
          if (b === "metrix") return 1;
          return 0;
        });
        order.forEach(function (b) {
          var og = document.createElement("optgroup");
          og.label = brandLabel(b);
          groups[b].forEach(function (c) {
            var opt = document.createElement("option");
            opt.value = c.slug;
            opt.textContent = c.name;
            og.appendChild(opt);
          });
          categorySelect.appendChild(og);
        });
      } else {
        SiteData.productCategories
          .filter(function (c) { return catBrand(c) === brand; })
          .forEach(function (c) {
            var opt = document.createElement("option");
            opt.value = c.slug;
            opt.textContent = c.name;
            categorySelect.appendChild(opt);
          });
      }
      var validSlugs = Array.prototype.map.call(categorySelect.querySelectorAll("option"), function (o) { return o.value; });
      categorySelect.value = validSlugs.indexOf(current) !== -1 ? current : "all";
      categoryCombo.sync();
    }

    // Rebuilds the sub-category <select> for the given category ("all"
    // disables it — sub-categories only make sense once a category is set).
    function populateSubcategories(categorySlug) {
      subSelect.innerHTML = '<option value="all">All Sub-categories</option>';
      if (categorySlug === "all") {
        subSelect.disabled = true;
        subSelect.value = "all";
        subCombo.sync();
        return;
      }
      var seen = {};
      var subs = [];
      SiteData.products.forEach(function (p) {
        if (p.category === categorySlug && p.subCategory && !seen[p.subCategory]) {
          seen[p.subCategory] = true;
          subs.push(p.subCategory);
        }
      });
      subs.forEach(function (s) {
        var opt = document.createElement("option");
        opt.value = SiteRender.slugify(s);
        opt.textContent = s;
        subSelect.appendChild(opt);
      });
      subSelect.disabled = subs.length === 0;
      subSelect.value = "all";
      subCombo.sync();
    }

    function render() {
      var brand = brandSelect.value;
      var category = categorySelect.value;
      var sub = subSelect.value;
      var q = searchInput.value.trim().toLowerCase();

      var visible = 0;
      cards.forEach(function (card) {
        var show =
          (brand === "all" || card.getAttribute("data-brand") === brand) &&
          (category === "all" || card.getAttribute("data-category") === category) &&
          (sub === "all" || card.getAttribute("data-subcategory") === sub) &&
          (!q || (card.getAttribute("data-search") || "").indexOf(q) !== -1);
        card.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });

      var isFiltered = brand !== "all" || category !== "all" || sub !== "all" || !!q;
      resetBtn.hidden = !isFiltered;
      searchClear.hidden = !q;
      meta.textContent =
        "Showing " + visible + " of " + cards.length + " products" + (q ? ' for “' + searchInput.value.trim() + '”' : "");
    }

    function updateURLHash() {
      var parts = [];
      if (brandSelect.value !== "all") {
        parts.push(brandSelect.value);
        if (categorySelect.value !== "all") {
          parts.push(categorySelect.value);
          if (subSelect.value !== "all") parts.push(subSelect.value);
        }
      }
      var hash = parts.length ? "#" + parts.join("__") : "";
      history.replaceState(null, "", window.location.pathname + window.location.search + hash);
    }

    brandSelect.addEventListener("change", function () {
      populateCategories(brandSelect.value);
      populateSubcategories(categorySelect.value === "all" ? "all" : categorySelect.value);
      render();
      updateURLHash();
    });

    categorySelect.addEventListener("change", function () {
      populateSubcategories(categorySelect.value);
      render();
      updateURLHash();
    });

    subSelect.addEventListener("change", function () {
      render();
      updateURLHash();
    });

    var debounceTimer = null;
    searchInput.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(render, 120);
    });

    searchClear.addEventListener("click", function () {
      searchInput.value = "";
      render();
      searchInput.focus();
    });

    resetBtn.addEventListener("click", function () {
      brandSelect.value = "all";
      populateCategories("all");
      categorySelect.value = "all";
      categoryCombo.sync();
      populateSubcategories("all");
      searchInput.value = "";
      render();
      history.replaceState(null, "", window.location.pathname + window.location.search);
    });

    // Initial population, then apply a "#brand", "#brand__category",
    // "#brand__category__subcategory" deep link (nav dropdown, homepage
    // links, search results). A single unrecognised segment is treated as a
    // bare category slug for backward compatibility with pre-dropdown links.
    populateCategories("all");
    populateSubcategories("all");

    var hash = window.location.hash.replace("#", "");
    if (hash) {
      var parts = hash.split("__");
      var brandSlugs = Array.prototype.map.call(brandSelect.options, function (o) { return o.value; });
      if (brandSlugs.indexOf(parts[0]) !== -1) {
        brandSelect.value = parts[0];
        populateCategories(parts[0]);
        if (parts[1]) {
          categorySelect.value = parts[1];
          categoryCombo.sync();
          populateSubcategories(parts[1]);
          if (parts[2]) {
            subSelect.value = parts[2];
            subCombo.sync();
          }
        }
      } else {
        var allCatSlugs = SiteData.productCategories.map(function (c) { return c.slug; });
        if (allCatSlugs.indexOf(parts[0]) !== -1) {
          categorySelect.value = parts[0];
          categoryCombo.sync();
          populateSubcategories(parts[0]);
          if (parts[1]) {
            subSelect.value = parts[1];
            subCombo.sync();
          }
        }
      }
    }

    render();
  }

  // ---------- Product detail modal (click any product card) ----------
  function initProductModal() {
    var modal = document.getElementById("product-modal");
    var body = document.getElementById("product-modal-body");
    if (!modal || !body || !window.SiteData || !window.SiteRender) return;

    var lightbox = document.getElementById("image-lightbox");
    var lightboxImg = document.getElementById("image-lightbox-img");
    var lastFocused = null;

    function open(product) {
      body.innerHTML = SiteRender.productModalContent(product);
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      lastFocused = document.activeElement;
      var closeBtn = modal.querySelector(".product-modal-close");
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    // ---------- Product image gallery (multi-image products only) ----------
    // Every gallery control carries a plain data-index/class hook rather than
    // its own bound listener, because the whole modal body is re-rendered
    // (innerHTML swap) on every open() — delegated listeners on the modal
    // itself survive that swap; per-element listeners would not.
    function setGalleryIndex(gallery, index) {
      var thumbs = gallery.querySelectorAll(".gallery-thumb");
      if (!thumbs.length) return;
      index = ((index % thumbs.length) + thumbs.length) % thumbs.length;
      var mainImg = gallery.querySelector(".gallery-main-img");
      var currentEl = gallery.querySelector("[data-gallery-current]");
      var chosen = thumbs[index];
      var chosenImg = chosen.querySelector("img");
      if (mainImg && chosenImg) mainImg.src = chosenImg.src;
      if (currentEl) currentEl.textContent = index + 1;
      Array.prototype.forEach.call(thumbs, function (t, i) {
        t.classList.toggle("is-active", i === index);
      });
    }

    function galleryStep(gallery, delta) {
      var thumbs = gallery.querySelectorAll(".gallery-thumb");
      var active = gallery.querySelector(".gallery-thumb.is-active");
      var current = Array.prototype.indexOf.call(thumbs, active);
      setGalleryIndex(gallery, (current === -1 ? 0 : current) + delta);
    }

    function openLightbox(src, alt) {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
    }

    // Swipe support for the gallery's main image on touch devices.
    var touchStartX = null;
    body.addEventListener(
      "touchstart",
      function (e) {
        if (!e.target.closest(".gallery-frame")) return;
        touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );
    body.addEventListener(
      "touchend",
      function (e) {
        if (touchStartX === null) return;
        var frame = e.target.closest(".gallery-frame");
        if (frame) {
          var dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > 40) {
            var gallery = frame.closest("[data-gallery]");
            if (gallery) galleryStep(gallery, dx < 0 ? 1 : -1);
          }
        }
        touchStartX = null;
      },
      { passive: true }
    );

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-lightbox-close]")) {
        closeLightbox();
        return;
      }

      var closeTrigger = e.target.closest("[data-modal-close]");
      if (closeTrigger) {
        close();
        return;
      }

      var thumb = e.target.closest(".gallery-thumb");
      if (thumb) {
        var thumbGallery = thumb.closest("[data-gallery]");
        var thumbs = thumbGallery.querySelectorAll(".gallery-thumb");
        setGalleryIndex(thumbGallery, Array.prototype.indexOf.call(thumbs, thumb));
        return;
      }

      var nextBtn = e.target.closest(".gallery-next");
      if (nextBtn) {
        var nextGallery = nextBtn.closest("[data-gallery]");
        if (nextGallery) galleryStep(nextGallery, 1);
        return;
      }

      var prevBtn = e.target.closest(".gallery-prev");
      if (prevBtn) {
        var prevGallery = prevBtn.closest("[data-gallery]");
        if (prevGallery) galleryStep(prevGallery, -1);
        return;
      }

      var mainImg = e.target.closest(".gallery-main-img");
      if (mainImg) {
        openLightbox(mainImg.src, mainImg.alt);
        return;
      }

      var card = e.target.closest(".product-card[data-product-id]");
      if (card) {
        // Let real links inside the card (Enquire, Download Catalogue) work normally.
        if (e.target.closest("a")) return;
        var id = card.getAttribute("data-product-id");
        var product = SiteData.products.filter(function (p) { return p.id === id; })[0];
        if (product) open(product);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (lightbox && lightbox.classList.contains("is-open")) {
          closeLightbox();
          return;
        }
        if (modal.classList.contains("is-open")) close();
        return;
      }
      if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && modal.classList.contains("is-open")) {
        var openGallery = body.querySelector("[data-gallery]");
        if (openGallery) galleryStep(openGallery, e.key === "ArrowRight" ? 1 : -1);
      }
    });

    // Exposed so other flows (site search's "?open=<id>" deep link) can
    // trigger the same modal without duplicating its open/close logic.
    window.ProductModal = { open: open, close: close };
  }

  // ---------- Site search (header search bar) ----------
  function escSearchText(str) {
    return String(str == null ? "" : str).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function initSiteSearch() {
    var root = document.getElementById("site-search");
    var input = document.getElementById("site-search-input");
    var clearBtn = document.getElementById("site-search-clear");
    var resultsWrap = document.getElementById("site-search-results");
    if (!root || !input || !resultsWrap || !window.SiteRender) return;

    var activeIndex = -1;
    var debounceTimer = null;

    function highlight(links) {
      links.forEach(function (l, i) { l.classList.toggle("is-active", i === activeIndex); });
      if (activeIndex >= 0 && links[activeIndex]) links[activeIndex].scrollIntoView({ block: "nearest" });
    }

    function renderResults(query) {
      var matches = SiteRender.searchProducts(query, 6);
      activeIndex = -1;
      if (!matches.length) {
        resultsWrap.innerHTML = '<div class="search-empty">No products found for “' + escSearchText(query) + '”.</div>';
      } else {
        resultsWrap.innerHTML =
          matches.map(function (p) { return SiteRender.searchResultRow(p); }).join("") +
          '<a class="search-view-all" href="products.html?q=' + encodeURIComponent(query) + '">View all results for “' + escSearchText(query) + '”</a>';
      }
      resultsWrap.hidden = false;
    }

    function closeResults() {
      resultsWrap.hidden = true;
      resultsWrap.innerHTML = "";
      activeIndex = -1;
    }

    input.addEventListener("input", function () {
      var q = input.value.trim();
      clearBtn.hidden = !q;
      clearTimeout(debounceTimer);
      if (!q) {
        closeResults();
        return;
      }
      debounceTimer = setTimeout(function () { renderResults(q); }, 120);
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) renderResults(input.value.trim());
    });

    input.addEventListener("keydown", function (e) {
      var links = Array.prototype.slice.call(resultsWrap.querySelectorAll(".search-result"));
      if (e.key === "Escape") {
        closeResults();
        input.blur();
      } else if (e.key === "ArrowDown" && links.length) {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, links.length - 1);
        highlight(links);
      } else if (e.key === "ArrowUp" && links.length) {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        highlight(links);
      } else if (e.key === "Enter") {
        if (activeIndex >= 0 && links[activeIndex]) {
          window.location.href = links[activeIndex].getAttribute("href");
        } else if (input.value.trim()) {
          window.location.href = "products.html?q=" + encodeURIComponent(input.value.trim());
        }
      }
    });

    clearBtn.addEventListener("click", function () {
      input.value = "";
      clearBtn.hidden = true;
      closeResults();
      input.focus();
    });

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) closeResults();
    });
  }

  // Handles the two URL-driven search entry points on any page that mounts
  // the product grid / modal: "?q=<term>" (from the header search's "View
  // all results…") pre-fills the on-page toolbar search box — the same
  // input a person would type into — so it goes through one filtering path
  // and can still be refined with the brand/category/sub-category dropdowns.
  // "?open=<id>" (from clicking a header search result) opens that
  // product's modal directly.
  function applySearchFromURL() {
    if (!window.SiteData || !window.SiteRender) return;
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q");
    var openId = params.get("open");

    if (q) {
      var searchInput = document.getElementById("product-search-input");
      if (searchInput) {
        searchInput.value = q;
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }

    if (openId) {
      var product = SiteData.products.filter(function (p) { return p.id === openId; })[0];
      if (product && window.ProductModal) window.ProductModal.open(product);
    }
  }
})();
