/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var zoeken = document.querySelector('body > section button');

var spannend = document.querySelector('#spannend');
var diepgaand = document.querySelector('#diepgaand');


var hartje = document.querySelector('.hartje');


function animatie(e) {
    var target = e.currentTarget;
    target.classList.toggle('animation-heart');
    setTimeout(function () {
        target.classList.toggle('animation - heart');
    }, 3000);
}

function sorteer(event) {
    event.preventDefault();
    spannend.classList.toggle('hide');
    diepgaand.classList.toggle('hide');
    console.log('click');
}

zoeken.addEventListener('click', sorteer);
hartje.addEventListener('click', animatie);
