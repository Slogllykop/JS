"use strict";

const w = document.querySelector('.key-w');
const a = document.querySelector('.key-a');
const s = document.querySelector('.key-s');
const d = document.querySelector('.key-d');
const shift = document.querySelector('.key-shift');
const space = document.querySelector('.key-space');

(function(){
    document.addEventListener('keypress', function (e) {
        console.log(e);
    });
})();

document.addEventListener('keydown', function (e) {
  if (e.key === 'w') {
    w.classList.add('active');
  }
  if (e.key === 'a') {
    a.classList.add('active');
  }
  if (e.key === 's') {
    s.classList.add('active');
  }
  if (e.key === 'd') {
    d.classList.add('active');
  }
  if (e.shiftKey) {
    shift.classList.add('active');
  }
  if (e.key === ' ') {
    space.classList.add('active');
  }
});

document.addEventListener('keyup', function (e) {
  if (e.key === 'w') {
    w.classList.remove('active');
  }
  if (e.key === 'a') {
    a.classList.remove('active');
  }
  if (e.key === 's') {
    s.classList.remove('active');
  }
  if (e.key === 'd') {
    d.classList.remove('active');
  }
  if (!e.shiftKey) {
    shift.classList.remove('active');
  }
  if (e.key === ' ') {
    space.classList.remove('active');
  }
});