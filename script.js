document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'All fields are required.';
    return;
  }
  if (!emailPattern.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }
  formMessage.style.color = 'green';
  formMessage.textContent = 'Form submitted successfully!';
  // Optionally reset the form
  // this.reset();
});