window.onload = function(){
  document.querySelector('.viewport-value').innerHTML = "viewport: " + document.documentElement.clientWidth + " x "+ document.documentElement.clientHeight;
  document.querySelector('.header-value').innerHTML = "viewport: " +  document.querySelector('.header-value').clientWidth + " x "+  document.querySelector('.header-value').clientHeight;
  document.querySelector('.header-value').innerHTML = "viewport: " +  document.querySelector('.footer-value').clientWidth + " x "+  document.querySelector('.footer-value').clientHeight;
 }
  
 window.onresize = function(){
  document.querySelector('.viewport-value').innerHTML = "header: " + document.documentElement.clientWidth + " x "+ document.documentElement.clientHeight;
  document.querySelector('.header-value').innerHTML = "header: " +  document.querySelector('.header-value').clientWidth + " x "+  document.querySelector('.header-value').clientHeight;
  document.querySelector('.header-value').innerHTML = "viewport: " +  document.querySelector('.footer-value').clientWidth + " x "+  document.querySelector('.footer-value').clientHeight;
 }