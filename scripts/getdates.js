document.lastModified;

// Dynamically populate the current year in the footer's first paragraph
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Dynamically populate the date the document was last modified in the second paragraph
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;
// document.getElementById("lastModified").innerText = "Last modified: " + lastModifiedTimestamp;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});