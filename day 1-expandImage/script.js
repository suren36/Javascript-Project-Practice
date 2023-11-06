const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const pan = document.querySelectorAll(".panel");
pan.forEach((panel) => {
  pan.addEventListener("click", () => {
    removeActiveClasses();
    pan.classList.add("active");
  });
});
