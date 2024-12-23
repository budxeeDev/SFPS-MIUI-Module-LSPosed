AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

particlesJS('particles-js', {
  particles: {
    number: {
      width: 2,
      value: 500, // Jumlah partikel
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#b0d8f0" // Warna partikel
    },
    shape: {
      type: "triangle", // Bentuk partikel (circle, edge, triangle, dll.)
      stroke: {
        width: 0,
        color: "#c29f04"
      },
      polygon: {
        nb_sides: 10
      }
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 1,
      random: false
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#00effa",
      opacity: 0.1,
      width: 5
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 550
      },
      push: {
        particles_nb: 5
      }
    }
  },
  retina_detect: true
});
