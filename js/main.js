//Modify the src attribute of the image with the ID "myImage"

const bulb = document.querySelector("#click_bulb");

bulb.addEventListener("click", () => {
  var con = new Audio();

  con.src = "audio/confeti.mp3";
  con.play();

  const start = () => {
    setTimeout(function () {
      confetti.start();
    }, 500);
  };

  const end = () => {
    setTimeout(function () {
      confetti.stop();
    }, 2000);
  };
  start();
  end();
  // Body background color chnage of using toggle like that
  var body = document.querySelector("body");
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }

  var img = document.getElementById("user").src;
  if (img.indexOf("user-dark.svg") != -1) {
    document.getElementById("user").src = "img/user-light.svg";
  } else {
    document.getElementById("user").src = "img/user-dark.svg";
  }
  //   document.body.style.backgroundColor = "white";

  // Set innerhtml add name and

  var name = document.getElementById("name");

  if (name.innerHTML == "") {
    document.getElementById("name").innerHTML = "Neel";
  } else {
    document.getElementById("name").innerHTML = "";
  }

  var logo = document.querySelector(".navbar-brand");
  logo.classList.toggle("logo");

  //   document.getElementById("user").src = "img/user-light.svg";
  var nav = document.getElementsByClassName("nav-link");
  var i;
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.toggle("bg");
  }

  var on = document.querySelector(".onlight");
  on.classList.toggle("on");

  var bulbcolor = document.querySelector(".bulb");
  bulbcolor.classList.toggle("bulbcolor");
});

// Scroll Method

const line = document.querySelector(".line");
const arr = document.querySelector(".arro");

function arrow() {
  // console.log(this.scrollY);
  // if (
  //   this.scrollY > this.innerHeight / 2 ||
  //   this.scrollY > 280 ||
  //   this.scrollY > 360
  // ) {
  if (
    (this.scrollY > 761 && this.scrollY < 764) ||
    // (this.scrollY > 610 && this.scrollY < 617) ||
    (this.scrollY > 250 && this.scrollY < 256) ||
    (this.scrollY > 180 && this.scrollY < 185) ||
    (this.scrollY > 260 && this.scrollY < 273) ||
    (this.scrollY > 280 && this.scrollY < 299) ||
    (this.scrollY > 310 && this.scrollY < 424)
  ) {
    // console.log("active");
    arr.classList.add("arros");
    arr.classList.remove("arro");

    line.classList.add("lines");
    line.classList.remove("line");
  } else {
    arr.classList.remove("arros");
    arr.classList.add("arro");

    line.classList.remove("lines");
    line.classList.add("line");
  }
}

window.addEventListener("scroll", arrow);

// console.log("getTotalLength", triangle.getTotalLength());
//
// console.log(document.getElementById("shape").getTotalLength());
// var list = document.querySelector(".style-module--arrow--2_ZsS path");
// console.log(list);
// var length = list.getTotalLength();
// console.log(length);
// list.style.strokeDashoffset = "0";

// window.onload = function () {
//   animatePath("#fi", "stroke-dashoffset 0.6s ease-in-out");
//   animatePath("#se", "stroke-dashoffset 0.5s 0.5s ease-in-out");
// };
// for (var i = 0; i < list.length; i++) {
//   var path = list[i],
//     length = path.getTotalLength();

//   path.style.strokeDasharray = length;
//   path.style.strokeDashoffset = length;
// }
// console.log(list);

// list.setAttribute("stroke-dashoffset", 0);
// list.style.setAttribute("stroke-dashoffset", 0);
