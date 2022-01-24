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
      responsive: [{
          breakpoint: 1025,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 4
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
    $("html, body").animate({
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


  if ($(".countries").length)
    $(".countries .country").map((index, con) => {
      $(con).on('click', function () {
        let country = $(this).text();
        let newsrc = $(this).find('img').attr('src')
        let newtext = $(this).find('span').text();
        $(this).closest(".form-group-parent").find("input").val(newtext);
        $(this).closest(".form-group-parent").find(".chosen-country img").attr('src', newsrc)
        $(this).closest(".form-group-parent").find(".chosen-country span").text(newtext);
      })
    })

  if ($(".chosen-country").length) {
    $(".chosen-country").on('click', function () {
      $(this).closest(".form-group-parent").find(".countries").slideToggle();
    })
  }


  if($(".dimentions").length){
    $(".dimentions a").on('click', function(){
      $(this).closest(".header-form").find(".enterdimentions").slideToggle();
    })
  }




  // animation
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top 75%',
  //     toggleActions: 'play none none none'
  //   }
  // })
  // .from(line, { duration: 1, scale: 0, transformOrigin: 'center top'})
  // .from(dot, { duration: 1, opacity: 0, scale: 0.5, ease: "elastic.out(1, 0.5)", transformOrigin: "center center" });

  gsap.timeline().from('.mynavbar .logo', {
    x: 100,
    opacity: 0,
    ease: "ease",
    stagger: .1
  }).from('.mynavbar .links .mainli', {
    x: 100,
    opacity: 0,
    ease: "ease",
    stagger: .4
  })


  gsap.timeline().from(".languge .lang", {x: -10,  opacity: 0, ease: "ease",}).from(".languge .curr", {x: 10,  opacity: 0, ease: "ease",})
  // gsap.timeline().from(".languge .lang", {x: -10,  opacity: 0, ease: "ease",}).from(".languge .curr", {x: 10,  opacity: 0, ease: "ease",})





});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-100%";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});