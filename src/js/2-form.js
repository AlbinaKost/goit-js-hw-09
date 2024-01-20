const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

try {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  email.value = savedData.email?.trim() || '';
  message.value = savedData.message?.trim() || '';
} catch (error) {}

form.addEventListener('input', () => {
  const dataToSave = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(dataToSave));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value.trim() !== '' && message.value.trim() !== '') {
    console.log({
      email: email.value.trim(),
      message: message.value.trim(),
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});