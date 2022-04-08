let form = document.getElementById("form");
let togglePassword = document.getElementById("toggle");

// checkbox to show and hide password
togglePassword.addEventListener("change", (e) => {
  e.preventDefault();
  let input1 = document.getElementById("password1");
  let input2 = document.getElementById("password2");
  if (input1.type === "password" && input2.type === "password") {
    input1.type = "text";
    input2.type = "text";
  } else {
    input1.type = "password";
    input2.type = "password";
  }
});

// add event listener when the user clicks the reset button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordMatch()) {
    successMessage();
    // redirect to login page after 3 sec if validate if true
    setTimeout(function () {
      window.location.href = "/login";
    }, 2000);
  } else {
    errorMessage();
  }
});

validatePassword();

function validatePassword() {
  let password1Input = document.getElementById("password1");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");

  // show password requirements when the user focus on password field
  password1Input.onfocus = function () {
    document.getElementById("message").style.display = "block";
  };

  // hide password requirements when the user doesnot focuses on password field
  password1Input.onblur = function () {
    document.getElementById("message").style.display = "none";
  };

  // When the user starts to type something inside the password field
  password1Input.onkeyup = function () {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (password1Input.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (password1Input.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (password1Input.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (password1Input.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };

  let password2Input = document.getElementById("password2");
  // when the user starts to type on confirm password field
  password2Input.onkeyup = function () {
    if (password2Input.value === password1Input.value) {
      document.getElementById("passwordMatchMessage").innerHTML =
        "<span style='color: #8b0b0b;'>Password matched</span>";
    }
  };
}

function passwordMatch() {
  let password1Input = document.getElementById("password1");
  let password2Input = document.getElementById("password2");
  if (password1Input.value === password2Input.value) return true;
  return false;
}

function successMessage() {
  document.getElementById("successMessage").innerHTML =
    " Reset Successful. Redirecting...";
}

function errorMessage() {
  document.getElementById("successMessage").innerHTML =
    " Please enter same password ";
}
