// Get the last modification date of the document
let lastMod = new Date(document.lastModified);
// Update the content of the span element with the last modification date
document.getElementById('lastModified').textContent = `Last Modified:  ${lastMod}`;