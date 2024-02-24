// Add this script to the static/js folder

document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navigationMenu = document.getElementById('navigation-menu');

    menuToggle.addEventListener('click', function () {
        navigationMenu.classList.toggle('show');
    });
});


