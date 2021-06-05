"use strict";
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
