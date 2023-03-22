"use strict";

import './style.css';

const startTimer = document.querySelector('.startTimer');
const stopTimer = document.querySelector('.stopTimer');
const resetTimer = document.querySelector('.resetTimer');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


const timeValidation = () => {
  if(!hours.value && !minutes.value && !seconds.value) {
    console.log('Time Not Selected');
    return;
  }
  if(hours.value < 0 || minutes.value < 0 || seconds.value < 0) {
    hours.value = minutes.value = seconds.value = '';
    console.log('Negative Values Not Allowed');
    return;
  }
  let carry = 0;
  let hoursValue = hours.value ? hours.value : 0;
  let minutesValue = minutes.value ? minutes.value : 0;
  let secondsValue = seconds.value ? seconds.value : 0;
  console.log(hoursValue, minutesValue, secondsValue);
}

startTimer.addEventListener('click', () => {
  timeValidation();
});



