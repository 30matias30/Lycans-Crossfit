document.addEventListener('DOMContentLoaded' , () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 1000,
    numVisible: 10,
    dist: -90

  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, {
    enterDelay: 10,
    
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elemt = document.querySelectorAll('.modal');
  M.Modal.init(elemt, {

  });
});

document.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(el, {
    
  });
});