// script.js
const email = "user@example.com"; // Simula um email fornecido
const password = "12345"; // Simula uma senha fornecida

function showAlert(message) {
  alert(message);
}

if (email && password) {
  showAlert(`Login successful! Welcome, ${email}`);
} else {
  showAlert('Please fill in all fields.');
}
