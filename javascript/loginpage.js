"use strict";
const login_button = document.querySelector(".sign_up_btn");
const name1 = document.querySelector(".full_name");
const name2 = document.querySelector(".user_name");
const pass1 = document.querySelector(".password");
const pass2 = document.querySelector(".password_cof");
const display = document.querySelector(".display");
let aluser = ["surya", "ponjeeva", "harish", "shankar", "shivaprakash"];
login_button.addEventListener("click", function () {
  const full_name = name1.value;
  const user = name2.value;
  const password = pass1.value;
  const con_password = pass2.value;
  if (
    full_name != "" &&
    user != "" &&
    password.length >= 4 &&
    password.length <= 7 &&
    password === con_password
  ) {
    const bo = aluser.includes(user);
    if (bo != true) {
      localStorage.setItem("send", full_name);
      localStorage.setItem("send1", user);
      localStorage.setItem("send2", password);
      display.classList.remove("display");
      setTimeout(() => {
        display.classList.add("display");
        window.location.href = "/htmlpage/main_page.html";
      }, 3000);
    } else {
      alert("You are already a user of our bank..!\nTry to Log-In");
      window.location.href = "/htmlpage/main_page.html";
    }
  } else {
    alert("Check your all the detalis you have entered...!\nTry Again.");
  }
});