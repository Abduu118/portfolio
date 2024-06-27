(function ($) {
  "use strict";

  var $window = $(window);
  /*----------------------------------
# header sticky 
-----------------------------------*/
  $.fn.elExists = function () {
    return this.length > 0;
  };


  var activeSticky = $("#sticky-header"),
    $winDow = $($window);
  $winDow.on("scroll", function () {
    var scroll = $($window).scrollTop(),
      isSticky = activeSticky;

    if (scroll < 1) {
      isSticky.removeClass("is-sticky");
    } else {
      isSticky.addClass("is-sticky");
    }
  });


  const offcanvasToggle = document.getElementById('offcanvas-toggle');
  const offcanvas = document.getElementById('offcanvas');

  offcanvasToggle.addEventListener('click', function () {

    offcanvas.classList.toggle('offcanvas-open')
  })


  const offcanvasClose = document.getElementById('offcanvas-close')

  offcanvasClose.addEventListener('click', function () {

    offcanvas.classList.toggle('offcanvas-open')
  })





  if ($(".testimonial").elExists()) {
    const testimonialCarousel = new Swiper(".testimonial .swiper", {
      pagination: false,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      },
    });
  }





  if ($(".brandCarousel").elExists()) {
    const brandCarousel = new Swiper(".brandCarousel .swiper", {
      pagination: false,
      spaceBetween: 24,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6
        },
      },
    });
  }





  function Tab() {
    $(".tabs button").on("click", function () {
      var tab_id = $(this).attr("data-tab");
      $(".tabs button").removeClass("active");
      $(".tab-content").removeClass("active");
      $(this).addClass("active");
      $("#" + tab_id).addClass("active");
    });
  }

  Tab();

  if ($(".play-button").elExists()) {
    $(".play-button").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      fixedContentPos: true,
    });
  }




  if ($(".counter").elExists()) {
    const counterUp = window.counterUp.default

    const callback = entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
          counterUp(el, {
            duration: 3000,
            delay: 15,
          })
          el.classList.add('is-visible')
        }
      })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })

    const el = document.querySelector('.counter')
    IO.observe(el)
  }






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
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });



  // Ajax Contact Form 

  const form = $('#contact-form');

  // Get the messages div.
  const formMessages = $('.form-message');

  // Set up an event listener for the contact form.
  $(form).on('submit', function (e) {

    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    const formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })

      .done(function (response) {

        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#contact-form [name="name"]').val('');
        $('#contact-form [name="email"]').val('');
        $('#contact-form [name="phone"]').val('');
        $('#contact-form [name="subject"]').val('');
        $('#contact-form [name="message"]').val('');

      })

      .fail(function (data) {

        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }

      });

  });




  // Hello
  /*---------------------------------
        Scroll Up
    -----------------------------------*/
  function scrollToTop() {
    var $scrollUp = $("#scrollUp"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.css({ bottom: "-60px" });
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.css({ bottom: "60px" });
        } else {
          $scrollUp.css({ bottom: "-60px" });
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

})(jQuery);


// typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Look", "Observe", "Analyze", "Design", "Develop"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});