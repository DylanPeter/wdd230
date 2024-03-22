document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeBanner = document.getElementById("closeBanner");

    var today = new Date();
    var dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    }

    closeBanner.addEventListener("click", function(event) {
        event.preventDefault();
        banner.style.display = "none";
    });
});