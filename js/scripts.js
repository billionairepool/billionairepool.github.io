// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //Do things when you scroll
    if (scroll >= 900 && scroll<1900) {
      $(".top-nav").removeClass("light-header");
      document.getElementById("logo").src="img/LogoLight.png";
      document.getElementById("nav").style.backgroundImage = "url(img/section.png)";
    }
    else if (scroll >= 100) {
      //scroll down from top
      $(".top-nav").addClass("light-header");
      document.getElementById("logo").src="img/LogoDark.png";
      document.getElementById("nav").style.backgroundImage = "url(img/white.png)";
    } 
    else {
      $(".top-nav").removeClass("light-header");
      document.getElementById("logo").src="img/LogoLight.png";
      document.getElementById("nav").style.backgroundImage = "url(img/transparent.png)";
    }
});

jQuery(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target);
  
      $('html, body').stop().animate( {
        'scrollTop': $target.offset().top - 59
      }, 900, 'swing', function () {
        window.location.hash = target - 59;
      } );
    } );
  } );

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});


wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);

wow.init();

