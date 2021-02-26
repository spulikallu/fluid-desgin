window.onload = function(){
  document.querySelector('.viewport-value').innerHTML = "viewport: " + document.documentElement.clientWidth + " x "+ document.documentElement.clientHeight;
 }
  
 window.onresize = function(){
  document.querySelector('.viewport-value').innerHTML = "viewport: " + document.documentElement.clientWidth + " x "+ document.documentElement.clientHeight;
 }