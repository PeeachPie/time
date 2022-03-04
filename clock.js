const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let button = document.querySelector(".button");
let time = document.querySelector(".time");
let day = document.querySelector(".day");
let container = document.querySelector(".container");

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomChoice(choice) {
  return choice[getRandom(0, choice.length - 1)];
}

function changeTime() {
  let date = new Date();
  time.textContent = `${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()}`;

  if (date.getDate() != day.textContent.slice(0, 2)) {
    day.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]}`;
  }
  setTimeout(changeTime, 100);
}

function changeStyle() {
  let color1 = "";
  let color2 = "";
  for (let i = 0; i < 6; i++) {
    color1 += randomChoice(hex);
    color2 += randomChoice(hex);
  }
  document.body.style.background = `linear-gradient(to bottom, #${color1}, #${color2})`;
  changeFb(color1, color2)
}

function changeFb(color1, color2) {
  let brightness = 0;
  for (let i = 0; i < 6; i += 2) {
    brightness +=
      Number.parseInt("0x" + color1.slice(i, i + 2)) +
      Number.parseInt("0x" + color2.slice(i, i + 2));
  }
  br = Math.round((brightness / 715) * 41);
  br = br > 41 ? 41 : br;
  br = br < 21 ? 21 : br;
  container.style.color = `#${br}${br}${br}`;
}

window.addEventListener("load", changeTime);
button.addEventListener("click", changeStyle);
