const hamburger = document.querySelector('.hamburger');
console.log(hamburger);

// hamburger.addEventListener('click', () => {
//     this.classList.toggle('is-active');
// })

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

