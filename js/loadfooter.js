document.addEventListener('DOMContentLoaded', function() {
  // Load the footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
        
        // Set the current year in the copyright notice
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
          yearElement.textContent = new Date().getFullYear();
        }
      })
      .catch(error => console.error('Error loading footer:', error));
  }
});
