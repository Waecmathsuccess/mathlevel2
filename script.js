// Select the counter element and buttons
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Initialize the counter value
let counterValue = 0;

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Increment the counter
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

// Decrement the counter
decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

// Reset the counter
resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});
