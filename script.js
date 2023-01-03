let toggle = document.getElementById('toggle');
let nav = document.querySelector('nav');
let burgerIcon = document.getElementById('open');
let closeIcon = document.getElementById('close');

toggle.addEventListener('click', function () {
   nav.classList.toggle('hide');
   burgerIcon.classList.toggle('hide');
   closeIcon.classList.toggle('hide');
})
