document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navCollapse = document.getElementById('nav-collapse');

    navToggle.addEventListener('click', function() {
        // console.log('Button clicked'); // Check if this message appears in the console
        navCollapse.classList.toggle('active');
    });
});
