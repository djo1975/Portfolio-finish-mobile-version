const form1 = document.querySelector('#contact');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullName: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('text', JSON.stringify(obj));
});

const retrievedObject = localStorage.getItem('text');
const getValue = JSON.parse(retrievedObject);

window.addEventListener('load', () => {
  if (localStorage.getItem('text')) {
    document.querySelector('#name').value = getValue.fullname;
    document.querySelector('#email').value = getValue.emailAdress;
    document.querySelector('#message').value = getValue.message;
  }
});
