document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelectorAll('.navmenu li a');

    hamburgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close navigation menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
});
