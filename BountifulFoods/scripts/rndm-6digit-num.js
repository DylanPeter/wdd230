function generateRandomNumber() {
    // Generate a random number between 100000 and 999999
    return Math.floor(Math.random() * 9000000) + 1000000;
}

// Get the span element where the random number will be displayed
const randomNumberSpan = document.getElementById('random-number');

// Generate a random number and update the span content
randomNumberSpan.textContent = '$' + generateRandomNumber().toLocaleString(); // Using toLocaleString to format the number with commas