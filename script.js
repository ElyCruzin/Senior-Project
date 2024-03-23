
    // Change navigation bar style based on screen width
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 550 && window.innerWidth < 800) {
      document.getElementById("dropdown").classList.remove("hideitem");
      document.getElementById("gallery").classList.add("hideitem");
      document.getElementById("reviews").classList.add("hideitem");
      document.getElementById("resources").classList.add("hideitem");
    } if (window.innerWidth > 800) {
      document.getElementById("dropdown").classList.add("hideitem");
      document.getElementById("gallery").classList.remove("hideitem");
      document.getElementById("reviews").classList.remove("hideitem");
      document.getElementById("resources").classList.remove("hideitem");
    }
  });
  /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
  // Close side navigation if the window is resized to more than 500px
  window.addEventListener('load', function() {
    if (window.innerWidth >= 550 && window.innerWidth < 800) {
      document.getElementById("navbar").style.display = "flex";
      document.getElementById("sidenav").style.display = "none";
      document.getElementById("mobilebtn").style.display = "none";
    } if (window.innerWidth > 800) {
      document.getElementById("dropdown").classList.add("hideitem");
      document.getElementById("gallery").classList.remove("hideitem");
      document.getElementById("reviews").classList.remove("hideitem");
      document.getElementById("resources").classList.remove("hideitem");
    }
  });