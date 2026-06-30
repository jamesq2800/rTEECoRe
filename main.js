// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Close nav on link click (mobile)
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav && nav.classList.remove('open'));
});

// Dropdown: ensure all closed on load, then toggle on hover
document.querySelectorAll('.has-dropdown').forEach(item => {
  const dropdown = item.querySelector('.dropdown');
  let hideTimer;

  dropdown.style.display = 'none';

  item.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer);
    dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => {
      dropdown.style.display = 'none';
    }, 100);
  });
});

// Light / Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('rteecore-theme') || 'dark';
root.setAttribute('data-theme', savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('rteecore-theme', next);
  });
}
