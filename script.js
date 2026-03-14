const yearElement = document.getElementById('year');
const form = document.getElementById('quoteForm');
const message = document.getElementById('formMessage');

yearElement.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const name = formData.get('name');
  const product = formData.get('product');
  const quantity = formData.get('quantity');

  message.textContent = `Thanks ${name}! Your request for ${quantity} kg of ${product.toUpperCase()} has been received. We will contact you shortly.`;
  form.reset();
});
