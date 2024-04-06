document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the current counter value from localStorage
    let counter = localStorage.getItem('drinkCounter');
    
    // If counter is null or undefined, initialize it to 0
    if (!counter) {
        counter = 0;
    } else {
        // Convert counter to a number
        counter = parseInt(counter);
    }
    
    // Display the counter value on the page
    document.getElementById('drinks-ordered').textContent = counter || 0;
});