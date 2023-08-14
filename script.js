window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", slide);

function slide() {
  var reveals = document.querySelectorAll(".slide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", leftSlide);

function leftSlide() {
  var reveals = document.querySelectorAll(".leftSlide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rightSlide);

function rightSlide() {
  var reveals = document.querySelectorAll(".rightSlide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function mode() {
  document.getElementById("contentTopArea").style.color = "black";
  document.body.classList.toggle("darkMode");
  document.querySelector(".buildingMemorable").classList.toggle("textColor");
  document.getElementById("statsCard2").style.backgroundImage =
    "linear-gradient(180deg, #202020 0%, #52ff48 100%)";
  document.getElementById("statsCard3").style.backgroundImage =
    "linear-gradient(180deg, #202020 0%, #7346ff 100%)";
}

const instaBtn = document.querySelector(".rightNavbarButton");
const modelWindowEl = document.querySelector(".modelWindow");
const closeBtn = document.querySelector(".cut");
const topArea = document.querySelector(".topArea");

instaBtn.addEventListener("click", function () {
  modelWindowEl.classList.remove("hidden");
});

closeBtn.addEventListener("click", function (e) {
  modelWindowEl.classList.add("hidden");
});

topArea.addEventListener("click", function () {
  modelWindowEl.classList.add("hidden");
});
