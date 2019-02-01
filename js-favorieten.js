/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var download = document.querySelector('#favoriet main section > div');

function groen() {
    download.classList.toggle('green');
    console.log('test');
}

download.addEventListener('click', groen);
