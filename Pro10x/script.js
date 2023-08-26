document.getElementById("scrollButton").addEventListener("click", function() {
  // Scroll down to a specific distance from the top of the page (adjust the distance as needed)
  window.scrollTo({
    top: window.innerHeight, // Scroll down by the height of the viewport
    behavior: "smooth" // Scroll with smooth animation
  });
});
