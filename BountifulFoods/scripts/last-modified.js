let lastMod = new Date(document.lastModified);
let formattedDate = lastMod.toLocaleDateString(); // Get the date portion in the local format so its not so long
document.getElementById("last-modified").textContent = `Last Updated: ${formattedDate}`;
