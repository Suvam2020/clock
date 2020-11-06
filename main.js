var inc = 1000;

clock();

function clock() {
const date = new Date();

const hours = ((date.getHours() + 11) % 12 + 1);
const minutes = date.getMinutes();
const seconds = date.getSeconds();
       
const hour = hours * 30;
const minute = minutes * 6;
const second = seconds * 6;
       
document.querySelector('#hr').style.transform = `rotate(${(hour)+(minute/12)}deg)`
document.querySelector('#mn').style.transform = `rotate(${minute}deg)`
document.querySelector('#sc').style.transform = `rotate(${second}deg)`
 }

setInterval(clock, inc);
