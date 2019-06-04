 
 var size;
window.onload=pageLoad;

function pageLoad() {
         
    document.getElementById("bling").onclick = blingText;
}
 function blingText() {
    if (document.getElementById("bling").checked) {
        document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        document.getElementById("text").className = "blingtext";
    } else {
        document.body.style.backgroundImage = " "
        document.getElementById("text").className = " ";
    }
}
 function mydeco() {
  alert("Hello,World !");
  var checkboxf=document.getElementById('textt');
  var checkboxf=document.getElementById('textarea');
 
 if(checkboxf.checked==true){
  document.getElementById('textarea').style.fontWeight="bold";
  document.getElementById('textarea').style.color="blue";
  
   
  }
  else{
   document.getElementById('textarea').style.fontWeight="normal";
    
}
}
 
 
 
 
function myFunction() {
  var elem = document.getElementById("textarea");
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font-size");
  var mysize=parseFloat(theCSSprop);
  alert(mysize);
  elem.style.fontSize=(mysize+2)+"px";
  alert(elem.style.fontSize);
  
}

var run0=0;
var interval;

function changeInterval(){
	
	if(run0==0){
		interval=setInterval(myFunction,500);
		run0 += 1;
	}
	else if(run0==1){
		clearInterval((interval));
		run0=0;
	}
}
 




