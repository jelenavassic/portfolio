const goUp = document.getElementById("goUp");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navItems = document.getElementById("hamitems");
const navigation = document.getElementById("nav");
const hamnav = document.getElementById("hamnav");
const revealText = document.querySelector(".reveal-text");

window.addEventListener("scroll", handleScrollAnimation);

hamburgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 600) {
//     navItems.classList.remove("show");
//     navigation.style.display = "block";
//     hamnav.style.display = "none";
//   } else {
//     navigation.style.display = "none";
//     hamnav.style.display = "flex";
//     // alert("Dddd")
//   }
// });


let menuResize = function () {
  if (window.innerWidth > 599) {
    navItems.classList.remove("show");
    navigation.style.display = "block";
    hamnav.style.display = "none";
  } else {
    navigation.style.display = "none";
    hamnav.style.display = "block";
    revealText.classList.add("reveal")
  }
};
window.addEventListener("resize", menuResize);
menuResize();

goUp.addEventListener("click", goToTop);

document.getElementById("form").addEventListener("submit", function (event) {
  if (email.value.trim() === "") {
    error.style.display = "block";
    submit.disabled = true;
    event.preventDefault();
  } else {
    error.style.display = "none";
    submit.disabled = false;
  }
  email.addEventListener("input", function () {
    error.style.display = "none";
    submit.disabled = false;
  });
});



window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
}

function goToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function check(e) {
  e.preventDefault();
  let paternEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (paternEmail.test(email.value)) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  // var revealText = document.querySelector(".reveal-text");
  if (isElementInViewport(revealText)) {
    revealText.classList.add("reveal");
  }
}



