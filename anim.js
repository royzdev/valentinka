const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 200;
const STAR_COLOR = 'rgba(255, 255, 255, 0.7)';
const STAR_SIZE = 2;
const STAR_SPEED = 1;

function initStars() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: STAR_SIZE,
      speed: STAR_SPEED + Math.random() * 2
    });
  }
}

function drawStars() {
  if (!canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = STAR_COLOR;
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', initStars);
initStars();
drawStars();