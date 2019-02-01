/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var tekst = document.querySelectorAll('.tekst');


var circle1 = document.querySelector('.circle1');
console.log(tekst);
var circle2 = document.querySelector('.circle2');
var circle3 = document.querySelector('.circle3');
var circle4 = document.querySelector('.circle4');



function verhaal1() {
    tekst[0].classList.toggle('hide');
    tekst[1].classList.toggle('hide');
    circle1.classList.toggle('scale');
    console.log('test');
}

function verhaal2() {
    tekst[2].classList.toggle('hide');
    tekst[3].classList.toggle('hide');
    circle2.classList.toggle('scale');
    console.log('test');
}

function verhaal3() {
    tekst[4].classList.toggle('hide');
    tekst[5].classList.toggle('hide');
    circle3.classList.toggle('scale');
    console.log('test');
}

function verhaal4() {
    tekst[6].classList.toggle('hide');
    tekst[7].classList.toggle('hide');
    circle4.classList.toggle('scale');
    console.log('test');
}


circle1.addEventListener('click', verhaal1);
circle2.addEventListener('click', verhaal2);
circle3.addEventListener('click', verhaal3);
circle4.addEventListener('click', verhaal4);
