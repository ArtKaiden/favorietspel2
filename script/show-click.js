const hover = document.querySelector(".hover-me");
const allclickable = document.querySelectorAll(".clickable");
const clickableLink = document.querySelector(".clickable-link");

allclickable.forEach((clickable) => {
  hover.addEventListener("mouseenter", () => {
    clickable.style.webkitFilter = "drop-shadow(5px 5px 5px rgb(0, 221, 33))";
    clickable.style.filter = "drop-shadow(5px 5px 5px  rgb(0, 213, 78));";
    // clickableLink.style.boxShadow="0px 0px 5px rgb(0, 221, 33)";
    // clickable.style.opacity = "0";
  });

  hover.addEventListener("mouseleave", () => {
    clickable.style.webkitFilter = "drop-shadow(0px 0px 0px rgb(0, 0, 0))";
    clickable.style.filter = "drop-shadow(0px 0px 0px  rgb(0, 0, 0));";
    // clickableLink.style.boxShadow="0px 0px 0px rgb(0, 0, 0)";
    // clickable.style.opacity = "100%";
  });
});
