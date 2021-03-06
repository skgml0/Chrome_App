const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form .name-input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  const writedusername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, writedusername);
  // greeting.innerHTML = "Hello" + username;
  paintGreetings(writedusername);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
