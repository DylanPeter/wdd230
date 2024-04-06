function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function toggleMenu() {
    var nav = document.querySelector('.navigation ul');
    nav.style.display = (nav.style.display === 'none') ? 'block' : 'none';
}
// Function to get the number of visits from local storage
function getNumberOfVisits() {
    let visits = localStorage.getItem('visits');
    if (!visits) {
        // If visits is not stored in local storage, set it to 1
        localStorage.setItem('visits', '1');
        return 1;
    } else {
        // If visits is stored in local storage, increment it by 1 and return
        visits = parseInt(visits) + 1;
        localStorage.setItem('visits', visits.toString());
        return visits;
    }
}

// Get the number of visits
let numberOfVisits = getNumberOfVisits();

// Update the content of the element with the "visits" class
document.querySelector('.visits').textContent = numberOfVisits;

