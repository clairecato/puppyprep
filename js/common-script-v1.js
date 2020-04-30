function openNav(){
  document.getElementById("sidebar").style.width="250px";
  document.getElementById("main").style.marginRight="250px";
  document.getElementById("openbtn").style.display="none";
}

function closeNav(){
  document.getElementById("sidebar").style.width="0px";
  document.getElementById("main").style.marginRight="0px";
  document.getElementById("openbtn").style.display="inline-block";
}

var slideIndex = 1;

function showSlides(x){
  var i;
  var slides=document.getElementsByClassName("myslides");
  var dots=document.getElementsByClassName("dot");
  if (x>slides.length){slideIndex=1}
  if(x<1){slideIndex=slides.length}
  for(i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }
  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace(" clicked", "");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " clicked";
}

function advancepic(unit){
  showSlides(slideIndex +=unit);
}

function currentpic(picnum){
  showSlides(slideIndex=picnum);
}
