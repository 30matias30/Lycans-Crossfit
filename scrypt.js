let btnLeft = document.getElementById('btn-left');
let btnRight = document.getElementById('btn-right');
let btnDir = document.getElementById('btn-dir');
let bodyy = document.body;

let num = 0;
let contador;
let bandera = false;

btnLeft.addEventListener('click', alertaa);
btnRight.addEventListener('click', ale);
btnDir.addEventListener('click',dir);

function dir() {

  num = 2;

  bodyy.style.backgroundImage = 'url(fotos/Fondo/Fondo2.webp)';

    
  document.getElementById('div0').style.display = 'none';
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'block';
  document.getElementById('div3').style.display = 'none';
}

function time(){
  contador = setTimeout(alert,5000)
}

function timerFotos() {
  
  if(num == 0){
    // num++;
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'block';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

    num++;

  } else if(num == 1){
    
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'none';
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

    num++;
    
  } else if(num == 2){
        
      bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'block';
      document.getElementById('div3').style.display = 'none';

      num++;  
          
  } else {

    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'block';

      num = 0;
  }

  console.log(num);

  setTimeout(timerFotos, 6000);

}

function alertaa() {
  if(num == 1){
    --num;
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'block';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

  } else if(num == 2){
    
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'none';
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

    --num;
    
  } else if(num == 3){
        
      bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'block';
      document.getElementById('div3').style.display = 'none';

      --num;  
          
  } else if(num >= 0) {
    
      num = 3;

      bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'block';

  };

}

function ale() {
  if(num == 0){
    // num++;
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'block';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

    num++;

  } else if(num == 1){
    
    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;

    document.getElementById('div0').style.display = 'none';
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';

    num++;
    
  } else if(num == 2){
        
      bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'block';
      document.getElementById('div3').style.display = 'none';

      num++;  
          
  } else {

    bodyy.style.backgroundImage = `url(fotos/Fondo/Fondo${num}.webp)`;
  
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'block';

      num = 0;
  }
  

}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, {
    enterDelay: 10,
    
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(el, {
    throttle: 100,
    scrollOffset: 200,
    
  });
});