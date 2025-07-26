document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav_link');

    // Toggle menu on icon click
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        });
    }

    // Close menu when any nav_link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show-menu');
        });
    });
});