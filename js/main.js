const menu = document.querySelector('.my-menu');
const closeItems = document.querySelectorAll('.c-m');
const displayMobileMenu = () => {
  menu.style.display = 'block';
};
const closeMobileMenu = () => {
  menu.style.display = 'none';
};
document
  .querySelector('.openMenu')
  .addEventListener('click', displayMobileMenu);
closeItems.forEach((element) => element.addEventListener('click', closeMobileMenu));
