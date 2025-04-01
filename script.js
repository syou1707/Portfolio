// Function to load external HTML components (Navbar & Footer)
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load the navbar and footer on every page
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar-container", "../navbar.html");  // Adjust path as needed
    loadComponent("footer-container", "../footer.html");  
});