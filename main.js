const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    left.style.width = '75%';
    right.style.width = '25%';
    //left.style.transition = 'width 1s ease';
    right.style.transition = 'width 2s ease';
})
left.addEventListener('mouseleave', () => {
    left.style.width = '50%';
    right.style.width = '50%';
    left.style.transition = 'width 2s ease';
    // right.style.transition = 'width 1s ease';
})


right.addEventListener('mouseenter', () => {
    right.style.width = '75%';
    left.style.width = '25%';
    //left.style.transition = 'width 1s ease';
    left.style.transition = 'width 2s ease';
})
right.addEventListener('mouseleave', () => {
    right.style.width = '50%';
    left.style.width = '50%';
    right.style.transition = 'width 2s ease';
    // right.style.transition = 'width 1s ease';
})