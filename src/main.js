"use strict";

const input = document.querySelector(".questionInput");
const USER_LS = "currentUser";
const SHOW = "showing";
const clockAndTodo = document.querySelector(".clockAndTodo");
const nameSpan = document.querySelector(".name");
const question = document.querySelector(".question");

function printContent(currentUser) {
  question.classList.remove("showing");
  clockAndTodo.classList.add("showing");
  nameSpan.innerText = `Hello ${currentUser}`;
}

function saveCurrentUser() {
  input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      const value = input.value;
      localStorage.setItem(USER_LS, value);
      printContent(value);
    }
  });
}

function showQuestion() {
  question.classList.add(SHOW);
}

function loadclockAndTodo() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    showQuestion();
    saveCurrentUser();
  } else {
    printContent(currentUser);
  }
}

function setClock() {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const todayTime = `${hour}:${minutes}`;

  showClock(todayTime);
  setTimeout(setClock, 1000);
}

function showClock(time) {
  const spanClock = document.querySelector(".time");
  spanClock.innerHTML = time;
}
setClock();

loadclockAndTodo();
