/**
 * HeroSlider — lightweight full-width slider used on the homepage hero.
 * Handles slide transitions, staggered entrance animations, arrows,
 * dot pagination, autoplay with pause-on-hover, and basic swipe support.
 */
(function (global) {
  "use strict";

  function HeroSlider(root, options) {
    this.root = root;
    if (!this.root) return;
    this.slides = Array.prototype.slice.call(root.querySelectorAll(".hero-slide"));
    this.dots = Array.prototype.slice.call(root.querySelectorAll(".hero-dot"));
    this.prevBtn = root.querySelector(".hero-arrow-prev");
    this.nextBtn = root.querySelector(".hero-arrow-next");
    this.current = 0;
    this.interval = (options && options.interval) || 6500;
    this.timer = null;
    this.init();
  }

  HeroSlider.prototype.init = function () {
    if (!this.slides.length) return;
    this.activate(0);
    this.play();

    var self = this;
    if (this.prevBtn) this.prevBtn.addEventListener("click", function () { self.prev(); self.restart(); });
    if (this.nextBtn) this.nextBtn.addEventListener("click", function () { self.next(); self.restart(); });
    this.dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var idx = parseInt(dot.getAttribute("data-goto"), 10);
        self.activate(idx);
        self.restart();
      });
    });

    this.root.addEventListener("mouseenter", function () { self.pause(); });
    this.root.addEventListener("mouseleave", function () { self.play(); });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) self.pause();
      else self.play();
    });

    // Basic touch swipe support.
    var startX = null;
    this.root.addEventListener(
      "touchstart",
      function (e) {
        startX = e.touches[0].clientX;
      },
      { passive: true }
    );
    this.root.addEventListener(
      "touchend",
      function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) {
          if (dx < 0) self.next();
          else self.prev();
          self.restart();
        }
        startX = null;
      },
      { passive: true }
    );
  };

  HeroSlider.prototype.activate = function (index) {
    var count = this.slides.length;
    this.current = ((index % count) + count) % count;
    this.slides.forEach(function (slide, i) {
      var isActive = i === this.current;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    }, this);
    this.dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === this.current);
    }, this);
  };

  HeroSlider.prototype.next = function () {
    this.activate(this.current + 1);
  };

  HeroSlider.prototype.prev = function () {
    this.activate(this.current - 1);
  };

  HeroSlider.prototype.play = function () {
    var self = this;
    this.pause();
    this.timer = setInterval(function () { self.next(); }, this.interval);
  };

  HeroSlider.prototype.pause = function () {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  HeroSlider.prototype.restart = function () {
    this.play();
  };

  global.HeroSlider = HeroSlider;
})(window);
