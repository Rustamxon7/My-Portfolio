// Mobile menu start////////////////////
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

// Mobile menu end////////////////////

// Popup menu start////////////////////
const data = {
  project1: {
    name: ‘Tonic’,
    img: ‘img/img1.png’,
    companyName: ‘CANOPY’,
    job: ‘Back End Dev’,
    year: 2015,
    decription:
      ‘Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea’,
    tags: [‘html’, ‘css’, ‘javaScript’],
  },
  project2: {
    name: ‘Multi-Post Stories’,
    img: ‘img/img2.png’,
    companyName: ‘FACEBOOK’,
    job: ‘Full Stack Dev’,
    year: 2015,
    decription:
      ‘Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea’,
    tags: [‘html’, ‘Ruby on rails’, ‘css’, ‘javaScript’],
  },
  project3: {
    name: ‘Facebook 360’,
    img: ‘img/img3.png’,
    companyName: ‘FACEBOOK’,
    job: ‘Full Stack Dev’,
    year: 2015,
    decription:
      ‘Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea’,
    tags: [‘html’, ‘Ruby on rails’, ‘css’, ‘javaScript’],
  },
  project4: {
    name: ‘Uber Navigation’,
    img: ‘img/img4.png’,
    companyName: ‘Uber’,
    job: ‘Lead Developer’,
    year: 2018,
    decription:
      ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ’,
    tags: [‘html’, ‘Ruby on rails’, ‘css’, ‘javaScript’],
  },
}
// Popup end /////////////////////
