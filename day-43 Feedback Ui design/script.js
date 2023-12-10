const ratings = document.querySelectorAll(".ratings");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating = "Satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("ratings")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"</i>
  <strong>Thank You</strong>
  <br>
  <strong>Feedback : ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
