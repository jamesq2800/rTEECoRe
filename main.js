// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Close nav on link click (mobile)
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
