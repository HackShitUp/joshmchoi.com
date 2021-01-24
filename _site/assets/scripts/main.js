/// Display the hamburger menu
function toggleNavigationBar() {
  var x = document.getElementById("navigationbar");

  if (x.className === "navigationbar") {
    x.className += " responsive";
  } else {
    x.className = "navigationbar";
  }
}
