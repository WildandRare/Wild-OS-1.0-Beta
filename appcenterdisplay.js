setInterval(function() {
    if(document.getElementById("checkno").style.display == "block") {
        document.getElementById("apps").style.display = "none";
    };
}, 1)

function seeandcomplete() {
    
    var appcenter = document.getElementById('apps');
    if (appcenter.style.display == 'none') {
        
        appcenter.style.display = 'block';
        document.getElementById("apps").style.animation = "openopacity 2s 1";
    } else {
        document.getElementById("apps").style.animation = "closeopacity 2s 1";
        setTimeout(function(){ appcenter.style.display = 'none'; }, 1900);
    }
}

function seeandcompletewindows() {
    var appcenter = document.getElementById('appswindows');
    if (appcenter.style.display == 'none') {
        
        appcenter.style.display = 'block';
    } else {
        setTimeout(function(){ appcenter.style.display = 'none'; }, 1900);
    }
}

    var hovertext = document.createElement("DIV");  
        
function starthover() {
     hovertext.style.width="90vw";
     hovertext.style.height="2vw";
     hovertext.style.backgroundColor="gray";
     hovertext.style.position="relative";
     hovertext.style.right="-0vw";
     hovertext.style.top="23.9vw";
    hovertext.style.borderBottomLeftRadius = "25px";
     hovertext.style.borderBottomRightRadius = "25px";
     hovertext.innerHTML= 'hi';
    hovertext.style.display = 'block';
    document.getElementById('apps').appendChild(hovertext);  

}

function enterhoverapp(appname) {
    hovertext.innerHTML = appname

}

function exithoverapp() {
    i

}



