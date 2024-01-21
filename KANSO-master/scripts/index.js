function toggleMenu() {
  var x = document.querySelector(".nav-list");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
