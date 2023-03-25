"use strict";
///////////////////////////////////////////////////////////////////////////////////////
//using for each method//

// const row = document.querySelector(".block"); //it is used to store the class value
// const movements = [
//   200, -200, 5000, 400, -5000, -60, 1, 1, 1, 10000, 1, 1000, -1, 100, -10,
// ];
// const displayMove = function (move) {
//   row.innerHTML = ""; //it is use to empty the selected class
//   move.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     //******************************************************** */
//     const html = `<div class="d_w_a_container">
//                       <div class="d_w_date_container">
//                         <p class="${type}">${i + 1}${type}</p>
//                         <span class="date">00/00/0000</span>
//                       </div>
//                         <p class="amount">₹${mov}</p>
//                  </div>`;
//     //************************************************************* */
//     row.insertAdjacentHTML("afterbegin", html); //it is used to call the html value
//     //afterbegin(the index value in desending order(5,4,3,2,1))
//     //beforeend(1,2,3,4,5)
//   });
// };
// displayMove(movements);
//////////////////////////////////////////////////////////////////////////////////////////
const row = document.querySelector(".block");
const inputUser = document.querySelector(".user");
const inputPin = document.querySelector(".pin");
const userLoginButton = document.querySelector(".btn");
const display = document.querySelector(".display");
const usreNameDisplay = document.querySelector(".username");
const logoName = document.querySelector(".logoname");
const errorMessage = document.querySelector(".display1");
const transferButton = document.querySelector(".tm_btn");
const transferName = document.querySelector(".tm_name");
const transferAmount = document.querySelector(".tm_amount");
const balance = document.querySelector(".balance");
const totalBalance = Number(balance.textContent.slice(1));
const loan = document.querySelector(".loan");
const loanRequest = document.querySelector(".rloan");
const closeAccount = document.querySelector(".cl");
const closeAccountName = document.querySelector(".ca_name");
const closeAccountPin = document.querySelector(".ca_amount");
const interset = document.querySelector(".inn");
const out = document.querySelector(".outt");
const body = document.querySelector("body");
const sort = document.querySelector(".sort");
const timeOut = document.querySelector(".timeout");
const whish = document.querySelector(".logoname");
const WelcomeBonusDate = new Date();
// console.log(WelcomeBonusDate);
const account1 = {
  fullName: "RAJASURYA R",
  name: "surya",
  pin: 2013080,
  balance: [2000, -1000, 1000, -500, -500, 1],
  dates: [
    "2022-02-10T08:52:07.015Z",
    "2023-02-06T08:52:07.015Z",
    "2023-02-04T08:52:07.015Z",
    "2023-02-09T08:52:07.015Z",
    "2023-02-10T08:52:07.015Z",
    "2023-02-11T08:52:07.015Z",
  ],
  total: 0,
  loanCount: 0,
  local: "en-IN",
  transferName: [
    "Harish",
    "Ponjeeva",
    "Shankar",
    "Loan Amount",
    "harish",
    "Loan Amount",
  ],
};
const account2 = {
  fullName: "PONJEEVA J",
  name: "ponjeeva",
  pin: 2013073,
  balance: [1000],
  dates: [WelcomeBonusDate],
  total: 0,
  loanCount: 0,
  local: "en-IN",
  transferName: ["Welcome Bonus"],
};
const account3 = {
  fullName: "HARISH V",
  name: "harish",
  pin: 2013030,
  balance: [1000],
  dates: [WelcomeBonusDate],
  total: 0,
  loanCount: 0,
  local: "en-IN",
  transferName: ["Welcome Bonus"],
};
const account4 = {
  fullName: "SHANKAR ",
  name: "shankar",
  pin: 2013097,
  balance: [1000],
  dates: [WelcomeBonusDate],
  total: 0,
  loanCount: 0,
  local: "en-IN",
  transferName: ["Welcome Bonus"],
};
const account5 = {
  fullName: "Shivaprakash",
  name: "shivaprakash",
  pin: 2013099,
  balance: [1000],
  dates: [WelcomeBonusDate],
  total: 0,
  loanCount: 0,
  local: "ta-IN",
  transferName: ["Welcome Bonus"],
};
//login data recever//
let funa = localStorage.getItem("send");
let userna = localStorage.getItem("send1");
let pass = localStorage.getItem("send2");
//login data recever//
const verify = [
  account1.name,
  account2.name,
  account3.name,
  account4.name,
  account5.name,
];
// console.log(verify);

//

const account6 = {
  fullName: funa,
  name: userna,
  pin: Number(pass),
  balance: [1000],
  dates: [WelcomeBonusDate],
  total: 0,
  loanCount: 0,
  local: "en-IN",
  transferName: ["Welcome Bonus"],
};
let allAccount = [account1, account2, account3, account4, account5, account6];

//user login//
///using find method we can find the user data
//Note :if the user name and pin are incorrect then the function will look for the name, if ther is no name find it will return error message to avoid this use '?'
const nowIn = new Date();
const option = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const option2 = {
  style: "currency",
  currency: "INR",
};

let userAccountStore = [];

const displayDates = function (date, name) {
  const dis = calcDayPassed(new Date(), date);
  let nameDisplay = name.charAt(0).toUpperCase() + name.slice(1);
  // console.log(name.charAt(0).toUpperCase());
  if (dis === 0) return `Today [${nameDisplay}]`;
  if (dis === 1) return `Yesterday [${nameDisplay}]`;
  if (dis === 2) return `3 Days ago [${nameDisplay}]`;
  if (dis === 7) return `A week ago [${nameDisplay}]`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth()}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year} [${nameDisplay}]`;
  }
};

//setTimmerOut//

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timeOut.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      logoName.textContent = "Log in to get started";
      display.classList.add("display");
    }
    time--;
  };
  let time = 600;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
//setTimmerOut//
let timer;
const calcDayPassed = (date1, date2) =>
  Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
const balanceDisplay = function (find, sort) {
  row.innerHTML = "";
  let temp = find?.balance;
  const displayDate = find?.dates;

  const movs = sort ? temp.slice().sort((a, b) => a - b) : temp;
  const find1 = allAccount.find((mov) => mov?.name === userAccountStore[0]);
  movs.forEach(function (mov, i) {
    const now = new Date(displayDate[i]);
    const name = find1?.transferName[i];
    // console.log(find1.transferName[i]);
    let date = displayDates(now, name);
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="d_w_a_container">
                  <div class="d_w_date_container">
                      <p class="${type}">${i + 1}${type}</p>
                      <span class="date">${date}</span>
                  </div>
                      <p class="amount">${new Intl.NumberFormat(
                        "en-IN",
                        option2
                      ).format(mov)}</p>
                 </div>`;
    row.insertAdjacentHTML("afterbegin", html);
  });
};
const sumFun = function (find) {
  let sum = find.balance.reduce((acc, mov) => acc + mov, 0);
  let temp = sum;
  balance.textContent = new Intl.NumberFormat("en-IN", option2).format(sum);
  let deposite = find.balance
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  interset.textContent = new Intl.NumberFormat("en-IN", option2).format(
    deposite
  );
  let withdrawal = find.balance
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  out.textContent = new Intl.NumberFormat("en-IN", option2).format(withdrawal);
  return sum;
};
const usercheck = function (user, pin) {
  let find = allAccount.find((mov) => mov?.name === user);
  if (user === find?.name && Number(pin) === find?.pin) {
    display.classList.remove("display");
    usreNameDisplay.textContent = `Welcome you! ${find.fullName}`;
    logoName.textContent = "Good Morning...";
    sumFun(find);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    whishshow();
    time.textContent = new Intl.DateTimeFormat(find?.local, option).format(
      nowIn
    );
    // userNameAm=[];
  } else {
    errorMessage.classList.remove("display1");
    display.classList.add("display");
    document.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        errorMessage.classList.add("display1");
        inputUser.value = inputPin.value = "";
      }
    });
  }
  userAccountStore = [user];
  balanceDisplay(find);
};
const login = document.getElementById("suma");
login.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    const user = inputUser.value;
    const pin = inputPin.value;
    usercheck(user, pin);
    console.log("hi");
    inputUser.value = inputPin.value = "";
  }
});
// userLoginButton.addEventListener("click", function (e) {
// });
transferButton.addEventListener("click", function (e) {
  e.preventDefault();
  const nameTransfer = transferName.value;

  const amount = transferAmount.value;
  const findAmountTransfer = allAccount.find(
    (mov) => mov?.name === nameTransfer
  );
  const find = allAccount.find((mov) => mov?.name === userAccountStore[0]);
  let sum = sumFun(find);
  if (
    nameTransfer != userAccountStore[0] &&
    findAmountTransfer?.name == nameTransfer
  ) {
    if (amount > 0 && amount <= sum) {
      findAmountTransfer?.balance.push(Number(amount)); //to the other user
      find?.balance.push(Number(amount * -1)); //my account
      find?.transferName.push(nameTransfer);
      findAmountTransfer?.transferName.push(find?.name);
      // let now = new Date();
      find?.dates.push(now);
      findAmountTransfer?.dates.push(now);
      sumFun(find);
    } else {
      alert("insufficiend balance!...(or)plz give above >0...");
    }
  } else {
    alert("     plz...!,Check User Name \n      Error001");
  }
  transferName.value = transferAmount.value = "";
  balanceDisplay(find);
  clearInterval(timer);
  timer = startLogOutTimer();
});
loan.addEventListener("click", function () {
  let loan = Math.floor(loanRequest.value);
  const find = allAccount.find((mov) => mov?.name === userAccountStore[0]);
  if (loan <= 1000000 && loan > 0 && find?.loanCount === 0) {
    find?.balance.push(Number(loan));
    find.loanCount = 1;
    let now = new Date();
    find?.dates.push(now);
    find?.transferName.push("Loan Amount");
  } else {
    alert("Error:code:001:>0<1000000\n (or) you exceed your limit...");
  }
  balanceDisplay(find);
  sumFun(find);
  loanRequest.value = "";
  clearInterval(timer);
  timer = startLogOutTimer();
});
closeAccount.addEventListener("click", function () {
  const find = allAccount.find((mov) => mov?.name === userAccountStore[0]);
  const name = closeAccountName.value;
  const pinCode = closeAccountPin.value;
  const index = allAccount.findIndex((acc) => name === acc.name);
  const user = find.name;
  const pin = find.pin;
  if (user === name && Number(pinCode) === pin) {
    allAccount.splice(index, 1);
    display.classList.add("display");
    alert("Thank you!...Vist again❤️🙏");
  } else {
    alert("     plz...!,Check User Name \n      Error001");
  }
  logoName.textContent = "Log in to get started";
  closeAccountName.value = closeAccountPin = "";
});
let sortc = false;
sort.addEventListener("click", function () {
  let find = allAccount.find((mov) => mov?.name === userAccountStore[0]);
  balanceDisplay(find, !sortc);
  sortc = !sortc;
});
//Date Display
const time = document.querySelector(".time");
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth()}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// time.textContent = `${day}/${month}/${year},${hour}:${min}`;
//we can use API for date

// const local = navigator.language;
const now = new Date();
// console.log(now.getHours());
let daywish = now.getHours();
const whishshow = function () {
  if (daywish >= 5 && daywish < 12) {
    whish.textContent = "Good Morning...";
    // alert("Tips:Yoga is the key to the flexibility!...");
  } else if (daywish >= 12 && daywish < 15) {
    whish.textContent = "Good Afternoon...";
    // alert("All You Need Is Lunch.\n Have you taken your lunch!...");
  } else if (daywish >= 15 && daywish < 22) {
    whish.textContent = "Good Evening...";
    // alert("Refresh and refresh with Tea!...\n Good Evening...");
  } else if (daywish >= 22 && daywish < 24) {
    whish.textContent = "Good Night...";
    // alert(
    //   // "“Night is the wonderful opportunity to take rest, to forgive, to smile, to get ready for all the battles that you have to fight tomorrow.” “As the night gets dark, let your worries fade. Sleep peacefully knowing you've done all you can do for today.” “The night is more alive and more richly colored than the day.”"
    // );
  } else if (daywish >= 1 && daywish < 5) {
    whish.textContent = "Good Noon...";
    // alert("The dead of midnight is the noon of thought.");
  } else {
  }
};
// import{
//   send
// } from './loginpage.js';
// console.log(send.name);
// let funaz = localStorage.getItem("send");
// console.log(funaz);
window.addEventListener('beforeunload',function(e)
{
  e.preventDefault();
  e.returnValue='';
});