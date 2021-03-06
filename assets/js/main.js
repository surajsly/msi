/**
 * Template Name: Appland - v3.0.0
 * Template URL: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first ")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 3000);

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

!(function ($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $("#header").outerHeight() - 1;
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
    e
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');
    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });
    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });
    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, .mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Initiate venobox lightbox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });

  // Contact Us Form
  $(document).ready(function () {
    $("#contact-send-btn").click(() => {
      // Disable button
      $("#contact-send-btn").attr("disabled", "disabled");
      // remove previous errors if any
      $(".error-msg").remove();
      $(".success-msg").remove();
      // Aggregate form data
      const data = {
        name: $("#contact-name").val(),
        email: $("#contact-email").val(),
        mobile: $("#contact-mobile").val(),
        message: $("#contact-message").val(),
        address: $("#contact-address").val(),
        rooftoparea: $("#contact-rooftop").val(),
        service_id: "service_aidg8ds",
        template_id: "template_jt5rzcl",
        user_id: "user_e3u8no5Kdyhd9eZ1eccij",
      };
      // Check for form validity
      // if (!isFormValid(data)) {
      //   $("#contact-send-btn").removeAttr("disabled", "disabled");
      //   return;
      // }
      //@Hack
      // Send data to contact API
      $.ajax({
        type: "POST",
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
        data: data,
      })
        .done((response) => {
          // Clear Form
          console.log(response);
          $("#contact-name").val("");
          $("#contact-email").val("");
          $("#contact-mobile").val("");
          $("#contact-message").val("");
          // Enable Send button
          $("#contact-send-btn").removeAttr("disabled", "disabled");
          // Show Success Message
          $("#contact-form").append(
            '<span class="success-msg">Thank you. Our executive will reach you shortly.<span>'
          );
        })
        .fail((error) => {
          // Enable Send button
          $("#contact-send-btn").removeAttr("disabled", "disabled");
          // Show Error Message
          $("#contact-form").append(
            '<span class="error-msg">Opps! somethig went wrong. Please try again.<span>'
          );
        });
    });
  });

  // Contact us form end
})(jQuery);
