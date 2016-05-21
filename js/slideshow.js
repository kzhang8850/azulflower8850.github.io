var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  	}
    myIndex++;
    if (myIndex > x.length) {myIndex = 1} 

    x[myIndex-1].style.display = "block";
    dots[myIndex-1].className += " w3-white";  
    setTimeout(carousel, 7000);    
}


function currentDiv(number){
	myIndex = number - 1;
	var dots = document.getElementsByClassName("demo");
	for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  	}
  	dots[number-1].className += " w3-white"; 
}