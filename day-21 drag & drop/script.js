const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
function dragStart() {
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  console.log("drag Leave");
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}