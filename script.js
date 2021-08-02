const overlay = document.querySelector('.overlay');
const options = document.querySelectorAll('.option');
const btnCloseMenu = document.querySelector('.close-menu');
const btnOpenMenu = document.querySelector('.open-menu');

function openMenu() {
  overlay.classList.remove('hidden');
}

function closeMenu() {
  overlay.classList.add('hidden');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', closeMenu);
}
