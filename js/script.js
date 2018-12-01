var height = window.innerHeight;
var width = window.innerWidth;
document.getElementById('profile').style.height = width/4 + 'px';
document.getElementById('profile').style.borderRadius = width/4/2 + 'px';
var fetch = document.querySelectorAll("[id='ebtn']");
for(var i = 0; i < fetch.length; i++){
  fetch[i].style.fontSize = width/25 + 'px';
}

pcontent = document.getElementById('p-content');
pcontent.style.top = height/2-pcontent.offsetHeight/2 + 'px';
pcontent.style.left = width/2-pcontent.offsetWidth/2 + 'px';

function smoothSlide(id){
  var slideto = document.getElementById(id).getBoundingClientRect().top;
  var plus = 1;
  var localVal = setInterval(function(){
    if(plus < 100){
      plus += 1;
    }

    if(window.pageYOffset < slideto){
      window.scrollTo(0, window.pageYOffset+plus);
    } else {
      clearInterval(localVal);
    }
  }, 5);
}
