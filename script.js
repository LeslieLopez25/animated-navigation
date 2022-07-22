const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// CONTROL NAVIGATION ANIMATION
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // TOGGLE: MENU BARS OPEN/CLOSED
  menuBars.classList.toggle("change");
  // TOGGLE: MENU ACTIVE
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // ANIMATE IN - OVERLAY
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //   ANIMATE IN - NAV ITEMS
    navAnimation("out", "in");
  } else {
    //  ANIMATE OUT - OVERLAY
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    //   ANIMATE OUT - NAV ITEMS
    navAnimation("in", "out");
  }
}

// EVENT LISTENERS
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
