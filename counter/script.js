let count = 0;

//DOM Document Object Model 
const countDisplay = document.getElementById("count");

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

function updateDisplay(){
    countDisplay.textContent = count;
}

//listen for sm to happen: listen for a mouse click, run function
//Event driven programming : wait... clicks... run [interactive]
increaseBtn.addEventListener("click", function() {
    count = count + 1;
    updateDisplay();//update the screen
})

decreaseBtn.addEventListener("click", function(){
    count = count - 1;
    updateDisplay();
})

resetBtn.addEventListener("click", function(){
    count = 0;
    updateDisplay();
})
