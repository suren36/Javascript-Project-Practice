const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "I've worked with literally hundreds of HTML/CSS developers, and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details.",
  },
  {
    name: "John Doe",
    position: "Developer",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit nulla non enim ultrices, a convallis libero placerat. Integer aliquet vitae mi vel rhoncus.",
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Sed tincidunt sapien id odio iaculis, non euismod velit auctor. Aenean eget quam vel eros consectetur ullamcorper a eget est. Nulla facilisi.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
