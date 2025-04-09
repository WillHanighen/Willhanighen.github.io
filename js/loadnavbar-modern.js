// Modern navbar loader with scroll effect
document.addEventListener('DOMContentLoaded', function() {
  // Load the navbar
  fetch('/navbar-modern.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      
      // Add scroll effect to navbar
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      });
    })
    .catch(error => console.error('Error loading navbar:', error));
});
