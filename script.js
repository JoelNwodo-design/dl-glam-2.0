let btn = document.getElementById('menuBtn')
btn.addEventListener('click', async () => {
    const menu = document.getElementById('navLinks');
  const btn = document.querySelector('#menuBtn');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', menu.classList.contains('open'));
})


// Close on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('navLinks');
  const btn = document.querySelector('#menuBtn');
  if (!document.querySelector('#menuBtn').contains(e.target)) {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  }
});

// Close when a nav link is clicked
document.querySelectorAll('navLinks a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
    document.querySelector('#menuBtn').setAttribute('aria-expanded', false);
  });
});




const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Make canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas when window size changes
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Particle blueprint
function Particle() {
  this.x = Math.random() * canvas.width;       // random horizontal position
  this.y = canvas.height;                        // start at bottom
  this.size = Math.random() * 3 + 1;            // random size between 1-4px
  this.speedY = Math.random() * 1 + 0.3;        // random upward speed
  this.speedX = (Math.random() - 0.5) * 0.5;   // slight horizontal drift
  this.opacity = Math.random() * 0.5 + 0.1;     // random subtle opacity
}

// Move and redraw each particle
Particle.prototype.update = function() {
  this.y -= this.speedY;    // move up
  this.x += this.speedX;    // drift slightly sideways
  this.opacity -= 0.002;    // gradually fade out as it rises
}

Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
  ctx.fill();
}

// Create a pool of particles
let particles = [];
for (let i = 0; i < 80; i++) {
  let p = new Particle();
  p.y = Math.random() * canvas.height; // spread them out initially
  particles.push(p);
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas each frame

  particles.forEach(function(p, index) {
    p.update();
    p.draw();

    // Reset particle when it fades out or floats off screen
    if (p.opacity <= 0 || p.y < 0) {
      particles[index] = new Particle(); // replace with a fresh one
    }
  });

  requestAnimationFrame(animate); // keeps the loop going smoothly
}

animate();