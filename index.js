const setButton = document.getElementById('setButton');
const resetButton = document.getElementById('resetButton') 
let counterText = document.querySelector('.counter')
let counter = 0;
counterText.innerText = counter; 

setButton.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
})

// //DOM - Document Object Model
// comsole.log(document);
