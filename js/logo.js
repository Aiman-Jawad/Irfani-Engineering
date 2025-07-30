const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const itemWidth = items[0].offsetWidth + 20; // Include margin
const totalItems = items.length;

let currentIndex = 0;

function moveCarousel() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    track.style.transform = "translateX(0)";
    currentIndex = 0;
  } else {
    const moveX = -itemWidth * currentIndex;
    track.style.transform = `translateX(${moveX}px)`;
  }
}

setInterval(moveCarousel, 10000); // Automatically move every 20 seconds
