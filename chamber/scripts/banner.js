// Function to check if the current day is Monday, Tuesday, or Wednesday
function isWeekday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, and Wednesday
}

// Display or hide the banner based on the day of the week
window.onload = function() {
    if (isWeekday()) {
        document.getElementById('banner').style.display = 'block';
    } else {
        document.getElementById('banner').style.display = 'none';
    }
};

// Function to toggle the visibility of the banner based on the current day
function toggleBanner() {
    const banner = document.getElementById('banner');
    if (isWeekday()) {
        banner.style.display = 'block'; // Show the banner
    } else {
        banner.style.display = 'none'; // Hide the banner
    }
}
function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none'; // Hide the banner
}
document.getElementById('closeBanner').addEventListener('click', closeBanner);

// Call toggleBanner function when the page loads
window.onload = toggleBanner;