const b = document.querySelector('body');

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');


circle1.addEventListener('click', function() {
    b.style.backgroundColor = "blue";
});

circle2.addEventListener('click', function() {
    b.style.backgroundColor = "violet";
});

circle3.addEventListener('click', function() {
    b.style.backgroundColor = "yellowGreen";
});
