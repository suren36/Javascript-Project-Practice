const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;

  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (360 / 12) * (hours + minutes / 60 + seconds / 3600);
  const minuteAngle = (360 / 60) * (minutes + seconds / 60);
  const secondAngle = (360 / 60) * seconds;
  hourEl.style.transform = `translate(-50%, -100%)  rotate(${hourAngle}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;

  dateEl.innerHTML = `${days[day]},${months[month]}<span class="circle">${date}</span>`;

  setTimeout(setTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeEl.textContent = timeString;
}

updateTime();

setInterval(updateTime, 1000);

setTime();
