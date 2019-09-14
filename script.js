let slideIndex = 1;
let dots = document.getElementsByClassName("dot");
let slides = document.getElementsByClassName("slides");
let bgI = document.getElementsByClassName("bgImage");
// click
document.getElementById("next").onclick = function() {
    slideShow(slideIndex += 1);   
}

document.getElementById("prev").onclick = function() {
    slideShow(slideIndex -= 1);   
}
//---------------------------------------------------
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {  
        fastTrevel(i);
    }
}
//----------------------------------------------------
// get images in array
function getImages(index) {
    let array = [];
    let a = document.getElementsByTagName("img")
    for(let i = 0; i < a.length / 2; i++) {
        array.push(a[i].getAttribute("src"));
    }
    return array[index];
}
//-----------------------------------------------------
function fastTrevel(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[n].style.display = "block";
    slides[n].classList.add("active");
// class replace
    for(let i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("dotActive", "");
    }
    dots[n].classList.add("dotActive");
// ------------------------------------------------------ 
    slideIndex = n + 1;
  
// backgraundImage change 
    bgI[0].style.backgroundImage = `url(${getImages(n)})`;
// ------------------------------------------------------ 
}

function slideShow(n) {

    if( n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");
    bgI[0].style.backgroundImage = `url(${getImages(slideIndex - 1)})`;
// class replace
    for(let i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("dotActive", "");
    }

    dots[slideIndex - 1].classList.add("dotActive");
// ------------------------------------------------------ 
}
slideShow();
// ------------------------------------------------------ 
slideIndex = 0;
function timeOut() { 
    let pauseRun = document.getElementById("pauseRun");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   
    }

    if(slideIndex <= slides.length - 1) {
        slideIndex += 1;

    }else {
        slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");
// backgraundImage change
    bgI[0].style.backgroundImage = `url(${getImages(slideIndex - 1)})`;
//------------------------------------------------------ 
       
    for(let i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("dotActive", "");
    }

    dots[slideIndex - 1].classList.add("dotActive");
// pause / run

    let intervalId = setTimeout(timeOut, 3000);
    
    pauseRun.onclick = function() {
        if(pauseRun.innerHTML === "pause") {
            pauseRun.innerHTML = "run";
            clearTimeout(intervalId);   
        } else {
            pauseRun.innerHTML  = "pause";
            intervalId = setTimeout(timeOut, 3000);
        }
    }
//------------------------------------------------------  
}
timeOut();