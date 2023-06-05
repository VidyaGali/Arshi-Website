


/* -----------------------------------------------------------------
             #dropdown
// ----------------------------------------------------------------*/

$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  // Avoid following the href location when clicking
  event.preventDefault();
  // Avoid having the menu to close when clicking
  event.stopPropagation();
  // If a menu is already open we close it
  $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
  // opening the one you clicked on
  $(this).parent().addClass('open');
});



$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});






/* -----------------------------------------------------------------
             #Filter
// ----------------------------------------------------------------*/
    
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }
      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }
    });
  }
});



  /* -----------------------------------------------------------------
             #galley
// ----------------------------------------------------------------*/
jQuery("#galleryS").owlCarousel({
  items: 1,
  speed:1000,
  loop: true,
  margin:10,
  center: true,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    }
  }
});



  /* -----------------------------------------------------------------
             #Progress bar
// ----------------------------------------------------------------*/

$(".progress-bar").animate({
  width: "70%"
}, 2500);



  /* -----------------------------------------------------------------
             #AOS
// ------------------------------------------------------------------*/
AOS.init();

AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



  /* -----------------------------------------------------------------
             #navbar-fixed top
// ------------------------------------------------------------------*/

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.getElementById("NavbarMain").classList.add("fixed-top");


    // add padding top to show content behind navbar
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  }
   else {
    document.getElementById("NavbarMain").classList.remove("fixed-top");



     // remove padding top from body
    document.body.style.paddingTop = "0px";
  } 
});

$(document).ready(function () {


  $('body').scrollspy({
      target: "#NavbarMain",
      offset: 70
  });
  
  $(window).scroll(function(){
      $(".nav-item").removeClass("active");
      $(".active").parent().addClass("active");
    })
    
  });



  /* -----------------------------------------------------------------
             #navbar
// ------------------------------------------------------------------*/


const navToggle=document.querySelector(".navbar-toggle");
const navLinks=document.querySelector(".navbar-nav");

navToggle.addEventListener('click',() =>
{
  document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
  link.addEventListener('click',()=>
  {
    document.body.classList.remove("nav-open");
  })
});



// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }