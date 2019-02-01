/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var download = document.querySelectorAll('.download');

var target;

function downloaden(e) {
    target = e.currentTarget;
    target.classList.toggle('download-animatie');
    setTimeout(function () {
        target.classList.toggle('fadeweg');

    }, 1300);
    setTimeout(function () {
        target.classList.toggle('fa-check-circle');
        target.classList.toggle('fa-arrow-alt-circle-down');
        target.classList.toggle('fadeterug');
    }, 1700);
}

var i = 0;
for (i = 0; i <= download.length; i++) {
    download[i].addEventListener('click', downloaden);
}
