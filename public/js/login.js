let form = document.getElementById("form");
let togglePassword = document.getElementById("toggle");

// checkbox to show and hide password
togglePassword.addEventListener("change", (e) => {
  e.preventDefault();
  let input1 = document.getElementById("password");
  if (input1.type === "password") {
    input1.type = "text";
  } else {
    input1.type = "password";
  }
});

// add event listener when the user clicks the login button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("loginMessage").innerHTML = "Login Successful";
});
