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
const arrowani = document.querySelector(".graph__wrapper");
const paths = document.querySelector(".path");
const arrows = document.querySelector(".arrow");

function arrow() {
  console.log(this.scrollY);
  // if (
  //   this.scrollY > this.innerHeight / 2 ||
  //   this.scrollY > 280 ||
  //   this.scrollY > 360
  // ) {
  if (
    (this.scrollY > 422 && this.scrollY < 426) ||
    (this.scrollY > 311 && this.scrollY < 313)
  ) {
    // console.log("active");

    arrowani.classList.add("active");

    paths.classList.remove("path");

    paths.classList.add("paths");

    arrows.classList.add("arrows");
    arrows.classList.remove("arrow");
    document.querySelectorAll("animateMotion").forEach((element) => {
      element.beginElement(1);
    });
  } else {
    arrowani.classList.remove("active");
    paths.classList.remove("paths");
    paths.classList.add("path");
    arrows.classList.remove("arrows");
    arrows.classList.add("arrow");
  }
}

window.addEventListener("scroll", arrow);
