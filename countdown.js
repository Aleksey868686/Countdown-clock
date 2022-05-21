let status_click = false;
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

let seconds = document.getElementById('second').value;
let minutes = document.getElementById('minute').value;
const date = new Date(); 
const m = String(date.getMinutes()); 
const s = String(date.getSeconds());
console.log('secCounter ', seconds);
console.log('minCounter ', minutes);
console.log('date ', date);


//let increment = window.setTimeout((counter) => counter++), 1000);

let focusMethodOnMinute = function getFocus() {
  document.getElementById("minute").focus();
}
let focusMethodOnsecond = function getFocus() {
  document.getElementById("second").focus();
}

let increment = function() {
  if (seconds < 59) {
    seconds++;
    (String(seconds).length < 2) ? (document.getElementById('second').value = '0' + seconds) : 
    (document.getElementById('second').value = seconds);
    console.log('secCounter ', seconds);
    return seconds
  } else if (minutes < 59) {
    minutes++;
    seconds = '00';
    document.getElementById('second').value = seconds;
    (String(minutes).length < 2) ? (document.getElementById('minute').value = '0' + minutes) : 
    (document.getElementById('minute').value = minutes);
    //document.getElementById('minute').value = minutes;
    focusMethodOnsecond();
    console.log('minutes ', minutes)
    return minutes
  } else {
    return minutes
  }
}

let decrement = function() {
  if ((seconds <= 59) && (seconds > 0)) {
    seconds--;
    (String(seconds).length < 2) ? (document.getElementById('second').value = '0' + seconds) : 
    (document.getElementById('second').value = seconds);
    console.log('secCounter ', seconds)
    return seconds
  } else if ((minutes < 59) && (minutes > 0)) {
    minutes--;
    seconds = 59;
    (String(seconds).length < 2) ? (document.getElementById('second').value = '0' + seconds) : 
    (document.getElementById('second').value = seconds);
    (String(minutes).length < 2) ? (document.getElementById('minute').value = '0' + minutes) : 
    (document.getElementById('minute').value = minutes);
    console.log('minutes ', minutes)
    return minutes
  } else {
    return minutes
  }
}

plusButton.onclick = increment;
minusButton.onclick = decrement;


second.addEventListener('change', () => {seconds = second.value});
minute.oninput = () => {minutes = minute.value};

const update_up = () => {
  if (status_click) {
    interval = setInterval(increment, 200);    
  } else {
    if (interval) clearInterval(interval);
  }
  
}

const update_down = () => {
  if (status_click) {
    interval = setInterval(decrement, 200);    
  } else {
    if (interval) clearInterval(interval);
  }
  
}

plusButton.addEventListener('mousedown', e => {
  status_click = true;
  update_up();
});

plusButton.addEventListener('mouseup', e => {
  status_click = false;
  update_up();
});

minusButton.addEventListener('mousedown', e => {
  status_click = true;
  update_down();
});

minusButton.addEventListener('mouseup', e => {
  status_click = false;
  update_down();
});

startButton.onclick = () => {
  if (seconds) {
    interval = setInterval(decrement, 1000);    
  } else if (seconds == 0){
    clearInterval(interval);
  }
};

stopButton.onclick = () => {

}


let start = function(params) {
  
}

let stop = function(params) {
  
}