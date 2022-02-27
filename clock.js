const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let button = document.querySelector('.button')
let time = document.querySelector('.time')
let day = document.querySelector('.day')

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function randomChoice(choice) {
    return choice[getRandom(0, choice.length - 1)];
  }

function changeTime() {
    let date = new Date()
    time.textContent = `${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() :'0' + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() :'0' + date.getSeconds()}`
    day.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]} `
    setTimeout(changeTime, 1000)
}

function changeBg() {
    let color1 = '#';
    let color2 = '#';
    for (let i = 0; i < 6; i++) {
        color1 += randomChoice(hex)
        color2 += randomChoice(hex)
    }
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`
}

window.addEventListener('load', changeTime)
button.addEventListener('click', changeBg)

