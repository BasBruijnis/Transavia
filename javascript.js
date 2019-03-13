/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var zoeken = document.querySelector('body > section button');

var spannend = document.querySelector('#spannend');
var diepgaand = document.querySelector('#diepgaand');


var hartje = document.querySelector('.hartje');
var navHartje = document.querySelector('nav a');
var navhart = document.querySelector('.fa-heart');


function animatie(e) {
    var target = e.currentTarget;
    target.classList.toggle('animation-heart');

    setTimeout(function () {
        target.classList.toggle('animation-heart');
        target.classList.toggle('animation-bump');
        navhart.classList.toggle('far');
        navhart.classList.toggle('fas');
        navHartje.classList.toggle('navhartje');
    }, 1500);
    setTimeout(function () {
        target.classList.toggle('animation-bump');

    }, 2500);
}

function sorteer(event) {
    event.preventDefault();
    spannend.classList.toggle('hide');
    diepgaand.classList.toggle('hide');
    console.log('click');
}

zoeken.addEventListener('click', sorteer);
hartje.addEventListener('click', animatie);
