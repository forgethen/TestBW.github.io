'use strict';

$(window).on('load', function() {
  $('.preloader').delay(500).fadeOut(500);
});

$(document).ready(function() {

  // $(window).resize(function() {
  //   var all_content = $('body').width();
  //   if (all_content < 1025) {
  //     $('.preloader').show().delay(1000).fadeOut(500);
  //   }
  // });

  $("a.slow").click(function() {
    var e = $(this).attr("href"),
      k = $(e).offset().top;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  $("input,textarea,email").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "")
  });

  $("input,textarea,email").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"))
  });

  $('input[type="phone"]').inputmask("+7 (999) 999 99 99");
  $('label.date input').inputmask("99.99.9999");
  $('label.time input').inputmask("99:99");

  $('.burger').click(function() {
    if ($(this).hasClass('icofont-navigation-menu')) {
      $(this).removeClass('icofont-navigation-menu').addClass('icofont-close-circled');
    } else {
      $(this).removeClass('icofont-close-circled').addClass('icofont-navigation-menu');
    }
    $('header nav').toggleClass('active');
  });

  $('.viewBox .navSlider__slide').each(function() {
    let bg = $(this).getAttribute('data-url');
    $(this).css('background-image', bg);
  });

  $('.viewBox__navSlider').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidePerRow: 3,
    slidesToShow: 3,
    speed: 250,
    autoplayspeed: 2500,
    asNavFor: '.viewBox__previewSlider',
    cssEase: 'linear',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<i class="icofont-rounded-up slick-prev"></i>',
    nextArrow: '<i class="icofont-rounded-down slick-next"></i>',
    responsive: [{
      breakpoint: 1025,
      settings: {
        vertical: false,
        speed: 250,
        autoplayspeed: 2500,
        focusOnSelect: false,
        horizontalSwiping: true,
        verticalSwiping: false,
        dots: true,
        arrows: false,
        slidePerRow: 1,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.viewBox__previewSlider').slick({
      autoplay: true,
      vertical: true,
      infinite: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      speed: 250,
      autoplayspeed: 2500,
      asNavFor: '.viewBox__navSlider',
      cssEase: 'linear',
      arrows: false,
      draggable: false,
      responsive: [{
        breakpoint: 1025,
        settings: {
          vertical: false,
          fade: true,
          speed: 250,
          autoplayspeed: 2500,
        }
      }, ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      // then let's do this before changing slides
      $('.timer').removeClass('tic-tac');
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
      // finally let's do this after changing slides
      $('.timer').addClass('tic-tac');
    });

  $('.windows_preview_slider').slick({
    autoplay: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 250,
    autoplayspeed: 2500,
    adaptiveWidth: true,
    cssEase: 'ease-in-out',
    arrows: false,
    draggable: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        autoplay: true,
        slidesToShow: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: true,
        speed: 250,
        autoplayspeed: 2500,
      }
    }, ]
  });

  $('.gallerySlider').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    speed: 250,
    autoplayspeed: 2500,
    adaptiveWidth: true,
    cssEase: 'ease-in-out',
    dots:false,
    arrows: false,
    draggable: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        autoplay: true,
        slidesToShow: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-rounded-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-rounded-right"></i></div>',
        dots: true,
        speed: 250,
        autoplayspeed: 2500,
      }
    }, ]
  });

  $('.convenience').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
    draggable: true,
    autoplay: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    speed: 250,
    autoplayspeed: 2500,
  });

  $('.fabricatorSlider').slick({
    autoplay: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    speed: 250,
    autoplayspeed: 2500,
    adaptiveWidth: true,
    cssEase: 'linear',
    arrows: true,
    draggable: true,
    prevArrow: '<i class="icofont-rounded-left slick-prev"></i>',
    nextArrow: '<i class="icofont-rounded-right slick-next"></i>',
    responsive: [{
      breakpoint: 1025,
      settings: {
        autoplay: true,
        slidesToShow: 3,
        autoplay: false,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: false,
        speed: 250,
        autoplayspeed: 2500,
      }
    }, ]
  });

  $('.windowsProfiles').slick({
    autoplay: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 250,
    autoplayspeed: 2500,
    adaptiveWidth: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: true,
    draggable: true,
    prevArrow: '<i class="icofont-rounded-left slick-prev"></i>',
    nextArrow: '<i class="icofont-rounded-right slick-next"></i>',
  });

  $('.fabricatorSlider .slide').click(function() {
    $('.fabricatorSlider .slide').removeClass('checked');
    $(this).addClass('checked');
  });

  console.log('ururur');

  // var $wrap = $('.garant, .lastDowbleBlock svg'),
  //   lFollowX = 5,
  //   lFollowY = 10,
  //   x = 0,
  //   y = 0,
  //   friction = 1 / 12;
  //
  // function animate() {
  //   x += (lFollowX - x) * friction;
  //   y += (lFollowY - y) * friction;
  //
  //   $wrap.css({
  //     'transform': 'perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
  //   });
  //   window.requestAnimationFrame(animate);
  // }
  //
  // $(window).on('mousemove click', function(e) {
  //
  //   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  //   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  //   lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  //   lFollowY = (10 * lMouseY) / 100;
  //
  // });
  //
  // animate();

  // var companyHistory = $('.companyHistory');
  //
  // companyHistory.each(function () {
      // var slidesRow       = $(this).find('.slides'),
        var slideControls   = $('.companyHistorySlider').find('.slide-controls');
  //
  //     if (slidesRow.is('.slides-container')) {
           $('.companyHistorySlider .slides').slick({
            slide: 'div',
            autoplay: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            speed: 250,
            autoplayspeed: 2500,
            appendArrows: slideControls,
            prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
            nextArrow: slideControls.find('.slide-arrow.arrow-next'),
            appendDots: slideControls,
            dots: true,
            dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container
            // customPaging: function (slider, i) {
            //     //FYI just have a look at the object to find aviable information
            //     //press f12 to access the console
            //     //you could also debug or look in the source
            //     console.log(slider);
            //     var slideNumber = (i + 1),
            //         totalSlides = slider.slideCount;
            //     return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            // }
            responsive: [{
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }, {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            },]
          });
  //     }
  // });


});

//# sourceMappingURL=main.js.map
