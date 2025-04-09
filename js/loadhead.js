document.addEventListener('DOMContentLoaded', function() {
  // Load the common head content
  const headPlaceholder = document.getElementById('head-placeholder');
  if (headPlaceholder) {
    fetch('/head.html')
      .then(response => response.text())
      .then(data => {
        // Insert the common head content
        headPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading common head content:', error));
  }
});
