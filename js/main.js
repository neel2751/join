//Modify the src attribute of the image with the ID "myImage"

// const nav = document.querySelector(".nav-link");
const bulb = document.querySelector("#click_bulb");

bulb.addEventListener("click", () => {
  //   var x = document.getElementsByClassName("nav-item");

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
// bulb.addEventListener("click", () => {
//   nav.classList.add("bg");
// });
// document.getElementById("user").src = "img/user-light.svg";

// if user name not empty to set the user name and class to remove and innerhtml to get some data to transfer to name and empty name to set
