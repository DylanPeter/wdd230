function toggleNav() {
    const navbarCollapse = document.getElementById("nav-collapse");
    navbarCollapse.classList.toggle("active");
}

document.getElementById("nav-toggle").addEventListener("click", toggleNav);
