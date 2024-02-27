function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  // 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
// Get the last visit date from localStorage or set it to null if it doesn't exist
let lastVisit = localStorage.getItem('lastVisit');

// Get the current date
let currentDate = new Date();

// Display messages based on the time between visits
if (!lastVisit) {
    // If this is the user's first visit
    document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Convert lastVisit from string to Date object
    lastVisit = new Date(lastVisit);

    // Calculate the time difference in milliseconds
    let timeDifference = currentDate - lastVisit;
    // Convert milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        // If less than a day has passed since the last visit
        document.getElementById('message').textContent = "Back so soon! Awesome!";
    } else {
        // If more than a day has passed since the last visit
        let message;
        if (daysDifference === 1) {
            message = "day";
        } else {
            message = "days";
        }
        document.getElementById('message').textContent = `You last visited ${daysDifference} ${message} ago.`;
    }
}

// Store the current visit date in localStorage
localStorage.setItem('lastVisit', currentDate);

// Display messages based on the time between visits in the sidebar content area
if (!lastVisit) {
    // If this is the user's first visit
    document.getElementById('sidebarContent').textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Convert lastVisit from string to Date object
    lastVisit = new Date(lastVisit);

    // Calculate the time difference in milliseconds
    let timeDifference = currentDate - lastVisit;
    // Convert milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        // If less than a day has passed since the last visit
        document.getElementById('sidebarContent').textContent = "Back so soon! Awesome!";
    } else {
        // If more than a day has passed since the last visit
        let message;
        if (daysDifference === 1) {
            message = "day";
        } else {
            message = "days";
        }
        document.getElementById('sidebarContent').textContent = `You last visited ${daysDifference} ${message} ago.`;
    }
}

