const hover = document.querySelector(".hover-me");
const body = document.body;

hover.addEventListener("mouseenter", () => {
  body.style.backgroundImage = "url('./img/chart-with-names2.png')";
  body.style.backgroundSize = "cover";
});

hover.addEventListener("mouseleave", () => {
  body.style.backgroundImage = "url('./img/chart2.png')";
  body.style.backgroundSize = "cover";
});
