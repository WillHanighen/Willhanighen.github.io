let gotop = document.getElementById("gotop");

window.onscroll = function() {scrollFunction()};

gotop.addEventListener("click", goTop);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    gotop.style.display = "block";
  } else {
    gotop.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
