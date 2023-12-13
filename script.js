document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const body = document.body;

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('menu-open');
        body.classList.toggle('menu-open');
    });
});