var height = window.innerHeight;
var width = window.innerWidth;
pcontent = document.getElementById('p-content');
pcontent.style.top = height/2-pcontent.offsetHeight/2 + 'px';
pcontent.style.left = width/2-pcontent.offsetWidth/2 + 'px';

function smoothSlide(id){
  var slideto = document.getElementById(id).getBoundingClientRect().top;
  var plus = 1;
  var localVal = setInterval(function(){
    if(plus < 14){
      plus += 1;
    }

    if(window.pageYOffset < slideto){
      window.scrollTo(0, window.pageYOffset+plus);
    } else {
      clearInterval(localVal);
    }
  }, 5);
}
