callNotiflication('Welcome to WildOS. If you want to know how to get around, you can take a guide!');
var notiflicationpos = '0';
function callNotiflication(notiflicationtext, type, buttontext, buttonaction, action) {
   var  newpos = parseInt(notiflicationpos)+1;
    var pos = toString(newpos) + 'vw';
    var ntf = document.createElement('div')
    ntf.innerHTML=notiflicationtext;
    ntf.style.width = '10vw';
    ntf.style.height = '5vw';
    ntf.style.backgroundColor = 'red';
    ntf.style.top = pos;
    ntf.style.borderWidth ='0.2vw';
     ntf.style.borderColor ='orange';
     ntf.style.borderStyle ='solid';
      ntf.style.animation = 'animationntf 4s 1'
     ntf.style.borderStyle ='solid';
    document.body.appendChild(ntf);
    document.getElementById("dock").style.transition = "all 2s";
        setTimeout(function(){ ntf.remove()},5000);
    if(notiflications == 8) {
        callNotiflication('You have too many notiflications.');
    }

}

function opendock() {
      document.getElementById("dock").style.transition = "all 2s";
    document.getElementById("dropdown").style.transition = "all 2s";
}
