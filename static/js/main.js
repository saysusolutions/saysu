$(document).ready(function () {
  $(".demo").slick({
    autoplay: true,
    dots: false,
    dotsClass: "slick-dots",
  });
  
  
  $(".navlink a").click(function() {
    toggleMenu();
  })
});

const navlist = document.querySelector("#navlist");
const navTrigger = document.querySelector("#nav-trigger");

navTrigger.addEventListener('click', () => {
  toggleMenu();
})

const toggleMenu = () => {
  if(navlist.style.left === "0%"){
    navlist.style.left = "100%";
    navTrigger.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
    $('body').css('overflow', 'auto');
} else {
    navlist.style.left = "0%"
    navTrigger.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    $('body').css('overflow', 'hidden');
}
}

