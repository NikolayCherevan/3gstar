window.onscroll = function showHeader () {
  var header = document.querySelector('.header-fix');
  if(window.pageYOffset > 200) {
    header.classList.add('fixed');
  }
  else {
    header.classList.remove('fixed');
  }
}
