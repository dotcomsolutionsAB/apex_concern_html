/**
 * Carousel — generic horizontal carousel used for the featured products
 * section. Responsive per-view count comes from CSS flex-basis on
 * .carousel-slide; this script only measures and translates the track.
 */
(function (global) {
  "use strict";

  function Carousel(root) {
    this.root = root;
    if (!this.root) return;
    this.track = root.querySelector(".carousel-track");
    this.slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
    this.controls = root.parentElement.querySelector(".carousel-controls");
    this.prevBtn = this.controls ? this.controls.querySelector(".carousel-prev") : null;
    this.nextBtn = this.controls ? this.controls.querySelector(".carousel-next") : null;
    this.dotsWrap = this.controls ? this.controls.querySelector(".carousel-dots") : null;
    this.page = 0;
    this.init();
  }

  Carousel.prototype.perView = function () {
    if (!this.slides.length) return 1;
    var trackWidth = this.track.parentElement.clientWidth;
    var slideWidth = this.slides[0].getBoundingClientRect().width;
    if (!slideWidth) return 1;
    return Math.max(1, Math.round(trackWidth / slideWidth));
  };

  Carousel.prototype.pageCount = function () {
    var perView = this.perView();
    return Math.max(1, Math.ceil(this.slides.length / perView));
  };

  Carousel.prototype.buildDots = function () {
    if (!this.dotsWrap) return;
    var pages = this.pageCount();
    var self = this;
    this.dotsWrap.innerHTML = "";
    for (var i = 0; i < pages; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot" + (i === this.page ? " is-active" : "");
      dot.setAttribute("aria-label", "Go to slide group " + (i + 1));
      (function (idx) {
        dot.addEventListener("click", function () { self.goTo(idx); });
      })(i);
      this.dotsWrap.appendChild(dot);
    }
  };

  Carousel.prototype.updateDots = function () {
    if (!this.dotsWrap) return;
    Array.prototype.forEach.call(this.dotsWrap.children, function (dot, i) {
      dot.classList.toggle("is-active", i === this.page);
    }, this);
  };

  Carousel.prototype.goTo = function (page) {
    var pages = this.pageCount();
    this.page = ((page % pages) + pages) % pages;
    var perView = this.perView();
    var slideWidth = this.slides[0].getBoundingClientRect().width;
    var offset = this.page * perView * slideWidth;
    var maxOffset = Math.max(0, this.slides.length * slideWidth - this.track.parentElement.clientWidth);
    this.track.style.transform = "translateX(-" + Math.min(offset, maxOffset) + "px)";
    this.updateDots();
  };

  Carousel.prototype.next = function () { this.goTo(this.page + 1); };
  Carousel.prototype.prev = function () { this.goTo(this.page - 1); };

  Carousel.prototype.init = function () {
    if (!this.track || !this.slides.length) return;
    var self = this;
    this.buildDots();
    this.goTo(0);

    if (this.prevBtn) this.prevBtn.addEventListener("click", function () { self.prev(); });
    if (this.nextBtn) this.nextBtn.addEventListener("click", function () { self.next(); });

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        self.buildDots();
        self.goTo(0);
      }, 150);
    });

    // Pause-and-drag friendliness: swipe support.
    var startX = null;
    this.track.parentElement.addEventListener(
      "touchstart",
      function (e) { startX = e.touches[0].clientX; },
      { passive: true }
    );
    this.track.parentElement.addEventListener(
      "touchend",
      function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) {
          if (dx < 0) self.next();
          else self.prev();
        }
        startX = null;
      },
      { passive: true }
    );
  };

  global.Carousel = Carousel;
})(window);
