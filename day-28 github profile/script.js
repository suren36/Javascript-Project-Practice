const APIURL = "http://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("There is no user by this name");
    }
  }
}
function createUserCard(user) {
  const cardHtml = `
    <div class="card">
      <div><img src="${user.avatar_url}" alt="${user.name}" class="avatar" /></div>

      <div class="user-info">
        <h1>${user.name}</h1>
        <p>${user.bio} </p>
        <ul>
          <li>${user.followers} <strong>Follower</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repo</strong></li>
        </ul>

         <div id="repos">
         
        </div>
      </div>
    </div>`;
  main.innerHTML = cardHtml;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
