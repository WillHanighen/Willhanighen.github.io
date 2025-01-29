document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "check the URL for typos...",
      "try refreshing the page...",
      "go back to the homepage...",
      "use the navigation bar to find what you're looking for..."
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 750,
    startDelay: 500,
    loop: true
  };

  var typed = new Typed(".element", options);
});
