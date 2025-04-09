/**
 * Site Utilities
 * A collection of utility functions for the website
 */

// Animation utilities
const SiteUtils = {
  /**
   * Initialize fade-in animations for elements with the 'fade-in' class
   */
  initFadeAnimations: function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(element);
    });
  },
  
  /**
   * Initialize form validation for contact forms
   */
  initFormValidation: function() {
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let valid = true;
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            valid = false;
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        });
        
        // Email validation if there's an email field
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailField.value)) {
            valid = false;
            emailField.classList.add('error');
          }
        }
        
        if (valid) {
          // This is a demo form - in a real implementation, you would send the form data to a server
          alert('Thank you for your message! This is a demo form and does not actually send messages yet.');
          form.reset();
        } else {
          alert('Please fill in all required fields correctly.');
        }
      });
    }
  },
  
  /**
   * Initialize project filtering functionality
   */
  initProjectFilters: function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          // Filter projects
          projectCards.forEach(card => {
            if (filter === 'all') {
              card.style.display = 'flex';
            } else {
              const tags = card.getAttribute('data-tags');
              if (tags && tags.includes(filter)) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            }
          });
        });
      });
    }
  },
  
  /**
   * Initialize all site utilities
   */
  init: function() {
    this.initFadeAnimations();
    this.initFormValidation();
    this.initProjectFilters();
    
    // Set current year in copyright notices
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }
};

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  SiteUtils.init();
});
