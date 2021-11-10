const button = document.querySelector("#btn-section-two");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target.className === "popup-wrapper" || "popup-close") {
    popup.style.display = "none";
  }
});

// Animation

document.getElementById("images-background").animate(
  [
    // keyframes
    { transform: "translateY(-500px)" },
    { transform: "translateY(0px)" },
  ],
  {
    // timing options
    duration: 3000,
    iterations: 1,
  }
);

document.getElementById("section2").animate(
  [
    // keyframes
    { transform: "translateX(-500px)" },
    { transform: "translateX(0px)" },
  ],
  {
    // timing options
    duration: 3000,
    iterations: 1,
  }
);

document.getElementById("section3").animate(
  [
    // keyframes
    { transform: "translateX(0px)" },
    { transform: "translateX(-500px)" },
  ],
  {
    // timing options
    duration: 3000,
    iterations: 1,
  }
);

// Intersection Observer

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = entry.target.dataset.animate;
    } else {
      entry.target.style.animation = "none";
    }
  })
}

const observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll(".animate");

animationItems.forEach((item) => {
  observer.observe(item);
})