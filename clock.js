const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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

function sum(array) {
  let result = 0 
  for (let i = 0; i < array.length; i++) {
      result += array[i]
  }
  return result
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
  let colors = randomColors();
  let brightness = sum(colors[0].split(',').concat(colors[1].split(',')).map(a => Number.parseInt(a)));
  document.body.style.background = `linear-gradient(to bottom, rgb(${colors[0]}), rgb(${colors[1]}))`;
  container.style.color = fontBrightness(brightness);
}

function fontBrightness(brightness) {
  br = Math.round((brightness / 765) * 60);
  br = br > 60 ? 60 : br;
  br = br < 35 ? 35 : br;

  return `rgb(${br}, ${br}, ${br})`;
}

function watchСlarity(brightness) {
  if (brightness > 765) {
    return 0.2
  }
  return 0.1
}

function randomColors() {
  return [
  `${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)}`, 
  `${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)}`];
}

window.addEventListener("load", changeTime);
button.addEventListener("click", changeStyle);
