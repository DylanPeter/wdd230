// document.lastModified;
// returns: Tuesday, December 16, 2017 11:09:42

// Dynamically populate the current year in the footer's first paragraph
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Dynamically populate the date the document was last modified in the second paragraph
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;
document.getElementById("lastModified").innerText = "Last modified: " + lastModifiedTimestamp;