const Typed = require("typed.js");
const element = new Typed("#message", {
  strings: ["Here is", "a little thing about me..."],
  typespeed: 30,
  loop: true,
});

const inputEmail = document.getElementById("email");
const subsBtn = document.getElementById("subsBtn");
const confetti = require("canvas-confetti");

subsBtn.addEventListener("click", () => {
  const email = inputEmail.value;
  if (email === "") {
    //kosong
  } else {
    inputEmail.value = " ";
  }

  const myCanvas = document.createElement("canvas");
  myCanvas.style.width = "70vw";
  myCanvas.style.height = "70vh";
  myCanvas.style.inset = 0;
  myCanvas.style.zIndex = 9999;
  myCanvas.style.position = "fixed";
  document.body.appendChild(myCanvas);
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    particleCount: 100,
  });
  myConfetti();
  myCanvas.remove;
});

const itemNav = document.querySelectorAll("header nav a");
const cards = document.querySelectorAll("main .card");

itemNav.forEach((item) => {
  item.addEventListener("click", () => {
    const navActive = document.querySelector(".linkActive");

    if (navActive) {
      navActive.classList.remove("linkActive");
    }

    if (!item.classList.contains("linkActive")) {
      item.classList.add("linkActive");
    }

    cards.forEach((card) => {
      card.classList.add("blur-sm");
      if (item.textContent.includes("All")) {
        card.classList.toggle("blur-sm");
      }
    });

    if (item.textContent.includes("About")) {
      const aboutElement = document.getElementById("about");

      if (aboutElement) {
        aboutElement.classList.toggle("blur-sm");
      }
    }

    if (item.textContent.includes("Project")) {
      const githubElement = document.getElementById("github");
      if (githubElement) {
        githubElement.classList.toggle("blur-sm");
      }

      if (item.textContent.includes("Media")) {
        const mediaElement = document.getElementById("insta");
        if (mediaElement) {
          mediaElement.classList.toggle("blur-sm");
        }
      }
    }
  });
});
