const email = "user@example.com"; // Para simular um email fornecido
const password = "12345"; // Para simular uma senha fornecida

function showAlert(message) {
  alert(message);
}

if (email && password) {
  showAlert(`Login successful! Welcome, ${email}`);
} else {
  showAlert('Please fill in all fields.');
}
