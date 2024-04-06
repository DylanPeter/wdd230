// Function to get today's date in dd/mm/yyyy format
function getTodayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // january is 0
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}

// Set the value of the hidden input field to today's date
document.addEventListener("DOMContentLoaded", function() {
    var currentDate = getTodayDate();
    document.getElementById('submitDate').value = currentDate;
});

function incrementAndStoreCounter() {
    // Retrieve the current counter value from localStorage
    let counter = localStorage.getItem('drinkCounter');
    
    // If counter is null or undefined, initialize it to 0
    if (!counter) {
        counter = 0;
    } else {
        // Convert counter to a number
        counter = parseInt(counter);
    }
    
    // Increment the counter
    counter++;
    
    // Store the updated counter value back to localStorage
    localStorage.setItem('drinkCounter', counter);
    
    // Return the updated counter value
    return counter;
}

document.getElementById("form-submit").addEventListener("click", incrementAndStoreCounter);