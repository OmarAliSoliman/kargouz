$(document).ready(function () {
  // choses-slider

  // AOS.init();

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".company-logo-slider").length) {
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
            centerPadding: "40px",
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 524,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
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

  if ($(".countries").length)
    $(".countries .country").map((index, con) => {
      $(con).on("click", function () {
        let country = $(this).text();
        let newsrc = $(this).find("img").attr("src");
        let newtext = $(this).find("span").text();
        $(this).closest(".form-group-parent").find("input").val(newtext);
        $(this)
          .closest(".form-group-parent")
          .find(".chosen-country img")
          .attr("src", newsrc);
        $(this)
          .closest(".form-group-parent")
          .find(".chosen-country span")
          .text(newtext);
      });
    });

  if ($(".chosen-country").length) {
    $(".chosen-country").on("click", function () {
      $(this).closest(".form-group-parent").find(".countries").slideToggle();
    });
  }

  if ($(".dimentions").length) {
    $(".dimentions a").on("click", function () {
      $(this).closest(".header-form").find(".enterdimentions").slideToggle();
    });
  }

  if($(".sidenav").length){
    $(".sidenav ul li.parentsub").map((index, sub)=>{
      console.log($(this));
      $(sub).on('click', function(){
        $(this).find(".submenue").slideToggle();

      })
    })
  }


  // animation
  gsap.timeline({
    scrollTrigger: {
      trigger: ".shop-ship",
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })
  .from(".shop-ship .secton-header > *", { duration: 1, scale: 0, transformOrigin: 'center top', stagger: .4})
  .from(".shop-ship ul li", {opacity: 0, y: -10, stagger: .5, ease: "back"}, "1")
  .from(".shop-ship .ship-btn > *", {opacity: 0, y: -10, stagger: .5, ease: "ease"});

  gsap.timeline({
    scrollTrigger: {
      trigger: ".puyforme",
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })
  .from(".puyforme .secton-header > *", { duration: 1, scale: 0, transformOrigin: 'center top', stagger: .4})
  .from(".puyforme ul li", {opacity: 0, y: 10, stagger: .5, ease: "back"}, "1")
  .from(".puyforme .list-buttons > *", {opacity: 0, y: -10, stagger: .5, ease: "ease"});


  gsap.timeline({
    scrollTrigger: {
      trigger: ".important-site",
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })
  .from(".important-site .secton-header > *", { duration: 1, scale: 0, transformOrigin: 'center top', stagger: .4})
  .from(".important-site .site-card", {opacity: 0, y: 10, stagger: .5, ease: "back"}, "1")
  .from(".site-footer .logo", {x: 100, opacity: 0, ease: "ease"})
  .from(".site-footer ul .mainfooterli", {opacity: 0, y: 10, stagger: .5, ease: "back"})
  // .from(".important-site .list-buttons > *", {opacity: 0, y: -10, stagger: .5, ease: "ease"});


  gsap.timeline({
    scrollTrigger: {
      trigger: ".site-footer",
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })
 

  gsap
    .timeline()
    .from(".mynavbar .logo", {
      x: 100,
      opacity: 0,
      ease: "ease",
      stagger: 0.1,
    })
    .from(".mynavbar .links .mainli", {
      x: 100,
      opacity: 0,
      ease: "ease",
      stagger: 0.4,
    }).from(".header .header-form .form-group", {y: -10, opacity: 0, ease:"ease", stagger: .4}, ".5")

  gsap
    .timeline()
    .from(".languge .lang", { x: -10, opacity: 0, ease: "ease" })
    .from(".languge .curr", { x: 10, opacity: 0, ease: "ease" })
    .from(".header .heder-content h5", { y: -10, opacity: 0, ease: "ease.In", duration: 1 })
    .from(".header .heder-content p", { y: -10, opacity: 0, ease: "ease.In" })
    .from(".header .heder-content form", { y: 10, opacity: 0, ease: "ease.In" })
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
    splash.classList.add("splashdisplayNone");
  }, 1000);
});
