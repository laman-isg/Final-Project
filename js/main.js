new WOW().init();


  $(window).ready(function() {
    $("#menu-btn").on("click", function() {
      $("body").toggleClass("menu-active");
    });
  });
  window.onload = function() {
    var scrollElem = document.getElementById("scrollToTop");
    window.onscroll = function() {
        if (this.scrollY > 400) {
            scrollElem.style.display = "block";
        } else {
            scrollElem.style.display = "none";
        }
    }
    scrollElem.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  var hamb = document.querySelector('.hamburger'); 
  var menu = document.querySelector('.menu');
  var list = document.getElementById('menu');
  
  
  function closeMenu() {
      menu.style.width = '0px';
  }
  
  function openMenu() {
      menu.style.width = '100%';
  }
  
  hamb.addEventListener('click', function() {
  var active = hamb.classList.toggle('hamburger--active');
      
  if(active) {
               hamb.addEventListener('click', openMenu());
      } else {
               hamb.addEventListener('click', closeMenu());
      }
  });
  
  list.addEventListener('click', function() { 
  closeMenu();
  var active = hamb.classList.toggle('hamburger--active');
  });
  
  
  