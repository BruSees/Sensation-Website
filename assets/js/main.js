$(function () {

  "use strict"
  $(window).on('load', function (event) {
      $('.preloader').delay(700).fadeOut(700);
  });
  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 2) {
          $(".navbar-area").removeClass("sticky");
          $(".navbar-area").addClass("pt-36");
      }
      else {
          $(".navbar-area").addClass("sticky");
          $(".navbar-area").removeClass("pt-36");
      }
  });

  //Navbar
  $('.nav-link').on('click', function(){
    $('#navbarContent').removeClass('show');
    $('#navbarContent').addClass('hide');
    $('.navbar-toggler').addClass('collapsed');
});

  //Venobox video
  $(document).ready(function () {
      $('.venobox').venobox();
  });

  // wow js
  new WOW().init();

  //Owl Carousel Product
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items:1
      },
      600: {
        items:1
      },
      1000: {
        items:1
      },
    }
  });

  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel', [300]),
    owl.trigger('stop.owl.autoplay');
  });

  $('.owl-next').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  $('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]),
    owl.trigger('stop.owl.autoplay');
  });

  $('.owl-prev').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  $('.item').mouseup(function() {
    owl.trigger('stop.owl.autoplay');
  });

  $('.item').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  //ScrollIt
	$.scrollIt();

  //Input fields
  const inputs = document.querySelectorAll('input');

  inputs.forEach(el => {
    el.addEventListener('blur', e => {
      if(e.target.value) {
        e.target.classList.add('dirty');
      } else {
        e.target.classList.remove('dirty');
      }
    });
  });

  //COOLDOWN TIMEOUT
  // Set the date we're counting down to
  var countDownDate = new Date("December 26, 2022 23:59:50").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demouu"
    document.getElementById("demouu").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demouu").innerHTML = "OFFER EXPIRED";
    }
  }, 1000);

});



//COOLDOWN TIMEOUT
  // Set the date we're counting down to
  var countDownDate = new Date("December 26, 2022 23:59:50").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demoooo"
    document.getElementById("demoooo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demoooo").innerHTML = "OFFER EXPIRED";
    }
  }, 1000);



