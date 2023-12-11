let mainphoto = document.getElementById('mainphoto');
let navlinks = document.getElementById('navLinks');
let bgheadermoving = document.getElementById('bg-header-moving');
console.log("test");

window.addEventListener('scroll', (event)=>{
    value = window.scrollY;
    mainphoto.style.bottom = -0.5 * value + 'px';
    bgheadermoving.style.transform = 'rotate(' + 0.08 * value + 'deg)';
    // navlinks.style.marginBottom = value + 'px';
    console.log(value);
});


// efek ngetik
var i = 0;
var txt = 'endi Ardana Riadi'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ngetik-nama").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function countdown_age(){
  var countDownDate = new Date("Aug 25, 1999 00:00:00").getTime();
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = now - countDownDate;
  
    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (365 * (1000 * 60 * 60 * 24)));
    var days = Math.floor((distance / (1000 * 60 * 60 * 24)) - (365 * Math.floor(distance / (365 * 1000 * 60 * 60 * 24))));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("counter-age").innerHTML = years + " years " + days + " days " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter-age").innerHTML = "EXPIRED";
    }
  }, 1000);
}

$(document).ready(function() {
    typeWriter();
    countdown_age();
});


var cursor = document.getElementById("cursor");
var cursorinner = document.getElementById("cursor2");

var a = document.querySelectorAll("a");

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursorinner.style.width='100px';
  cursorinner.style.height='100px';
  cursor.style.width='100px';
  cursor.style.height='100px';
});

document.addEventListener('mouseup', function(){
  cursor.style.width='50px';
  cursor.style.height='50px';
  cursorinner.style.width='20px';
  cursorinner.style.height='20px';
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.style.width='100px';
    cursor.style.height='100px';
    cursorinner.style.width='5px';
    cursorinner.style.height='5px';
    // cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.style.width='50px';
    cursor.style.height='50px';
    cursorinner.style.width='20px';
    cursorinner.style.height='20px';
    // cursor.classList.remove('hover');
  });
})

function leftScroll(){
  var vw = $(window).width();
  const left = document.querySelector("#exp-scroll");
  left.scrollBy(20/100*vw, 0);
}

function rightScroll(){
  var vwr = $(window).width();
  const right = document.querySelector("#exp-scroll");
  right.scrollBy(-1*20/100*vwr, 0);
}

$('#msg-fill').on("input", function () {
  console.log(this.scrollHeight);
  if(this.value==''){
    console.log("kosong");
    this.style.height = "100%";
    this.style.maxHeight = "45px";
    this.style.overflow = 'hidden';
  }
  else{
    console.log("ada isi");
    if(this.scrollHeight >= "200"){
      this.style.height = '100%';
      this.style.maxHeight = (this.scrollHeight) + 'px';
      this.style.overflow = 'auto';
      console.log("lebih");
    }
    else {
      this.style.height = "100%";
      this.style.maxHeight = "200px";
      this.style.overflow = 'hidden';
      console.log("kurang");
    }
  }
});