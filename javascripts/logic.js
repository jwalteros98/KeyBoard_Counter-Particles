var hits = 0;
var hitElement = document.querySelector(".hits");
document.body.onkeyup = function (e) {
 if ((e.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
  addHit();
 }
};

var addHit = function () {
 hits++;
 renderHits();
};

var renderHits = function () {
 hitElement.innerHTML = hits;
};



/****************** particles ******************** */
/*
const maxTrail = 100;
let trailIndex = 0;
const moveThreshold = 10;
const maxSpeed = 5000;
const maxSize = 24;
const maxColor = 16777215;
let x = 0;
let y = 0;
let diffX = 0;
let diffY = 0;

window.addEventListener("mousemove", (e) => {
  diffX = Math.abs(x - e.offsetX);
  diffY = Math.abs(y - e.offsetY);
  if (diffX >= moveThreshold || diffY >= moveThreshold) {
    spawnTrail(e);
  }

  x = e.offsetX;
  y = e.offsetY;
});

function spawnTrail(e) {
  if (trailIndex >= maxTrail) return;
  trailIndex++;
  const trail = document.createElement("div");

  let size = Math.floor(Math.random() * maxSize + 1) + "px";
  let speed = Math.floor(Math.random() * maxSpeed + 1);
  let color = "#" + Math.floor(Math.random() * maxColor).toString(16);
  trail.classList.add("trail");
  trail.style.backgroundColor = color;
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  trail.style.width = size;
  trail.style.animation = "trail " + speed + "ms linear forwards";
  setTimeout(function () {
    trail.remove();
    trailIndex--;
  }, speed);

  document.body.appendChild(trail);
}


*/