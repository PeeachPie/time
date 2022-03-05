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
  let colors = randomColors()
  
  document.body.style.background = `linear-gradient(to bottom, rgb(${colors[0]}), rgb(${colors[1]}))`;
  changeFb(colors[0], colors[1])
}

function changeFb(color1, color2) {
  let brightness = sum(color1.split(',').concat(color2.split(',')).map(a => Number.parseInt(a)))

  br = Math.round((brightness / 765) * 60);
  br = br > 60 ? 60 : br;
  br = br < 35 ? 35 : br;

  container.style.color = `rgb(${br}, ${br}, ${br})`;
}

function randomColors() {
  return [
  `${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)}`, 
  `${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)}`]
}

window.addEventListener("load", changeTime);
button.addEventListener("click", changeStyle);

