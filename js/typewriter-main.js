document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "amateur programmer...",
      "fishkeeper...",
      "3D printing enthusiast...",
      "gamer..."
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 750,
    startDelay: 500,
    loop: true
  };

  var typed = new Typed(".element", options);
});
