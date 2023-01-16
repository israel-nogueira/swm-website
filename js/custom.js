/*
	Template Name: BiziPress - Finance, Consulting, Business HTML Template
	Author: Tripples
	Author URI: https://themeforest.net/user/tripples
	Description: BiziPress - Finance, Consulting, Business HTML Template
	Version: 1.0

	1. Fixed header
	2. Main slideshow
	3. Site search
	4. Owl Carousel
	5. Video popup
	6. Counter
	7. Contact form
	8. Back to top
  
*/


jQuery(function ($) {
   "use strict";



   $(window).on('load', function () {
      checkScreenSize();
      menuFixed();
   });

   /* ----------------------------------------------------------- */
   /*  Fixed header
   /* ----------------------------------------------------------- */

   function menuFixed() {
      var wWidth = $(window).width();
      if (wWidth > 974) {
         if ($('#header, #header-2 .site-nav-inner').length) {
            var sticky = $('#header, #header-2 .site-nav-inner'),
               scroll = $(window).scrollTop();

            if (scroll >= 400) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

         };
      }
   }
   $(document).on('scroll', function () {
      menuFixed();
   });


   /* ----------------------------------------------------------- */
   /*  Mobile Menu
   /* ----------------------------------------------------------- */

   $(".dropdown-menu li").on("click", function () {
      $(".dropdown-menu li").removeClass("active");
      $(this).addClass("active");
   });

   function checkScreenSize() {
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 991) {
         $("li.nav-item a").on("click", function () {
            $(this).parent("li").find(".dropdown-menu").slideToggle();
            $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
         });
      } else {
         $("li.nav-item a").on("click", function () {
            console.log('do nothing');
         });
      }
   }

   /* ----------------------------------------------------------- */
   /*  Main slideshow
   /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 6000,
   });


   /* ----------------------------------------------------------- */
   /*  Site search
    /* ----------------------------------------------------------- */

   $('.nav-search').on('click', function () {
      $('.search-block').fadeIn(350);
      $(this).fadeOut(350);
   });

   $('.search-close').on('click', function () {
      $('.search-block').fadeOut(350);
      $('.nav-search').fadeIn(350);
   });



   /* ----------------------------------------------------------- */
   /*  Owl Carousel
   /* ----------------------------------------------------------- */

   //Testimonial slide

   $(".testimonial-slide").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }

   });



   //Partners slide

   $("#partners-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: -50,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 5,
      responsive: {
         0: {
            items: 2,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            items: 5
         }
      }

   });


   //Page slide

   $(".page-slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 800,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            items: 1,
            nav: true,
         }
      }

   });

   //Page slide
   $(".featured-cases-slide").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            animateOut: 'fadeOut',
         }
      }

   });



   /* ----------------------------------------------------------- */
   /*  Video popup
   /* ----------------------------------------------------------- */
   $(document).ready(function () {

      $(".gallery-popup").colorbox({
         rel: 'gallery-popup',
         transition: "fade",
         innerHeight: "500"
      });

      $(".popup").colorbox({
         iframe: true,
         innerWidth: 600,
         innerHeight: 400
      });

   });


   /* ----------------------------------------------------------- */
   /*  Counter
   /* ----------------------------------------------------------- */

   $('.counterUp').counterUp({
      delay: 10,
      time: 1000
   });



   /* ----------------------------------------------------------- */
   /*  Contact form
   /* ----------------------------------------------------------- */

   $('#contact-form').submit(function () {

      var $form = $(this),
         $error = $form.find('.error-container'),
         action = $form.attr('action');

      $error.slideUp(750, function () {
         $error.hide();

         var $name = $form.find('.form-name'),
            $phone = $form.find('.form-phone'),
            $email = $form.find('.form-email'),
            $url = $form.find('.form-website'),
            $message = $form.find('.form-message');

         $.post(action, {
               name: $name.val(),
               phone: $phone.val(),
               email: $email.val(),
               url: $url.val(),
               message: $message.val()
            },
            function (data) {
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $phone.val('');
                  $email.val('');
                  $url.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });

   /*-------------------------------------------------------------*/
   /* FAQ Page
   /*-------------------------------------------------------------*/

   function toggleIcon(e) {
      $(e.target)
         .prev('.panel-heading')
         .find(".fa")
         .toggleClass('fa-plus fa-minus ');
   }
   $('.panel-group').on('hidden.bs.collapse', toggleIcon);
   $('.panel-group').on('shown.bs.collapse', toggleIcon);

   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
      } else {
             $('#back-to-top').fadeOut();
            }
      });

      // scroll body to 0px on click
      $('#back-to-top').on('click', function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
            return false;
      });

      $('#back-to-top').tooltip('hide');

   /* ----------------------------------------------------------- */
   /*  Packery
   /* ----------------------------------------------------------- */

   if ($('.carrer-gallery-layout').length > 0) {
      $('.carrer-gallery-layout').packery({
         percentPosition: true,
         gutter: 10,
      })
   }

});