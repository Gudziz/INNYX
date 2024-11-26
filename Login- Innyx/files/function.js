// script.js
document.querySelector('.login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
      alert(`Login successful! Welcome, ${email}`);
  } else {
      alert('Please fill in all fields.');
  }
});
