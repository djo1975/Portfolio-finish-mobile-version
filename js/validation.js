const form = document.getElementById('form');
form.addEventListener('submit', validate);

function validate(e) {
  e.preventDefault(); // Spriječi podnošenje obrasca radi ručne validacije

  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  const errorMessage = document.getElementById('error-message');

  if (!validator.test(email)) {
    errorMessage.innerHTML = 'Please use lowercase to enter a valid email address!';
    errorMessage.style.visibility = 'visible';
    errorMessage.style.color = 'white';
    errorMessage.style.background = 'red';
    errorMessage.style.textAlign = 'center';
  } else {
    errorMessage.innerHTML = ''; // Poništi prikaz poruke o grešci
    errorMessage.style.visibility = 'hidden';

    // Ovdje možete dodati svoju logiku ili kod za manipulaciju podacima obrasca prije slanja
    // Na primjer, slanje podataka preko AJAX-a ili obrada podataka na strani klijenta

    // Simulacija slanja podataka obrasca
    simulateFormSubmission();
  }
}

function simulateFormSubmission() {
  // Simulacija slanja podataka obrasca
  alert('Submitted');
  document.getElementById('form').reset(); // Resetiranje forme nakon uspješnog podnošenja
}
