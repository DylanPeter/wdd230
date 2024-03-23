function calculateDaysBetweenDates(lastVisit) {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
    const daysBetween = Math.round(Math.abs((today - lastVisit) / oneDay));
    return daysBetween;
}

// Function to check if the user has visited before and display the appropriate message
function displayVisitMessage() {
    const lastVisit = new Date(localStorage.getItem('lastVisit'));
    if (lastVisit) {
        const daysBetween = calculateDaysBetweenDates(lastVisit);
        if (daysBetween === 0) {
            document.getElementById('visit-message').textContent = 'Welcome back! You last visit was today!';
        } else {
            document.getElementById('visit-message').textContent = `Welcome back! It's been ${daysBetween} day(s) since your last visit.`;
        }
    } else {
        document.getElementById('visit-message').textContent = 'Welcome! It looks like this is your first visit.';
    }
}

// Function to update the last visit date in local storage
function updateLastVisit() {
    localStorage.setItem('lastVisit', new Date());
}

// Call functions when the page loads
window.onload = function() {
    displayVisitMessage();
    updateLastVisit();
};
