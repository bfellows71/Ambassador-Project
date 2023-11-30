document.getElementById('menu-button').addEventListener('click', toggleMenuSections);

function toggleMenuSections() {
    var appetizersSection = document.getElementById('appetizers');
    var mainCoursesSection = document.getElementById('main-courses');
    var dessertsSection = document.getElementById('desserts');

    // Toggle visibility of menu sections
    toggleSectionVisibility(appetizersSection);
    toggleSectionVisibility(mainCoursesSection);
    toggleSectionVisibility(dessertsSection);
}

function toggleSectionVisibility(section) {
    var currentDisplay = window.getComputedStyle(section).display;
    section.style.display = currentDisplay === 'none' ? 'block' : 'none';
}