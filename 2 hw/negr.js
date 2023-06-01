let btnRed = document.querySelector('.btn-red')
let btnYellow = document.querySelector('.btn-yellow')
let btnGreen = document.querySelector('.btn-green')
let btnReset = document.querySelector('.btn-reset')
btnRed.addEventListener('click', () => {
    setTimeout(() => {
        document.body.style.background = 'red'
        btnRed.disabled = true;
        btnYellow.disabled = false;
        btnGreen.disabled = false;
    }, 2000)
})

btnYellow.addEventListener('click', () => {
    setTimeout(() => {
        document.body.style.background = 'yellow'
        btnRed.disabled = false;
        btnYellow.disabled = true;
        btnGreen.disabled = false;
    }, 3000)
})

btnGreen.addEventListener('click', () => {
    setTimeout(() => {
        document.body.style.background = 'green';
        btnRed.disabled = false;
        btnYellow.disabled = false;
        btnGreen.disabled = true;
    }, 3000)
})

btnReset.addEventListener('click', () => {
    setTimeout(() => {
        document.body.style.background = 'white';
        btnRed.disabled = false;
        btnYellow.disabled = false;
        btnGreen.disabled = false; 
    },2000)
})