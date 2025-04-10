const form = document.getElementById('mioForm');
const messaggioErrore = document.getElementById('messaggioErrore');

form.addEventListener('submit', function(event) {
  const nome = document.getElementById('nome').value.trim();
  const cognome = document.getElementById('cognome').value.trim();

  if (!nome || !cognome) {
    messaggioErrore.textContent = 'Attenzione, compila tutti i campi!';
    event.preventDefault();
  } else {
    messaggioErrore.textContent = '';
  }
});