const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Function to update section visibility based on current hash
function updateSectionVisibility() {
    // All sections are now always visible
}

// Update visibility on page load
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = '#about';
    }
    updateSectionVisibility();
});

// Update visibility on hash change (navigation)
window.addEventListener('hashchange', updateSectionVisibility);
