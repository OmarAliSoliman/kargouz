$(document).ready(function () {
  // choses-slider

  // AOS.init();


  var currentDir = $("a").css("direction");
  console.log(currentDir);
  

  if ($('.company-logo-slider').length) {
    $(".company-logo-slider").slick({
      slidesToShow: 6,
      arrows: false,
      dots: false,
      infinite: true,
      loop: true,
      slidesToScroll: 1,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,

      // centerMode: true,
      variableWidth: false,
      // centerPadding: '130px',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow:5
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow:4
          }
        },
        {
          breakpoint: 524,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    })
  }


  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".navbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });



  if ($(".customselect").length) {
    $(".customselect").niceSelect();
  }

  $(".sidenav li.NesteListParent").click(function () {
    $(this).children("ul").slideToggle();
    $(this).children("i").toggleClass("iMenue");
  });


});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});
