var combinedcode;
 var fn;
    var sn;
    var tn;


function devcode() {
   fn =  Math.floor(Math.random() * 10).toString();
    sn =  Math.floor(Math.random() * 10).toString();
    tn =  Math.floor(Math.random() * 10).toString();
    
     combinedcode = fn + sn + tn;
    localStorage.setItem("code", combinedcode);
    document.getElementById("activationcode").innerHTML = "You will be asked to put in an activation code. Your code is : " + combinedcode + ".";
}

function checkcode() {
setInterval(function(){ 
    if (document.getElementById("actcodeinput").value == localStorage.getItem("code")) {
        document.getElementById("checkno").style.display = "none";
    }
}, 1);
  //document.getElementById("mainbody").innerHTML = localStorage.getItem("code");
}

