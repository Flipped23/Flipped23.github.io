const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && preferredDark)) {
  root.setAttribute('data-theme', 'dark');
}

toggle?.addEventListener('click', () => {
  const dark = root.getAttribute('data-theme') === 'dark';
  if (dark) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
