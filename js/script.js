const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

function setOpen(isOpen) {
  nav.classList.toggle('active', isOpen);
  toggleBtn.classList.toggle('open', isOpen);
  toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  toggleBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

toggleBtn.addEventListener('click', () => {
  setOpen(!nav.classList.contains('active'));
});

// Close when clicking a link
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => setOpen(false));
});

// Close on outside click
document.addEventListener('click', (e) => {
  const clickedInsideMenu = nav.contains(e.target) || toggleBtn.contains(e.target);
  if (!clickedInsideMenu && nav.classList.contains('active')) setOpen(false);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setOpen(false);
});

// Optional: reset on resize (prevents weird states after resizing)
window.addEventListener('resize', () => {
  // Example: always close on resize
  setOpen(false);
});


const logosContainer = document.querySelector('.logos');
const logos = Array.from(logosContainer.children);

// Clone all logos to make infinite loop
logos.forEach(logo => {
  const clone = logo.cloneNode(true);
  logosContainer.appendChild(clone);
});

let position = 0;
const logoWidth = logos[0].offsetWidth + 60; // logo width + gap
const totalLogos = logos.length;

const speed = 2; // pixels per frame
const pauseTime = 1000; // pause at each logo in ms
let moving = true;

function animateLogos() {
  if (moving) {
    position += speed;
    if (position >= logoWidth * totalLogos) {
      position = 0; // reset smoothly
    }
    logosContainer.style.transform = `translateX(-${position}px)`;

    // Check if we are exactly at a logo boundary to pause
    if (position % logoWidth < speed) {
      moving = false;
      setTimeout(() => {
        moving = true;
        requestAnimationFrame(animateLogos);
      }, pauseTime);
      return; // pause before next frame
    }
  }
  requestAnimationFrame(animateLogos);
}

animateLogos();

// Show/hide back-to-top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  e.target.reset();
});
